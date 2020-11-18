package derivean.rest.root.common.endpoint

import derivean.storage.repository.*
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
		"/api/root/search".let { url ->
			discovery {
				this.link = url
				this.name = "root.search"
				this.description = "Fulltext search through everything."
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
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.read {
		item.request.let {
			/**
			 * because this will search everywhere, there should be only a few results
			 */
			/**
			 * because this will search everywhere, there should be only a few results
			 */
			val limit = 50

			/**
			 * this will (should) prevent database for failing, but also all text columns
			 * must be at least 36 chars in length
			 */
			/**
			 * this will (should) prevent database for failing, but also all text columns
			 * must be at least 36 chars in length
			 */
			val search = it.search.take(36)
			Response(
				emptyList<Item>() +
					userRepository.search(search, limit).map { item -> Item(item.id.toString(), "user", item.name) } +
					kingdomRepository.search(search, limit).map { item -> Item(item.id.toString(), "kingdom", item.name) } +
					buildingRepository.search(search, limit).map { item -> Item(item.id.toString(), "building", item.name) } +
					heroRepository.search(search, limit).map { item -> Item(item.id.toString(), "hero", item.name) } +
					translationRepository.search(search, limit).map { item -> Item(item.id.toString(), "translation", item.language + ": " + item.label) }
			)
		}
	})

	data class Request(
		val search: String,
	)

	data class Response(
		val items: List<Item>,
	)

	data class Item(
		val id: String,
		val type: String,
		val name: String,
	)
}
