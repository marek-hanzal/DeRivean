package derivean.game.attribute

class CommonAttributes {
	companion object {
		private const val ATTRIBUTE_LEVEL = "level"
		private const val ATTRIBUTE_XP = "xp"
		private const val ATTRIBUTE_HEALTH = "health"
		private const val ATTRIBUTE_MANA = "mana"
		private const val ATTRIBUTE_STRENGTH = "strength"
		private const val ATTRIBUTE_DAMAGE = "damage"

		fun level(value: Double): Pair<String, Double> = ATTRIBUTE_LEVEL to value
		fun level(attributes: Attributes): Double = attributes[ATTRIBUTE_LEVEL]

		fun xp(value: Double): Pair<String, Double> = ATTRIBUTE_XP to value
		fun xp(attributes: Attributes): Double = attributes[ATTRIBUTE_XP]

		fun health(value: Double): Pair<String, Double> = ATTRIBUTE_HEALTH to value
		fun health(attributes: Attributes): Double = attributes[ATTRIBUTE_HEALTH]

		fun mana(value: Double): Pair<String, Double> = ATTRIBUTE_MANA to value
		fun mana(attributes: Attributes): Double = attributes[ATTRIBUTE_MANA]

		fun strength(value: Double): Pair<String, Double> = ATTRIBUTE_STRENGTH to value
		fun strength(attributes: Attributes): Double = attributes[ATTRIBUTE_STRENGTH]

		fun damage(value: Double): Pair<String, Double> = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes): Double = attributes[ATTRIBUTE_DAMAGE]
	}
}

fun Double.level() = CommonAttributes.level(this)
fun Attributes.level() = CommonAttributes.level(this)

fun Double.xp() = CommonAttributes.xp(this)
fun Attributes.xp() = CommonAttributes.xp(this)

fun Double.health() = CommonAttributes.health(this)
fun Attributes.health() = CommonAttributes.health(this)

fun Double.mana() = CommonAttributes.mana(this)
fun Attributes.mana() = CommonAttributes.mana(this)

fun Double.strength() = CommonAttributes.strength(this)
fun Attributes.strength() = CommonAttributes.strength(this)

fun Double.damage() = CommonAttributes.damage(this)
fun Attributes.damage() = CommonAttributes.damage(this)
