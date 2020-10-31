package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.hero.HeroRepository
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import org.jetbrains.exposed.exceptions.ExposedSQLException

class UpdateMapper(container: IContainer) : AbstractActionMapper<UpdateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			fetchMapper.map(
				heroRepository.update(item.id) {
					this.name = item.name
					heroRepository.attributes(item.id, attributeMapper.map(item.attributes))
				}
			)
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("hero_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update Hero!"
					validation("name", "error", "Hero with the given name already exists.")
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

	data class Request(val id: String, val name: String, val attributes: Attributes?)
}
