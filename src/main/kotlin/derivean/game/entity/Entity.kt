package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.ability.Ability
import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.mutator.IMutator
import derivean.game.mutator.Mutator

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
class Entity(
	val name: String,
	val attributes: Attributes,
	val abilities: Abilities,
) {
	override fun toString() = name

	/**
	 * Set desired attributes to the Entity.
	 */
	fun attributes(vararg attributes: Attribute) = this.attributes.set(*attributes)

	/**
	 * Use specified ability of this entity on target Entities.
	 */
	fun ability(name: String, targets: Entities = Entities()) = abilities[name].use(this, targets)

	fun ability(name: String, target: Entity) = ability(name, Entities(target))

	fun target(ability: String, target: Entity) = abilities[ability].target(this, target)

	fun inc(attribute: Attribute) = attributes.inc(attribute)

	fun decOrZero(attribute: Attribute) = attributes.decOrZero(attribute)

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()
		private var abilities = Abilities()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun ability(name: String, mutator: IMutator, attributes: Attributes = Attributes()) {
			this.abilities.ability(Ability(name, mutator, attributes))
		}

		fun ability(ability: IAbility) {
			abilities.ability(ability)
		}

		fun build() = Entity(
			name,
			attributes,
			abilities,
		)
	}
}

fun Entity.mutateWith(attributes: Attributes = Attributes()) = Mutator(this, attributes)
