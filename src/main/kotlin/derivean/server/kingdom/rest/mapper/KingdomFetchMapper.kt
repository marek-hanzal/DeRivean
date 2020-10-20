package derivean.server.kingdom.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.kingdom.entities.Kingdom

class KingdomFetchMapper(container: IContainer) : AbstractMapper<Kingdom, KingdomFetchMapper.Fetch>(container) {
	override fun map(item: Kingdom) = Fetch.build {
		this.id = item.id
		this.name = item.name
	}

	data class Fetch(
		val id: String,
		val name: String,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String

			fun build() = Fetch(
				id.toString(),
				name,
			)
		}
	}
}
