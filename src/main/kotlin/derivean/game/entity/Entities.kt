package derivean.game.entity

class Entities(val entities: MutableMap<String, Entity> = mutableMapOf()) : Iterable<Entity> {
	constructor(vararg entities: Entity) : this() {
		for (entity in entities) {
			this.entities[entity.toString()] = entity
		}
	}

	operator fun get(name: String) = entities.getOrElse(name) { throw UnknownEntityException("Requested unknown Entity [${name}].") }

	override fun iterator() = entities.values.iterator()

	fun isMember(entity: Entity) = entities.containsKey(entity.toString())

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var map = mutableMapOf<String, Entity>()

		fun addEntity(entity: Entity) {
			map[entity.toString()] = entity
		}

		fun addEntity(name: String, block: Entity.Builder.() -> Unit) {
			Entity.build(name, block).also {
				map[it.toString()] = it
			}
		}

		fun build() = Entities(map)
	}
}

fun List<Entity>.toEntities() = Entities(*this.toTypedArray())
