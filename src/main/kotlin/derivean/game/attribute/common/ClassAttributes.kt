package derivean.game.attribute.common

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

/**
 * Attributes related to heroes classes (warrior, mage, ...).
 */
class ClassAttributes {
	companion object {
		/**
		 * Warrior is very effective in heavy attacks.
		 */
		private const val ATTRIBUTE_WARRIOR = "class.warrior"
		fun classWarrior(value: Double) = ATTRIBUTE_WARRIOR to value
		fun classWarrior(attributes: Attributes) = attributes[ATTRIBUTE_WARRIOR]

		/**
		 * Tank is balanced in attacks and quite big defense and health.
		 */
		private const val ATTRIBUTE_TANK = "class.tank"
		fun classTank(value: Double) = ATTRIBUTE_TANK to value
		fun classTank(attributes: Attributes) = attributes[ATTRIBUTE_TANK]

		/**
		 * Paladin is quite good on attack and defense, and also has bonus for healing.
		 */
		private const val ATTRIBUTE_PALADIN = "class.paladin"
		fun classPaladin(value: Double) = ATTRIBUTE_PALADIN to value
		fun classPaladin(attributes: Attributes) = attributes[ATTRIBUTE_PALADIN]

		/**
		 * Just Mage. That physically weak guy able to cast huuuge destructive spells.
		 */
		private const val ATTRIBUTE_MAGE = "class.mage"
		fun classMage(value: Double) = ATTRIBUTE_MAGE to value
		fun classMage(attributes: Attributes) = attributes[ATTRIBUTE_MAGE]

		/**
		 * Improved mage able to cast less destructive spells, abut als use physical stuff.
		 */
		private const val ATTRIBUTE_BATTLE_MAGE = "class.battle-mage"
		fun classBattleMage(value: Double) = ATTRIBUTE_BATTLE_MAGE to value
		fun classBattleMage(attributes: Attributes) = attributes[ATTRIBUTE_BATTLE_MAGE]

		/**
		 * Healer is quite weak on attacks and defense, but is able to do a lot of
		 * healing.
		 */
		private const val ATTRIBUTE_HEALER = "class.healer"
		fun classHealer(value: Double) = ATTRIBUTE_HEALER to value
		fun classHealer(attributes: Attributes) = attributes[ATTRIBUTE_HEALER]
	}
}

fun Double.classWarrior() = ClassAttributes.classWarrior(this)
fun Attributes.classWarrior() = ClassAttributes.classWarrior(this)
fun Entity.classWarrior() = this.attributes().classWarrior()

fun Double.classTank() = ClassAttributes.classTank(this)
fun Attributes.classTank() = ClassAttributes.classTank(this)

fun Double.classPaladin() = ClassAttributes.classPaladin(this)
fun Attributes.classPaladin() = ClassAttributes.classPaladin(this)

fun Double.classMage() = ClassAttributes.classMage(this)
fun Attributes.classMage() = ClassAttributes.classMage(this)
fun Entity.classMage() = this.attributes().classMage()

fun Double.classBattleMage() = ClassAttributes.classBattleMage(this)
fun Attributes.classBattleMage() = ClassAttributes.classBattleMage(this)

fun Double.classHealer() = ClassAttributes.classHealer(this)
fun Attributes.classHealer() = ClassAttributes.classHealer(this)


