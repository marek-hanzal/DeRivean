package derivean.game.attribute

class FireAttributes {
	companion object {
		private const val ATTRIBUTE_ATTACK = "attack/fire"
		private const val ATTRIBUTE_DEFENSE = "defense/fire"
		private const val ATTRIBUTE_ELEMENT = "element/fire"
		private const val ATTRIBUTE_DAMAGE = "fire/damage"

		fun attack(value: Double): Pair<String, Double> = ATTRIBUTE_ATTACK to value
		fun attack(value: Int): Pair<String, Double> = attack(value.toDouble())
		fun attack(attributes: Attributes): Double = attributes[ATTRIBUTE_ATTACK]

		fun defense(value: Double): Pair<String, Double> = ATTRIBUTE_DEFENSE to value
		fun defense(value: Int): Pair<String, Double> = defense(value.toDouble())
		fun defense(attributes: Attributes): Double = attributes[ATTRIBUTE_DEFENSE]

		fun element(value: Double): Pair<String, Double> = ATTRIBUTE_ELEMENT to value
		fun element(value: Int): Pair<String, Double> = element(value.toDouble())
		fun element(attributes: Attributes): Double = attributes[ATTRIBUTE_ELEMENT]

		fun damage(value: Double): Pair<String, Double> = ATTRIBUTE_DAMAGE to value
		fun damage(value: Int): Pair<String, Double> = damage(value.toDouble())
		fun damage(attributes: Attributes): Double = attributes[ATTRIBUTE_DAMAGE]
	}
}
