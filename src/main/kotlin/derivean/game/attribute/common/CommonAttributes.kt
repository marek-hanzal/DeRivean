package derivean.game.attribute.common

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

class CommonAttributes {
	companion object {
		const val LEVEL = "level"
		const val XP = "xp"
		const val MAX_HEALTH = "health.max"
		const val HEALTH = "health"
		const val HASTE = "haste"
		const val MANA = "mana"
		const val MAX_MANA = "mana.max"
		const val STRENGTH = "strength"
		const val DAMAGE = "damage"
		const val CURRENT_INITIATIVE = "current-initiative"
		const val ROUND_INITIATIVE = "round-initiative"
	}
}

fun Double.level() = CommonAttributes.LEVEL to this
fun Attributes.level() = this[CommonAttributes.LEVEL]

fun Double.xp() = CommonAttributes.XP to this
fun Attributes.xp() = this[CommonAttributes.XP]

fun Double.health() = CommonAttributes.HEALTH to this
fun Attributes.health() = this[CommonAttributes.HEALTH]

fun Entity.isAlive() = this.attributes.health() > 0
fun Entity.isDead() = this.attributes.health() <= 0

fun Double.maxHealth() = CommonAttributes.MAX_HEALTH to this
fun Attributes.maxHealth() = this[CommonAttributes.MAX_HEALTH]

fun Double.haste() = CommonAttributes.HASTE to this
fun Attributes.haste() = this[CommonAttributes.HASTE]

fun Double.mana() = CommonAttributes.MANA to this
fun Attributes.mana() = this[CommonAttributes.MANA]

fun Double.maxMana() = CommonAttributes.MAX_MANA to this
fun Attributes.maxMana() = this[CommonAttributes.MAX_MANA]

fun Double.strength() = CommonAttributes.STRENGTH to this
fun Attributes.strength() = this[CommonAttributes.STRENGTH]

fun Double.damage() = CommonAttributes.DAMAGE to this
fun Attributes.damage() = this[CommonAttributes.DAMAGE]

fun Double.currentInitiative() = CommonAttributes.CURRENT_INITIATIVE to this
fun Attributes.currentInitiative() = this[CommonAttributes.CURRENT_INITIATIVE]

fun Double.roundInitiative() = CommonAttributes.ROUND_INITIATIVE to this
fun Attributes.roundInitiative() = this[CommonAttributes.ROUND_INITIATIVE]
