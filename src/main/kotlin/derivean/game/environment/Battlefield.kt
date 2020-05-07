package derivean.game.environment

import derivean.game.entity.Relationships
import derivean.game.entity.SpiritQueue
import derivean.game.entity.Spirits

class Battlefield(spirits: Spirits, relationships: Relationships, spiritQueue: SpiritQueue) : Environment(spirits, relationships, spiritQueue) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var spirits = Spirits()
		var relationships = Relationships(spirits)
		var spiritQueue = SpiritQueue(spirits)

		fun build() = Battlefield(
			spirits,
			relationships,
			spiritQueue
		)
	}
}
