package derivean.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.server.attribute.AttributeRepository
import derivean.storage.repository.HeroRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.exceptions.ExposedSQLException

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/hero/update".let { url ->
			discovery {
				name = "root.hero.update"
				link = url
				description = "Update a Hero"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, updateMapper)
					}
				}
			}
		}
	}
}

class UpdateMapper(container: IContainer) : AbstractActionMapper<ApplicationRequest<UpdateMapper.Request>, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = try {
		ok(storage.write {
			item.request.let {
				fetchMapper.map(
					heroRepository.update(it.id) {
						it.name?.let { name -> this.name = name }
						this.attributes = attributeRepository.attributes(this.attributes, attributeMapper.map(it.attributes))
					}
				)
			}
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

	data class Request(
		val id: String,
		val name: String?,
		val attributes: Attributes?,
	)
}
