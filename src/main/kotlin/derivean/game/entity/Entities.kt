package derivean.game.entity

import derivean.game.attribute.common.currentInitiative

open class Entities(val map: Map<String, Entity>) : Iterable<Entity> {
	override fun iterator() = map.values.iterator()

	fun initiative() = map.values.maxOf { it.currentInitiative() }

	fun isMember(entity: Entity) = map.containsKey(entity.toString())

	open operator fun get(name: String) = map.getOrElse(name) { throw UnknownEntityException("Requested unknown Entity [${name}].") }

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val map = mutableMapOf<String, Entity>()

		/**
		 * Simply add all Entities already created somewhere else.
		 */
		fun entity(entity: List<Entity>) = map.putAll(entity.map { it.entity to it })

		fun entity(vararg entity: Entity) = entity(entity.toList())

		/**
		 * Use, when it's needed to create an Entity in place.
		 */
		fun entity(name: String, block: Entity.Builder.() -> Unit) = Entity.build(name, block).apply {
			map[name] = this
		}

		fun build() = Entities(
			map,
		)
	}
}
