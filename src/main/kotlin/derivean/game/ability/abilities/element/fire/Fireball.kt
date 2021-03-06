package derivean.game.ability.abilities.element.fire

import derivean.game.ability.Abilities
import derivean.game.ability.AbstractAbility
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.damage
import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.entity.Entity
import derivean.game.formation.Formations
import derivean.game.log.ILog
import derivean.game.selector.Targets
import derivean.game.timeline.ITimeline
import kotlin.math.max

class Fireball(ability: String, attributes: Attributes) : AbstractAbility(ability, attributes) {
	override fun use(entity: Entity, target: Entity, timeline: ITimeline, log: ILog) {
		val attributes = attributes(entity)

		/**
		 * Compute base attack of source entity.
		 */
		val attack = (attributes.fireAttack() + attributes.fireballAttack()) * (1 + attributes.fireElement())
		/**
		 * Take cost of casting fireball and mark it as mana loss (decrease).
		 */
		entity.attributes.decOrZero(attributes.fireballCost().mana())
		/**
		 * Base target entity defense.
		 */
		val defense = if (target.attributes.fireElement() <= -1) -attack else target.attributes.fireDefense() * (1 + target.attributes.fireElement())

		/**
		 * Compute final damage (if any).
		 */
		val damage = if (target.attributes.fireElement() >= 1) 0.0 else max(attack - defense, 0.0)
		/**
		 * Set (general) damage done in this duel.
		 */
		entity.attributes.inc(damage.damage())
		/**
		 * Set fire damage done in this duel.
		 */
		entity.attributes.inc(damage.fireDamage())
		/**
		 * Take damage as health and decrease it (health loss done by fireball).
		 */
		target.attributes.decOrZero(damage.health())
	}

	override fun targets(entity: Entity, formations: Formations) = Targets.build {
		TODO("Not yet implemented")
	}

	companion object {
		const val ABILITY = "ability.element.fire.Fireball"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()

		private const val ATTRIBUTE_COST = "spell.fireball.cost"
		fun cost(value: Double) = ATTRIBUTE_COST to value
		fun cost(attributes: Attributes) = attributes[ATTRIBUTE_COST] ?: 0.0

		private const val ATTRIBUTE_ATTACK = "spell.fireball.attack"
		fun attack(value: Double) = ATTRIBUTE_ATTACK to value
		fun attack(attributes: Attributes) = attributes[ATTRIBUTE_ATTACK] ?: 0.0
	}

	class Builder {
		private val attributes = Attributes()

//		fun attributes(vararg attribute: Attribute) = attributes.set(attribute)

		fun build() = Fireball(
			ABILITY,
			attributes,
		)
	}
}

fun Abilities.fireball() = this[Fireball.ABILITY]

fun Double.fireballCost() = Fireball.cost(this)
fun Attributes.fireballCost() = Fireball.cost(this)

fun Double.fireballAttack() = Fireball.attack(this)
fun Attributes.fireballAttack() = Fireball.attack(this)
