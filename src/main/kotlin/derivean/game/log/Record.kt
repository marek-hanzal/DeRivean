package derivean.game.log

import derivean.game.ability.IAbility
import derivean.game.entity.Entity

class Record(val entity: Entity, val target: Entity, val ability: IAbility, val log: String) {
	override fun toString() = log

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private lateinit var entity: Entity
		private lateinit var target: Entity
		private lateinit var ability: IAbility
		private var log: String = ""

		fun entity(entity: Entity) {
			this.entity = entity
		}

		fun target(target: Entity) {
			this.target = target
		}

		fun ability(ability: IAbility) {
			this.ability = ability
		}

		fun ability(entity: Entity, target: Entity, ability: IAbility) {
			entity(entity)
			target(target)
			ability(ability)
		}

		fun log(log: String) {
			this.log = log
		}

		fun build() = Record(
			entity,
			target,
			ability,
			log,
		)
	}
}
