package derivean.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.rest.root.AbstractFetchEndpoint
import derivean.server.hero.HeroRepository
import derivean.server.hero.entities.Hero
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/hero",
		"root.hero",
		fetchMapper,
		heroRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<Hero, FetchMapper.Fetch>(container) {
	override fun map(item: Hero) = Fetch.build {
		this.id = item.id
		this.kingdom = item.kingdom.id
		this.user = item.kingdom.user.id
		this.name = item.name
		item.attributes.forEach {
			this.attributes.add(Attribute(it.name, it.value))
		}
	}

	data class Fetch(
		val id: String,
		val kingdom: String,
		val user: String,
		val name: String,
		val attributes: List<Attribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var kingdom: EntityUUID
			lateinit var user: EntityUUID
			lateinit var name: String
			val attributes = mutableListOf<Attribute>()

			fun build() = Fetch(
				id.toString(),
				kingdom.toString(),
				user.toString(),
				name,
				attributes,
			)
		}
	}

	data class Attribute(val attribute: String, val value: Double)
}
