package derivean.game.attribute

class WaterAttributes {
	companion object {
		private const val ATTRIBUTE_ATTACK = "attack/water"
		private const val ATTRIBUTE_DEFENSE = "defense/water"
		private const val ATTRIBUTE_ELEMENT = "element/water"
		private const val ATTRIBUTE_DAMAGE = "water/damage"

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

fun Double.waterAttack() = WaterAttributes.attack(this)
fun Attributes.waterAttack() = WaterAttributes.attack(this)
fun Double.waterDefense() = WaterAttributes.defense(this)
fun Attributes.waterDefense() = WaterAttributes.defense(this)
fun Double.waterElement() = WaterAttributes.element(this)
fun Attributes.waterElement() = WaterAttributes.element(this)
fun Double.waterDamage() = WaterAttributes.damage(this)
fun Attributes.waterDamage() = WaterAttributes.damage(this)
