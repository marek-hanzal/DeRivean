package derivean.game.attribute.common

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

class CommonAttributes {
	companion object {
		private const val ATTRIBUTE_LEVEL = "level"
		fun level(value: Double) = ATTRIBUTE_LEVEL to value
		fun level(attributes: Attributes) = attributes[ATTRIBUTE_LEVEL]

		private const val ATTRIBUTE_XP = "xp"
		fun xp(value: Double) = ATTRIBUTE_XP to value
		fun xp(attributes: Attributes) = attributes[ATTRIBUTE_XP]

		private const val ATTRIBUTE_MAX_HEALTH = "health.max"
		fun maxHealth(value: Double) = ATTRIBUTE_MAX_HEALTH to value
		fun maxHealth(attributes: Attributes) = attributes[ATTRIBUTE_MAX_HEALTH]

		private const val ATTRIBUTE_HEALTH = "health"
		fun health(value: Double) = ATTRIBUTE_HEALTH to value
		fun health(attributes: Attributes) = attributes[ATTRIBUTE_HEALTH]

		private const val ATTRIBUTE_MANA = "mana"
		fun mana(value: Double) = ATTRIBUTE_MANA to value
		fun mana(attributes: Attributes) = attributes[ATTRIBUTE_MANA]

		private const val ATTRIBUTE_MAX_MANA = "mana.max"
		fun maxMana(value: Double) = ATTRIBUTE_MAX_MANA to value
		fun maxMana(attributes: Attributes) = attributes[ATTRIBUTE_MAX_MANA]

		private const val ATTRIBUTE_STRENGTH = "strength"
		fun strength(value: Double) = ATTRIBUTE_STRENGTH to value
		fun strength(attributes: Attributes) = attributes[ATTRIBUTE_STRENGTH]

		private const val ATTRIBUTE_DAMAGE = "damage"
		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]

		private const val ATTRIBUTE_CURRENT_INITIATIVE = "current-initiative"
		fun currentInitiative(value: Double) = ATTRIBUTE_CURRENT_INITIATIVE to value
		fun currentInitiative(attributes: Attributes) = attributes[ATTRIBUTE_CURRENT_INITIATIVE]

		private const val ATTRIBUTE_ROUND_INITIATIVE = "round-initiative"
		fun roundInitiative(value: Double) = ATTRIBUTE_ROUND_INITIATIVE to value
		fun roundInitiative(attributes: Attributes) = attributes[ATTRIBUTE_ROUND_INITIATIVE]
	}
}

fun Double.level() = CommonAttributes.level(this)
fun Attributes.level() = CommonAttributes.level(this)
fun Entity.level() = this.attributes.level()

fun Double.xp() = CommonAttributes.xp(this)
fun Attributes.xp() = CommonAttributes.xp(this)
fun Entity.xp() = this.attributes.xp()

fun Double.health() = CommonAttributes.health(this)
fun Attributes.health() = CommonAttributes.health(this)
fun Entity.health() = this.attributes.health()
fun Entity.health(value: Double) = this.attributes(CommonAttributes.health(value))
fun Entity.isAlive() = this.health() > 0
fun Entity.isNotAlive() = this.health() <= 0

fun Double.maxHealth() = CommonAttributes.maxHealth(this)
fun Attributes.maxHealth() = CommonAttributes.maxHealth(this)
fun Entity.maxHealth() = this.attributes.maxHealth()

fun Double.mana() = CommonAttributes.mana(this)
fun Attributes.mana() = CommonAttributes.mana(this)
fun Entity.mana() = this.attributes.mana()
fun Entity.mana(value: Double) = this.attributes(CommonAttributes.mana(value))

fun Double.maxMana() = CommonAttributes.maxMana(this)
fun Attributes.maxMana() = CommonAttributes.maxMana(this)
fun Entity.maxMana() = this.attributes.maxMana()

fun Double.strength() = CommonAttributes.strength(this)
fun Attributes.strength() = CommonAttributes.strength(this)
fun Entity.strength() = this.attributes.strength()

fun Double.damage() = CommonAttributes.damage(this)
fun Attributes.damage() = CommonAttributes.damage(this)
fun Entity.damage() = this.attributes.damage()
fun Entity.damage(value: Double) = this.attributes(CommonAttributes.damage(value))

fun Double.currentInitiative() = CommonAttributes.currentInitiative(this)
fun Attributes.currentInitiative() = CommonAttributes.currentInitiative(this)
fun Entity.currentInitiative() = this.attributes.currentInitiative()

fun Double.roundInitiative() = CommonAttributes.roundInitiative(this)
fun Attributes.roundInitiative() = CommonAttributes.roundInitiative(this)
fun Entity.roundInitiative() = this.attributes.roundInitiative()
