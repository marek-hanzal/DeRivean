package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.routing.*

class SearchEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val searchMapper: SearchMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/search".let { url ->
			discovery {
				this.name = "root.user.search"
				this.description = "Search for user(s) filtered by an expression."
				this.link = url
			}
			routing.post(url) {
				resolve(call, searchMapper)
			}
		}
	}
}

class SearchMapper(container: IContainer) : AbstractActionMapper<SearchMapper.Request, Response<out Any>>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun resolve(item: Request) = try {
		ok(Result(storage.read { userRepository.search(item.search).map { fetchMapper.map(it) } }))
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val search: String)
	data class Result(val items: List<FetchMapper.Fetch>)
}
