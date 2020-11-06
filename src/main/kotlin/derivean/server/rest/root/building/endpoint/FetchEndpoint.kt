package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.lib.storage.EntityUUID
import derivean.server.building.BuildingRepository
import derivean.server.building.entities.Building
import io.ktor.routing.*

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
