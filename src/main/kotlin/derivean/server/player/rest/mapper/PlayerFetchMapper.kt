package derivean.server.player.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.server.player.Player

class PlayerFetchMapper(container: IContainer) : AbstractMapper<Player, Fetch>(container) {
	override fun map(item: Player) = Fetch.build {
		this.id = item.id
		this.name = item.name
	}
}
