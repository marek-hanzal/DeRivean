package derivean.game.attribute.common

import derivean.game.attribute.Attributes

class PhysicalAttributes {
	companion object {
		private const val ATTRIBUTE_DAMAGE = "physical.damage"
		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE, 0.0]

		private const val ATTRIBUTE_DEFENSE = "physical.defense"
		fun defense(value: Double) = ATTRIBUTE_DEFENSE to value
		fun defense(attributes: Attributes) = attributes[ATTRIBUTE_DEFENSE, 0.0]
	}
}

fun Double.physicalDamage() = PhysicalAttributes.damage(this)
fun Attributes.physicalDamage() = PhysicalAttributes.damage(this)

fun Double.physicalDefense() = PhysicalAttributes.defense(this)
fun Attributes.physicalDefense() = PhysicalAttributes.defense(this)
