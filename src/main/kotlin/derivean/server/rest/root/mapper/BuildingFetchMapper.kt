package derivean.server.rest.root.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.building.entities.Building

class BuildingFetchMapper(container: IContainer) : AbstractMapper<Building, BuildingFetchMapper.Fetch>(container) {
	override fun map(item: Building) = Fetch.build {
		this.id = item.id
		this.name = item.name
		item.attributes.forEach {
			this.attributes.add(Attribute(it.name, it.value))
		}
	}

	data class Fetch(
		val id: String,
		val name: String,
		val attributes: List<Attribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			val attributes = mutableListOf<Attribute>()

			fun build() = Fetch(
				id.toString(),
				name,
				attributes,
			)
		}
	}

	data class Attribute(val attribute: String, val value: Double)
}
