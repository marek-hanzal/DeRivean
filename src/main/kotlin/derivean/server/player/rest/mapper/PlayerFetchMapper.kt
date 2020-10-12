package derivean.server.player.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.server.player.Player
import org.jetbrains.exposed.dao.EntityID
import java.util.*

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
			lateinit var id: EntityID<UUID>
			lateinit var name: String

			fun build() = Fetch(
				id.toString(),
				name,
			)
		}
	}
}
