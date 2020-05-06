package derivean.game.entity

import derivean.game.behaviour.IBehaviour
import derivean.game.environment.IEnvironment
import derivean.game.target.ITarget

data class Spirit(val name: String, val entity: Entity) {
	private var behaviour: IBehaviour? = null
	private var target: ITarget? = null

	/**
	 * Sets a desired behaviour of this Spirit.
	 */
	fun behaviour(behaviour: IBehaviour?): Spirit {
		this@Spirit.behaviour = behaviour
		return this
	}

	/**
	 * Sets a targeting rules of this Spirits; this is used
	 * for selecting target of a behavior.
	 */
	fun target(target: ITarget?): Spirit {
		this@Spirit.target = target
		return this
	}

	/**
	 * Get a target Spirit from the given Environment.
	 */
	fun targetFrom(environment: IEnvironment) = target?.get(this, environment)

	/**
	 * Executes action in the given Environment; this represents one unit of time.
	 */
	fun act(environment: IEnvironment) {
		behaviour?.act(this, environment)
	}

	companion object {
		inline fun build(name: String, entity: Entity, block: Builder.() -> Unit) = Builder(name, entity).apply(block).build()
	}

	class Builder(val name: String, val entity: Entity) {
		var behaviour: IBehaviour? = null
		var target: ITarget? = null

		fun build() = Spirit(name, entity).behaviour(behaviour).target(target)
	}
}
