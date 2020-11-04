package derivean.server.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.translation.TranslationRepository
import io.ktor.application.*
import io.ktor.routing.*

class SearchEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val searchMapper: SearchMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/translation/search".let { url ->
			discovery {
				this.name = "root.translation.search"
				this.description = "Search for translation(s) filtered by an expression."
				this.link = url
			}
			routing.post(url) {
				resolve(call, searchMapper)
			}
		}
	}
}

class SearchMapper(container: IContainer) : AbstractActionMapper<SearchMapper.Request, Response<out Any>>(container) {
	private val translationRepository: TranslationRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun resolve(item: Request) = try {
		ok(Result(storage.read { translationRepository.search(item.search).map { fetchMapper.map(it) } }))
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val search: String)
	data class Result(val items: List<FetchMapper.Fetch>)
}
