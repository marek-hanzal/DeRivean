package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.lib.utils.asIso
import derivean.server.building.BuildingRepository
import derivean.server.building.entities.Building
import derivean.server.rest.root.AbstractFetchEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/building",
		"root.building",
		fetchMapper,
		buildingRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<Building, FetchMapper.Fetch>(container) {
	override fun map(item: Building) = Fetch.build {
		this.id = item.id
		this.kingdom = item.kingdom.id
		this.user = item.kingdom.user.id
		this.name = item.name
		this.built = item.built?.asIso()
		this.claim = item.claim?.asIso()
		item.attributes.forEach {
			this.attributes.add(Attribute(it.name, it.value))
		}
	}

	data class Fetch(
		val id: String,
		val kingdom: String,
		val user: String,
		val name: String,
		val built: String?,
		val claim: String?,
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
			var built: String? = null
			var claim: String? = null
			val attributes = mutableListOf<Attribute>()

			fun build() = Fetch(
				id.toString(),
				kingdom.toString(),
				user.toString(),
				name,
				built,
				claim,
				attributes,
			)
		}
	}

	data class Attribute(val attribute: String, val value: Double)
}
