package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.hero.HeroRepository
import io.ktor.application.*
import io.ktor.routing.*

class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/hero/delete".let { url ->
			discovery {
				name = "root.hero.delete"
				link = url
				description = "Delete a Hero"
			}
			routing.post(url) {
				resolve(call, deleteMapper)
			}
		}
	}
}

class DeleteMapper(container: IContainer) : AbstractActionMapper<DeleteMapper.Request, Response<out Any>>(container) {
	private val heroRepository: HeroRepository by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.write {
			heroRepository.delete(item.id)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val id: String)
}
