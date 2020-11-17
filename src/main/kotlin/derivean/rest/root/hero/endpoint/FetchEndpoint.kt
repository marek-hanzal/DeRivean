package derivean.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.rest.common.Attribute
import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.Hero
import derivean.storage.repository.HeroRepository
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable

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
		this.attributes = item.attributes
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
			var attributes: SizedIterable<derivean.storage.entities.Attribute> = SizedCollection()

			fun build() = Fetch(
				id.toString(),
				kingdom.toString(),
				user.toString(),
				name,
				attributes.map { Attribute(it.type.id.value, it.value) },
			)
		}
	}
}
