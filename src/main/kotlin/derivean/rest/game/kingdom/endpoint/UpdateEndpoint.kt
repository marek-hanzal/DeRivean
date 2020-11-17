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

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		item.request.let {
			fetchMapper.map(
				kingdomRepository.update(it.id) {
					it.name?.let { name -> this.name = name }
				}
			)
		}
	})

	override fun exception(e: Throwable) = when {
		e.message?.contains("kingdom_name_unique") == true -> {
			conflictWithUnique("Cannot update Kingdom!", "name", "Kingdom with the given name already exists.")
		}
		else -> null
	}

	data class Request(
		val id: String,
		val name: String?,
	)
}
