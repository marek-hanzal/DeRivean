package derivean.game.entity

import derivean.game.behaviour.IBehaviour
import derivean.game.environment.IEnvironment

data class Spirit(val name: String, val entity: Entity) {
	private var behaviour: IBehaviour? = null

	/**
	 * Sets a desired behaviour of this Spirit.
	 */
	fun behaviour(behaviour: IBehaviour?): Spirit {
		this@Spirit.behaviour = behaviour
		return this
	}

	/**
	 * Executes action in the given Environment; this represents one unit of time.
	 */
	fun act(environment: IEnvironment) {
		behaviour?.act(this, environment)
	}

	override fun toString(): String {
		return "Spirit(name='$name')"
	}

	companion object {
		inline fun build(name: String, entity: Entity, block: Builder.() -> Unit) = Builder(name, entity).apply(block).build()
	}

	class Builder(val name: String, val entity: Entity) {
		var behaviour: IBehaviour? = null

		fun build() = Spirit(name, entity).behaviour(behaviour)
	}
}
