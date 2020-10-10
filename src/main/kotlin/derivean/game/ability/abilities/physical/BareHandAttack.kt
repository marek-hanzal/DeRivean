package derivean.game.ability.abilities.physical

import derivean.game.ability.Abilities
import derivean.game.ability.abilities.AbstractAttackAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.formation.Formations
import kotlin.math.max

class BareHandAttack(ability: String, attributes: Attributes) : AbstractAttackAbility(ability, attributes) {
	override fun resolve(attributes: Attributes, entity: Entity, target: Entity) {
		damage(attributes, target).let { damage ->
			entity.attributes.inc(
				damage.damage(),
				damage.physicalDamage(),
			)
			target.attributes.decOrZero(damage.health())
		}
	}

	override fun targets(entity: Entity, formations: Formations) = rank(entity, formations) { attributes, target, _, _ ->
		damage(attributes, target)
	}

	override fun limit(attributes: Attributes) = attributes.bareHandTargets()

	override fun time(attributes: Attributes) = attributes.bareHandTime()

	private fun damage(attributes: Attributes, target: Entity) = max(attributes.strength() - target.attributes.physicalDefense(), 0.0)

	companion object {
		const val ABILITY = "ability.physical.BareHandAttack"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()

		private const val ATTRIBUTE_TARGETS = "$ABILITY.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to value
		fun targets(attributes: Attributes, default: Double = 1.0) = attributes[ATTRIBUTE_TARGETS, default]

		private const val ATTRIBUTE_TIME = "$ABILITY.time"
		fun time(value: Double) = ATTRIBUTE_TIME to value
		fun time(attributes: Attributes, default: Double = 1.0) = attributes[ATTRIBUTE_TIME, default]
	}

	class Builder {
		/**
		 * Default attributes of this ability.
		 */
		private val attributes = Attributes.from(
			targets(1.0),
			time(0.0),
		)

		fun attributes(vararg attribute: Attribute) = attributes.set(*attribute)

		fun build() = BareHandAttack(
			ABILITY,
			attributes,
		)
	}
}

fun Abilities.bareHand() = this[BareHandAttack.ABILITY]

fun Double.bareHandTargets() = BareHandAttack.targets(this)
fun Attributes.bareHandTargets(default: Double = 1.0) = BareHandAttack.targets(this, default)

fun Double.bareHandTime() = BareHandAttack.time(this)
fun Attributes.bareHandTime(default: Double = 1.0) = BareHandAttack.time(this, default)
