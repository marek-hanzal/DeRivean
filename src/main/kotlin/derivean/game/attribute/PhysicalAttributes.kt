package derivean.game.attribute

class PhysicalAttributes {
	companion object {
		private const val ATTRIBUTE_DAMAGE = "physical.damage"
		private const val ATTRIBUTE_DEFENSE = "physical.defense"

		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]

		fun defense(value: Double) = ATTRIBUTE_DEFENSE to value
		fun defense(attributes: Attributes) = attributes[ATTRIBUTE_DEFENSE]
	}
}

fun Double.physicalDamage() = PhysicalAttributes.damage(this)
fun Attributes.physicalDamage() = PhysicalAttributes.damage(this)

fun Double.physicalDefense() = PhysicalAttributes.defense(this)
fun Attributes.physicalDefense() = PhysicalAttributes.defense(this)
