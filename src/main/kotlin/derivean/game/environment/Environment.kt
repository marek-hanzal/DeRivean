package derivean.game.environment

import derivean.game.entity.Relationships
import derivean.game.entity.SpiritQueue
import derivean.game.entity.Spirits

abstract class Environment(
	protected val spirits: Spirits,
	protected val relationships: Relationships,
	protected val spiritQueue: SpiritQueue
) : IEnvironment {
	override fun relationships(): Relationships = relationships

	override fun prepare() {
	}

	override fun tick() {
	}
}
