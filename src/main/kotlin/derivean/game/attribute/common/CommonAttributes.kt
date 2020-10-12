package derivean.game.attribute.common

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

class CommonAttributes {
	companion object {
		const val ATTRIBUTE_LEVEL = "level"
		fun level(value: Double) = ATTRIBUTE_LEVEL to value
		fun level(attributes: Attributes) = attributes[ATTRIBUTE_LEVEL]

		const val ATTRIBUTE_XP = "xp"
		fun xp(value: Double) = ATTRIBUTE_XP to value
		fun xp(attributes: Attributes) = attributes[ATTRIBUTE_XP]

		const val ATTRIBUTE_MAX_HEALTH = "health.max"
		fun maxHealth(value: Double) = ATTRIBUTE_MAX_HEALTH to value
		fun maxHealth(attributes: Attributes) = attributes[ATTRIBUTE_MAX_HEALTH]

		const val ATTRIBUTE_HEALTH = "health"
		fun health(value: Double) = ATTRIBUTE_HEALTH to value
		fun health(attributes: Attributes) = attributes[ATTRIBUTE_HEALTH]

		const val ATTRIBUTE_HASTE = "haste"
		fun haste(value: Double) = ATTRIBUTE_HASTE to value
		fun haste(attributes: Attributes) = attributes[ATTRIBUTE_HASTE]

		const val ATTRIBUTE_MANA = "mana"
		fun mana(value: Double) = ATTRIBUTE_MANA to value
		fun mana(attributes: Attributes) = attributes[ATTRIBUTE_MANA]

		const val ATTRIBUTE_MAX_MANA = "mana.max"
		fun maxMana(value: Double) = ATTRIBUTE_MAX_MANA to value
		fun maxMana(attributes: Attributes) = attributes[ATTRIBUTE_MAX_MANA]

		const val ATTRIBUTE_STRENGTH = "strength"
		fun strength(value: Double) = ATTRIBUTE_STRENGTH to value
		fun strength(attributes: Attributes) = attributes[ATTRIBUTE_STRENGTH]

		const val ATTRIBUTE_DAMAGE = "damage"
		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]

		const val ATTRIBUTE_CURRENT_INITIATIVE = "current-initiative"
		fun currentInitiative(value: Double) = ATTRIBUTE_CURRENT_INITIATIVE to value
		fun currentInitiative(attributes: Attributes) = attributes[ATTRIBUTE_CURRENT_INITIATIVE]

		const val ATTRIBUTE_ROUND_INITIATIVE = "round-initiative"
		fun roundInitiative(value: Double) = ATTRIBUTE_ROUND_INITIATIVE to value
		fun roundInitiative(attributes: Attributes) = attributes[ATTRIBUTE_ROUND_INITIATIVE]
	}
}

fun Double.level() = CommonAttributes.level(this)
fun Attributes.level() = CommonAttributes.level(this)

fun Double.xp() = CommonAttributes.xp(this)
fun Attributes.xp() = CommonAttributes.xp(this)

fun Double.health() = CommonAttributes.health(this)
fun Attributes.health() = CommonAttributes.health(this)

fun Entity.isAlive() = this.attributes.health() > 0
fun Entity.isDead() = this.attributes.health() <= 0

fun Double.maxHealth() = CommonAttributes.maxHealth(this)
fun Attributes.maxHealth() = CommonAttributes.maxHealth(this)

fun Double.haste() = CommonAttributes.haste(this)
fun Attributes.haste() = CommonAttributes.haste(this)

fun Double.mana() = CommonAttributes.mana(this)
fun Attributes.mana() = CommonAttributes.mana(this)

fun Double.maxMana() = CommonAttributes.maxMana(this)
fun Attributes.maxMana() = CommonAttributes.maxMana(this)

fun Double.strength() = CommonAttributes.strength(this)
fun Attributes.strength() = CommonAttributes.strength(this)

fun Double.damage() = CommonAttributes.damage(this)
fun Attributes.damage() = CommonAttributes.damage(this)

fun Double.currentInitiative() = CommonAttributes.currentInitiative(this)
fun Attributes.currentInitiative() = CommonAttributes.currentInitiative(this)

fun Double.roundInitiative() = CommonAttributes.roundInitiative(this)
fun Attributes.roundInitiative() = CommonAttributes.roundInitiative(this)
