package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.lib.storage.EntityUUID
import derivean.server.kingdom.KingdomRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.rest.common.Attribute
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/kingdom",
		"root.kingdom",
		fetchMapper,
		kingdomRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<Kingdom, FetchMapper.Fetch>(container) {
	override fun map(item: Kingdom) = Fetch.build {
		this.id = item.id
		this.user = item.user.id
		this.name = item.name
		this.stats = Stats(
			item.heroes.count(),
			item.buildings.count(),
		)
		item.attributes.forEach {
			this.attributes.add(Attribute(it.name, it.value))
		}
	}

	data class Fetch(
		val id: String,
		val user: String,
		val name: String,
		val stats: Stats,
		val attributes: List<Attribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var user: EntityUUID
			lateinit var name: String
			lateinit var stats: Stats
			val attributes = mutableListOf<Attribute>()

			fun build() = Fetch(
				id.toString(),
				user.toString(),
				name,
				stats,
				attributes,
			)
		}
	}

	data class Stats(
		val heroes: Long,
		val buildings: Long,
	)
}

