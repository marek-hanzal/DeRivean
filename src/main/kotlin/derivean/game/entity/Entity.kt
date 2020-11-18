package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.formation.Formations
import derivean.game.selector.ISelector
import derivean.game.selector.Targets
import derivean.game.selector.selectors.RankSelector

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
class Entity(
	/**
	 * Entity name - to prevent clashes, it has same property name as the class.
	 */
	val entity: String,
	/**
	 * Default attributes of this Entity (should be modified only when they're permanently modified).
	 */
	val attributes: Attributes,
	/**
	 * Abilities of this Entity - should be modified only when abilities are permanently modified.
	 */
	val abilities: Abilities,
	/**
	 * Selector of this entity used for computing targets.
	 */
	private val selector: ISelector,
) {
	override fun toString() = entity

	/**
	 * Use internal Selector to select targets with available abilities. Selector is responsible for selecting optimal
	 * targets based on current situation (battle, university, ...).
	 */
	fun select(formations: Formations, block: (Targets) -> Unit) = selector.select(this, formations)?.apply(block)

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()
		private var abilities = Abilities()
		var selector: ISelector = RankSelector()

		/**
		 * Set attributes of the newborn Entity.
		 */
		fun attributes(vararg values: Attribute) {
			attributes.set(listOf(*values))
		}

		/**
		 * Set abilities of this Entity.
		 */
		fun ability(vararg ability: IAbility) {
			abilities.ability(*ability)
		}

		/**
		 * Setup internal ability/target Selector of this Entity.
		 */
		fun selector(selector: ISelector) {
			this.selector = selector
		}

		fun build() = Entity(
			name,
			attributes,
			abilities,
			selector,
		)
	}
}
