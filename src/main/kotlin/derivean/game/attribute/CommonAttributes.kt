package derivean.game.attribute

class CommonAttributes {
	companion object {
		private const val ATTRIBUTE_HEALTH = "health"
		private const val ATTRIBUTE_MANA = "mana"
		private const val ATTRIBUTE_STRENGTH = "strength"
		private const val ATTRIBUTE_DAMAGE = "damage"

		fun health(value: Double): Pair<String, Double> = ATTRIBUTE_HEALTH to value
		fun health(value: Int): Pair<String, Double> = health(value.toDouble())
		fun health(attributes: Attributes): Double = attributes[ATTRIBUTE_HEALTH]

		fun mana(value: Double): Pair<String, Double> = ATTRIBUTE_MANA to value
		fun mana(value: Int): Pair<String, Double> = mana(value.toDouble())
		fun mana(attributes: Attributes): Double = attributes[ATTRIBUTE_MANA]

		fun strength(value: Double): Pair<String, Double> = ATTRIBUTE_STRENGTH to value
		fun strength(value: Int): Pair<String, Double> = strength(value.toDouble())
		fun strength(attributes: Attributes): Double = attributes[ATTRIBUTE_STRENGTH]

		fun damage(value: Double): Pair<String, Double> = ATTRIBUTE_DAMAGE to value
		fun damage(value: Int): Pair<String, Double> = damage(value.toDouble())
		fun damage(attributes: Attributes): Double = attributes[ATTRIBUTE_DAMAGE]
	}
}
