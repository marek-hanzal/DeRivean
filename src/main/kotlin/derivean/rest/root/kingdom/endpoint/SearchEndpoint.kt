package derivean.rest.root.kingdom.endpoint

import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractActionMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.Response
import leight.rest.ok

@KtorExperimentalAPI
class SearchEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val searchMapper: SearchMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/search".let { url ->
			discovery {
				this.name = "root.kingdom.search"
				this.description = "Search for kingdom(s) filtered by an expression."
				this.link = url
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, searchMapper)
					}
				}
			}
		}
	}
}

class SearchMapper(container: IContainer) : AbstractActionMapper<ApplicationRequest<SearchMapper.Request>, Response<out Any>>(container) {
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(Result(storage.read { kingdomRepository.search(item.request.search).map { fetchMapper.map(it) } }))

	data class Request(val search: String)
	data class Result(val items: List<FetchMapper.Fetch>)
}
