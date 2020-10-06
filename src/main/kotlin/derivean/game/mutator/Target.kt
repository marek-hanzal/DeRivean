package derivean.game.mutator

import derivean.game.entity.Entity

class Target(val rank: Double, val entity: Entity) {
	override fun hashCode() = rank.hashCode() + entity.hashCode()

	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (javaClass != other?.javaClass) return false

		other as Target

		if (rank != other.rank) return false
		if (entity != other.entity) return false

		return true
	}

	companion object {
		inline fun build(target: Entity, block: Builder.() -> Unit) = Builder(target).apply(block).build()
	}

	class Builder(var target: Entity) {
		var rank: Double = 0.0

		fun build() = Target(
			rank,
			target,
		)
	}
}
