package derivean.game.mutator

import derivean.game.entity.Entity

class Target(val entity: Entity, val target: Entity, val rank: Double) {
	companion object {
		inline fun build(entity: Entity, target: Entity, block: Builder.() -> Unit) = Builder(entity, target).apply(block).build()
	}

	class Builder(private val entity: Entity, private val target: Entity) {
		var rank: Double = 0.0

		fun build() = Target(
			entity,
			target,
			rank,
		)
	}
}
