package derivean.game.behaviour

import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

class NoopBehaviour : Behaviour() {
	override fun act(spirit: Spirit, environment: IEnvironment) {
	}
}
