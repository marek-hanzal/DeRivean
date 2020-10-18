package derivean.server.player.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.player.Player

class PlayerFetchMapper(container: IContainer) : AbstractMapper<Player, PlayerFetchMapper.Fetch>(container) {
	override fun map(item: Player) = Fetch.build {
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
