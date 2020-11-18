package derivean.game.ability.abilities.physical

import derivean.game.ability.Abilities
import derivean.game.ability.abilities.AbstractAttackAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.formation.Formations
import derivean.game.log.ILog
import kotlin.math.max

class SwordAttackAbility(ability: String, attributes: Attributes) : AbstractAttackAbility(ability, attributes) {
	override fun resolve(attributes: Attributes, entity: Entity, target: Entity, log: ILog) {
		damage(attributes, target).let { damage ->
			entity.attributes.inc(
				damage.damage(),
				damage.physicalDamage(),
			)
			target.attributes.decOrZero(damage.health())
			log.log("[$entity] uses sword attack on [$target] and did [$damage] damage.")
			if (target.isDead()) {
				log.log("[$target] is dead by this attack.")
			} else {
				log.log("[$target] has [${target.attributes.health()}] health.")
			}
		}
	}

	override fun targets(entity: Entity, formations: Formations) = rank(entity, formations) { attributes, target, _, _ ->
		damage(attributes, target)
	}

	override fun limit(attributes: Attributes) = attributes.swordAttackTargets()

	override fun time(attributes: Attributes) = attributes.swordAttackTime()

	private fun damage(attributes: Attributes, target: Entity) = max(attributes.strength() - target.attributes.physicalDefense(), 0.0)

	companion object {
		const val ABILITY = "ability.physical.SwordAttackAbility"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()

		private const val ATTRIBUTE_TARGETS = "$ABILITY.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to value
		fun targets(attributes: Attributes, default: Double = 1.0) = attributes[ATTRIBUTE_TARGETS, default]

		private const val ATTRIBUTE_TIME = "$ABILITY.time"
		fun time(value: Double) = ATTRIBUTE_TIME to value
		fun time(attributes: Attributes, default: Double = 1.0) = attributes[ATTRIBUTE_TIME, default]
	}

	class Builder {
		private val attributes = Attributes.from(
			listOf(
				1.0.swordAttackTime(),
			)
		)

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

fun Double.swordAttackTime() = SwordAttackAbility.time(this)
fun Attributes.swordAttackTime(default: Double = 1.0) = SwordAttackAbility.time(this, default)
