package derivean.rest.game.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.exceptions.ExposedSQLException

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/game/kingdom/update".let { url ->
			discovery {
				name = "game.kingdom.update"
				link = url
				description = "Update a Kingdom"
			}
			routing.authenticate {
				withAnyRole("game", "root") {
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
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = try {
		ok(storage.write {
			item.request.let {
				fetchMapper.map(
					kingdomRepository.update(it.id) {
						it.name?.let { name -> this.name = name }
					}
				)
			}
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

	data class Request(
		val id: String,
		val name: String?,
	)
}
