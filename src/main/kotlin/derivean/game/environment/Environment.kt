package derivean.game.environment

import derivean.game.behaviour.Relationships
import derivean.game.entity.SpiritQueue
import derivean.game.entity.Spirits

abstract class Environment : IEnvironment {
	private val spirits: Spirits = Spirits()
	private val relationships: Relationships = Relationships(spirits)
	private val spiritQueue: SpiritQueue = SpiritQueue(spirits)

	override fun relationships(): Relationships = relationships

	override fun prepare() {
		spiritQueue.reset()
		spirits.list().forEach { spirit ->
			spirit.behaviour(behaviorOf(spirit))
		}
	}

	override fun tick() {
		spiritQueue.getSpirit().act(this)
	}
}
