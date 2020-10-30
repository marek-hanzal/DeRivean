package derivean.server.rest.root.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.kingdom.KingdomRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class KingdomUpdateMapper(container: IContainer) : AbstractActionMapper<KingdomUpdateMapper.Request, Response<out Any>>(container) {
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			kingdomFetchMapper.map(
				kingdomRepository.update(item.id) {
					this.name = item.name
					kingdomRepository.attributes(item.id, *item.attributes?.distinctBy { it.attribute }?.map { it.attribute to it.value }?.toTypedArray() ?: arrayOf())
				}
			)
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("kingdom_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update Kingdom!"
					validation("name", "error", "Kingdom with the given name already exists.")
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

	data class Request(val id: String, val name: String, val attributes: List<Attribute>?)
	data class Attribute(val attribute: String, val value: Double)
}
