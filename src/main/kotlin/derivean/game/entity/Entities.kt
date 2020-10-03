package derivean.game.entity

class Entities(val entities: MutableMap<String, Entity> = mutableMapOf()) : Iterable<Entity> {
	constructor(vararg entities: Entity) : this() {
		for (entity in entities) {
			this.entities[entity.toString()] = entity
		}
	}

	operator fun get(name: String) = entities.getOrElse(name) { throw UnknownEntityException("Requested unknown Entity [${name}].") }

	override fun iterator() = entities.values.iterator()

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var entities = mutableMapOf<String, Entity>()

		fun entities(vararg entities: Entity) {
			for (entity in entities) {
				this.entities[entity.toString()] = entity
			}
		}

		fun build() = Entities(entities)
	}
}
