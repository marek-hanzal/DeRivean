package derivean.game.attribute.element

import derivean.game.attribute.Attributes

/**
 * Common Fire attributes.
 */
class FireAttributes {
	companion object {
		private const val ATTRIBUTE_ATTACK = "fire.attack"
		fun attack(value: Double) = ATTRIBUTE_ATTACK to value
		fun attack(attributes: Attributes) = attributes[ATTRIBUTE_ATTACK] ?: 0.0

		private const val ATTRIBUTE_DEFENSE = "fire.defense"
		fun defense(value: Double) = ATTRIBUTE_DEFENSE to value
		fun defense(attributes: Attributes) = attributes[ATTRIBUTE_DEFENSE] ?: 0.0

		private const val ATTRIBUTE_ELEMENT = "fire.element"
		fun element(value: Double) = ATTRIBUTE_ELEMENT to value
		fun element(attributes: Attributes) = attributes[ATTRIBUTE_ELEMENT] ?: 0.0

		private const val ATTRIBUTE_DAMAGE = "fire.damage"
		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE] ?: 0.0
	}
}

fun Double.fireAttack() = FireAttributes.attack(this)
fun Attributes.fireAttack() = FireAttributes.attack(this)

fun Double.fireDefense() = FireAttributes.defense(this)
fun Attributes.fireDefense() = FireAttributes.defense(this)

fun Double.fireElement() = FireAttributes.element(this)
fun Attributes.fireElement() = FireAttributes.element(this)

fun Double.fireDamage() = FireAttributes.damage(this)
fun Attributes.fireDamage() = FireAttributes.damage(this)
