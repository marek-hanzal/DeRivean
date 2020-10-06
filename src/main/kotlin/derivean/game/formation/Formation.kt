package derivean.game.formation

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entity

/**
 * Formation of a team of friendly Entities.
 */
class Formation(val formation: String, val map: Map<String, Entity>) : Iterable<Map.Entry<String, Entity>> {
	fun initiative() = map.values.sumByDouble { it.currentInitiative() }

	override fun iterator() = map.iterator()

	operator fun get(name: String) = map.getOrElse(name) { throw UnknownMemberException("Requested unknown member [${name}] in formation [${formation}].") }

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
	}

	class Builder(val formation: String) {
		private val map = mutableMapOf<String, Entity>()

		/**
		 * Simply add all Entities already created somewhere else.
		 */
		fun entity(vararg entity: Entity) {
			entity.forEach {
				map[it.toString()] = it
			}
		}

		/**
		 * Use, when it's needed to create an Entity in place.
		 */
		fun entity(name: String, block: Entity.Builder.() -> Unit) = Entity.build(name, block)

		fun build() = Formation(
			formation,
			map,
		)
	}
}
