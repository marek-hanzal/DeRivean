package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.building.BuildingRepository
import derivean.server.kingdom.KingdomRepository
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import org.jetbrains.exposed.exceptions.ExposedSQLException

class CreateMapper(container: IContainer) : AbstractActionMapper<CreateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val attributesMapper: AttributesMapper by container.lazy()

	override fun resolve(item: Request) = try {
		created(storage.write {
			fetchMapper.map(
				buildingRepository.create {
					this.name = item.name
					this.kingdom = kingdomRepository.find(item.kingdom)
				}.also { building ->
					buildingRepository.attributes(building.id, attributesMapper.map(item.attributes))
				}
			)
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("building_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot create Building!"
					validation("name", "error", "Building with the given name already exists.")
				})
			}
			else -> {
				throw e
			}
		}
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val kingdom: String, val name: String, val attributes: Attributes?)
}
