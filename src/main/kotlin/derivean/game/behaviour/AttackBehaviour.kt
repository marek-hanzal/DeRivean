package derivean.game.behaviour

import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

class AttackBehaviour : Behaviour() {
	override fun act(spirit: Spirit, environment: IEnvironment) {
		spirit.targetFrom(environment)?.let {
			it.entity
		}
	}
}
