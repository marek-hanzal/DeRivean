package derivean.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.translation.TranslationRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.exceptions.ExposedSQLException

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/translation/update".let { url ->
			discovery {
				link = url
				name = "root.translation.update"
				description = "Update a Translation"
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
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = try {
		ok(storage.write {
			item.request.let {
				fetchMapper.map(
					translationRepository.update(it.id) {
						this.language = it.language
						this.namespace = it.namespace ?: "translation"
						this.label = it.label
						this.text = it.text
					}
				)
			}
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("translation_unique") == true -> {
				conflict(ValidationResponse.build {
					this.message = "Cannot update Translation!"
					this.validation("language", "error", "Language or label already exists!")
					this.validation("label", "error", "Language or label already exists!")
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
		val language: String,
		val namespace: String?,
		val label: String,
		val text: String,
	)
}
