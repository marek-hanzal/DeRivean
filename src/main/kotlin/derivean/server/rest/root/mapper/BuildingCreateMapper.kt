package derivean.server.rest.root.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.building.BuildingRepository
import derivean.server.kingdom.KingdomRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class BuildingCreateMapper(container: IContainer) : AbstractActionMapper<BuildingCreateMapper.Request, Response<out Any>>(container) {
	private val buildingFetchMapper: BuildingFetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun resolve(item: Request) = try {
		created(storage.write {
			buildingFetchMapper.map(
				buildingRepository.create {
					this.name = item.name
					this.kingdom = kingdomRepository.find(item.kingdom)
				}.also { building ->
					buildingRepository.attributes(building.id, *item.attributes?.distinctBy { it.attribute }?.map { it.attribute to it.value }?.toTypedArray() ?: arrayOf())
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

	data class Request(val kingdom: String, val name: String, val attributes: List<Attribute>?)
	data class Attribute(val attribute: String, val value: Double)
}
