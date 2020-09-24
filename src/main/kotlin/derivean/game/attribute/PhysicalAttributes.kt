package derivean.game.attribute

class PhysicalAttributes {
	companion object {
		private const val ATTRIBUTE_DAMAGE = "physical/damage"
		private const val ATTRIBUTE_DEFENSE = "physical/defense"

		fun damage(value: Double): Pair<String, Double> = ATTRIBUTE_DAMAGE to value
		fun damage(value: Int): Pair<String, Double> = damage(value.toDouble())
		fun damage(attributes: Attributes): Double = attributes[ATTRIBUTE_DAMAGE]

		fun defense(value: Double): Pair<String, Double> = ATTRIBUTE_DEFENSE to value
		fun defense(value: Int): Pair<String, Double> = defense(value.toDouble())
		fun defense(attributes: Attributes): Double = attributes[ATTRIBUTE_DEFENSE]
	}
}

fun Double.physicalDamage() = PhysicalAttributes.damage(this)
fun Attributes.physicalDamage() = PhysicalAttributes.damage(this)

fun Double.physicalDefense() = PhysicalAttributes.defense(this)
fun Attributes.physicalDefense() = PhysicalAttributes.defense(this)
