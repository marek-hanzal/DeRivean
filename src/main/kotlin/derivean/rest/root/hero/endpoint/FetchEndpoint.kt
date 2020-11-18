package derivean.rest.root.hero.endpoint

import derivean.rest.common.FetchAttribute
import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.AttributeEntity
import derivean.storage.entities.HeroEntity
import derivean.storage.repository.HeroRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.mapper.AbstractMapper
import leight.storage.EntityUUID
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

class FetchMapper(container: IContainer) : AbstractMapper<HeroEntity, FetchMapper.Fetch>(container) {
	override fun map(item: HeroEntity) = Fetch.build {
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
		val attributes: List<FetchAttribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var kingdom: EntityUUID
			lateinit var user: EntityUUID
			lateinit var name: String
			var attributes: SizedIterable<AttributeEntity> = SizedCollection()

			fun build() = Fetch(
				id.toString(),
				kingdom.toString(),
				user.toString(),
				name,
				attributes.map { FetchAttribute.build(it) },
			)
		}
	}
}
