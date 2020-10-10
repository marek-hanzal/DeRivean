package derivean.game.ability.abilities.physical

import derivean.game.ability.Abilities
import derivean.game.ability.abilities.AbstractAttackAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.formation.Formations
import kotlin.math.max

class SwordAttackAbility(ability: String, attributes: Attributes) : AbstractAttackAbility(ability, attributes) {
	override fun useOn(attributes: Attributes, entity: Entity, target: Entity) {
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

	override fun limit(attributes: Attributes) = attributes.swordAttackTargets()

	private fun damage(attributes: Attributes, target: Entity) = max(attributes.strength() - target.attributes.physicalDefense(), 0.0)

	companion object {
		const val ABILITY = "ability.physical.SwordAttackAbility"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()

		private const val ATTRIBUTE_TARGETS = "${ABILITY}.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to value
		fun targets(attributes: Attributes, default: Double = 1.0) = attributes[ATTRIBUTE_TARGETS, default]
	}

	class Builder {
		private val attributes = Attributes()

		fun attributes(vararg attribute: Attribute) = attributes.set(*attribute)

		fun build() = SwordAttackAbility(
			ABILITY,
			attributes,
		)
	}
}

fun Abilities.swordAttack() = this[SwordAttackAbility.ABILITY]
fun Double.swordAttackTargets() = SwordAttackAbility.targets(this)
fun Attributes.swordAttackTargets(default: Double = 1.0) = SwordAttackAbility.targets(this, default)