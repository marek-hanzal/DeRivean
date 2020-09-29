package derivean.game.attribute.element

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

/**
 * Common Fire attributes.
 */
class FireAttributes {
	companion object {
		private const val ATTRIBUTE_ATTACK = "fire.attack"
		fun attack(value: Double) = ATTRIBUTE_ATTACK to value
		fun attack(attributes: Attributes) = attributes[ATTRIBUTE_ATTACK]

		private const val ATTRIBUTE_DEFENSE = "fire.defense"
		fun defense(value: Double) = ATTRIBUTE_DEFENSE to value
		fun defense(attributes: Attributes) = attributes[ATTRIBUTE_DEFENSE]

		private const val ATTRIBUTE_ELEMENT = "fire.element"
		fun element(value: Double) = ATTRIBUTE_ELEMENT to value
		fun element(attributes: Attributes) = attributes[ATTRIBUTE_ELEMENT]

		private const val ATTRIBUTE_DAMAGE = "fire.damage"
		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]
	}
}

fun Double.fireAttack() = FireAttributes.attack(this)
fun Attributes.fireAttack() = FireAttributes.attack(this)
fun Entity.fireAttack() = this.attributes().fireAttack()

fun Double.fireDefense() = FireAttributes.defense(this)
fun Attributes.fireDefense() = FireAttributes.defense(this)
fun Entity.fireDefense() = this.attributes().fireDefense()

fun Double.fireElement() = FireAttributes.element(this)
fun Attributes.fireElement() = FireAttributes.element(this)
fun Entity.fireElement() = this.attributes().fireElement()

fun Double.fireDamage() = FireAttributes.damage(this)
fun Attributes.fireDamage() = FireAttributes.damage(this)
fun Entity.fireDamage() = this.attributes().fireDamage()
fun Entity.fireDamage(value: Double) = this.attributes(FireAttributes.damage(value))
