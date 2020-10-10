package derivean.game.ability.physical

import derivean.game.ability.Abilities
import derivean.game.ability.AbstractAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.formation.Formations
import derivean.game.selector.Targets
import kotlin.math.max

class BareHandAttack(ability: String, attributes: Attributes) : AbstractAbility(ability, attributes) {
	override fun use(entity: Entity, targets: List<Entity>) {
		for (target in targets) {
			damage(entity, target).apply {
				/**
				 * Accumulate overall entity's damage and physical damage done.
				 */
				entity.attributes.inc(damage())
				entity.attributes.inc(physicalDamage())
				/**
				 * Convert damage to heal loss of target entity; health cannot go under zero.
				 */
				target.attributes.decOrZero(health())
			}
		}
	}

	override fun targets(entity: Entity, formations: Formations) = Targets.build {
		attributes(entity) { attributes ->
			this.limit = attributes.bareHandTargets()
			for (formation in formations.formations()) {
				for (target in formation) {
					target {
						this.entity = entity
						this.target = target
						this.ability = this@BareHandAttack
						this.rank = when {
							target.isNotAlive() -> {
								0.0
							}
							formation.hasMember(entity) -> {
								0.0
							}
							else -> {
								damage(entity, target)
							}
						}
					}
				}
			}
		}
	}

	private fun damage(entity: Entity, target: Entity) = max(attributes(entity).strength() - target.attributes.physicalDefense(), 0.0)

	companion object {
		const val ABILITY = "ability.physical.BareHandAttack"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()

		private const val ATTRIBUTE_TARGETS = "ability.physical.BareHandAttack.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to value
		fun targets(attributes: Attributes, default: Double = 1.0) = attributes[ATTRIBUTE_TARGETS, default]
	}

	class Builder {
		private val attributes = Attributes()

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
