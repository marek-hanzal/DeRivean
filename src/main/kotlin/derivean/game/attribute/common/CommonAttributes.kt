package derivean.game.attribute.common

import derivean.game.attribute.Attributes

class CommonAttributes {
	companion object {
		private const val ATTRIBUTE_LEVEL = "level"
		private const val ATTRIBUTE_XP = "xp"
		private const val ATTRIBUTE_HEALTH = "health"
		private const val ATTRIBUTE_MAX_HEALTH = "health.max"
		private const val ATTRIBUTE_MANA = "mana"
		private const val ATTRIBUTE_STRENGTH = "strength"
		private const val ATTRIBUTE_DAMAGE = "damage"

		fun level(value: Double) = ATTRIBUTE_LEVEL to value
		fun level(attributes: Attributes) = attributes[ATTRIBUTE_LEVEL]

		fun xp(value: Double) = ATTRIBUTE_XP to value
		fun xp(attributes: Attributes) = attributes[ATTRIBUTE_XP]

		fun maxHealth(value: Double) = ATTRIBUTE_MAX_HEALTH to value
		fun maxHealth(attributes: Attributes) = attributes[ATTRIBUTE_MAX_HEALTH]

		fun health(value: Double) = ATTRIBUTE_HEALTH to value
		fun health(attributes: Attributes) = attributes[ATTRIBUTE_HEALTH]

		fun mana(value: Double) = ATTRIBUTE_MANA to value
		fun mana(attributes: Attributes) = attributes[ATTRIBUTE_MANA]

		fun strength(value: Double) = ATTRIBUTE_STRENGTH to value
		fun strength(attributes: Attributes) = attributes[ATTRIBUTE_STRENGTH]

		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]
	}
}

fun Double.level() = CommonAttributes.level(this)
fun Attributes.level() = CommonAttributes.level(this)

fun Double.xp() = CommonAttributes.xp(this)
fun Attributes.xp() = CommonAttributes.xp(this)

fun Double.health() = CommonAttributes.health(this)
fun Attributes.health() = CommonAttributes.health(this)

fun Double.maxHealth() = CommonAttributes.maxHealth(this)
fun Attributes.maxHealth() = CommonAttributes.maxHealth(this)

fun Double.mana() = CommonAttributes.mana(this)
fun Attributes.mana() = CommonAttributes.mana(this)

fun Double.strength() = CommonAttributes.strength(this)
fun Attributes.strength() = CommonAttributes.strength(this)

fun Double.damage() = CommonAttributes.damage(this)
fun Attributes.damage() = CommonAttributes.damage(this)
