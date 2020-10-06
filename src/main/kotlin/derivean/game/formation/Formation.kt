package derivean.game.formation

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entity

/**
 * Formation of a team of friendly Entities.
 */
class Formation(val list: List<Entity>) : Iterable<Entity> {
	fun initiative() = list.sumByDouble { it.currentInitiative() }

	override fun iterator() = list.iterator()

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val list = mutableListOf<Entity>()

		/**
		 * Simply add all Entities already created somewhere else.
		 */
		fun entity(vararg entity: Entity) = list.addAll(entity)

		/**
		 * Use, when it's needed to create an Entity in place.
		 */
		fun entity(name: String, block: Entity.Builder.() -> Unit) = Entity.build(name, block)

		fun build() = Formation(
			list
		)
	}
}
