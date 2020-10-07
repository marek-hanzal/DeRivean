package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.formation.Formations

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
class Entity(
	val entity: String,
	val attributes: Attributes,
	val abilities: Abilities,
) {
	override fun toString() = entity

	/**
	 * Set desired attributes to the Entity.
	 */
	fun attributes(vararg attributes: Attribute) = this.attributes.set(*attributes)

	fun targets(ability: String, formations: Formations) = abilities[ability].targets(this, formations)

	fun ability(ability: String, target: Entity) = abilities[ability].use(this, target)

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
