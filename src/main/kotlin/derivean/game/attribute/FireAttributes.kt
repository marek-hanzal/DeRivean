package derivean.game.attribute

class FireAttributes {
	companion object {
		private const val ATTRIBUTE_ATTACK = "attack/fire"
		private const val ATTRIBUTE_DEFENSE = "defense/fire"
		private const val ATTRIBUTE_ELEMENT = "element/fire"
		private const val ATTRIBUTE_DAMAGE = "fire/damage"

		fun attack(value: Double) = ATTRIBUTE_ATTACK to value
		fun attack(attributes: Attributes) = attributes[ATTRIBUTE_ATTACK]

		fun defense(value: Double) = ATTRIBUTE_DEFENSE to value
		fun defense(attributes: Attributes) = attributes[ATTRIBUTE_DEFENSE]

		fun element(value: Double) = ATTRIBUTE_ELEMENT to value
		fun element(attributes: Attributes) = attributes[ATTRIBUTE_ELEMENT]

		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]
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
