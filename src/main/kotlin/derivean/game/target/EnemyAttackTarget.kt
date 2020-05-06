package derivean.game.target

import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

class EnemyAttackTarget : Target() {
	override fun get(spirit: Spirit, environment: IEnvironment): Spirit? = environment.enemiesOf(spirit).list().firstOrNull()
}
