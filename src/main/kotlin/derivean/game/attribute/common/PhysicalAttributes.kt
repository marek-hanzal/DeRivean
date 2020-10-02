package derivean.game.attribute.common

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity
import derivean.game.mutator.Mutator

class PhysicalAttributes {
	companion object {
		private const val ATTRIBUTE_DAMAGE = "physical.damage"
		fun damage(value: Double) = ATTRIBUTE_DAMAGE to value
		fun damage(attributes: Attributes) = attributes[ATTRIBUTE_DAMAGE]

		private const val ATTRIBUTE_DEFENSE = "physical.defense"
		fun defense(value: Double) = ATTRIBUTE_DEFENSE to value
		fun defense(attributes: Attributes) = attributes[ATTRIBUTE_DEFENSE]
	}
}

fun Double.physicalDamage() = PhysicalAttributes.damage(this)
fun Attributes.physicalDamage() = PhysicalAttributes.damage(this)
fun Entity.physicalDamage() = this.attributes.physicalDamage()
fun Entity.physicalDamage(value: Double) = this.attributes(PhysicalAttributes.damage(value))
fun Mutator.physicalDamage() = this.entity.physicalDamage() + this.attributes.physicalDamage()

fun Double.physicalDefense() = PhysicalAttributes.defense(this)
fun Attributes.physicalDefense() = PhysicalAttributes.defense(this)
fun Entity.physicalDefense() = this.attributes.physicalDefense()
fun Entity.physicalDefense(value: Double) = this.attributes(PhysicalAttributes.defense(value))
