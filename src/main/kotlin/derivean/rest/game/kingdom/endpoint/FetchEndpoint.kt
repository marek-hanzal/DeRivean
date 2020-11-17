package derivean.rest.game.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.rest.common.FetchAttribute
import derivean.rest.game.AbstractFetchEndpoint
import derivean.storage.entities.AttributeEntity
import derivean.storage.entities.KingdomEntity
import derivean.storage.repository.KingdomRepository
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/game/kingdom",
		"game.kingdom",
		fetchMapper,
		kingdomRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<KingdomEntity, FetchMapper.Fetch>(container) {
	override fun map(item: KingdomEntity) = Fetch.build {
		this.id = item.id
		this.user = item.user.id
		this.name = item.name
		this.stats = Stats(
			item.heroes.count(),
			item.buildings.count(),
		)
		this.attributes = item.attributes
	}

	data class Fetch(
		val id: String,
		val user: String,
		val name: String,
		val stats: Stats,
		val attributes: List<FetchAttribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var user: EntityUUID
			lateinit var name: String
			lateinit var stats: Stats
			var attributes: SizedIterable<AttributeEntity> = SizedCollection()

			fun build() = Fetch(
				id.toString(),
				user.toString(),
				name,
				stats,
				attributes.map { FetchAttribute.build(it) },
			)
		}
	}

	data class Stats(
		val heroes: Long,
		val buildings: Long,
	)
}

