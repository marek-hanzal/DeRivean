package derivean.game.entity

import derivean.game.behaviour.IBehaviour
import derivean.game.environment.IEnvironment

data class Spirit(val entity: Entity) {
	private var behaviour: IBehaviour? = null

	fun behaviour(behaviour: IBehaviour) {
		this@Spirit.behaviour = behaviour
	}

	fun act(environment: IEnvironment) {
		behaviour?.act(this, environment)
	}

	companion object {
		inline fun build(entity: Entity, block: Builder.() -> Unit) = Builder(entity).apply(block).build()
	}

	class Builder(val entity: Entity) {
		fun build() = Spirit(entity)
	}
}
