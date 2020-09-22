package derivean.game.attribute

class FireAttributes {
	companion object {
		private const val ATTRIBUTE_ATTACK = "attack/fire"
		private const val ATTRIBUTE_DEFENSE = "defense/fire"

		fun attack(value: Double): Pair<String, Double> = ATTRIBUTE_ATTACK to value
		fun attack(value: Int): Pair<String, Double> = attack(value.toDouble())
		fun attack(attributes: Attributes): Double = attributes[ATTRIBUTE_ATTACK]

		fun defense(value: Double): Pair<String, Double> = ATTRIBUTE_DEFENSE to value
		fun defense(value: Int): Pair<String, Double> = defense(value.toDouble())
		fun defense(attributes: Attributes): Double = attributes[ATTRIBUTE_DEFENSE]
	}
}
