package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.formation.Formations
import derivean.game.selector.ISelector
import derivean.game.selector.RankSelector
import derivean.game.selector.Targets

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
class Entity(
	val entity: String,
	val attributes: Attributes,
	val abilities: Abilities,
	private val selector: ISelector,
) {
	override fun toString() = entity

	fun targets(ability: String, formations: Formations) = abilities[ability].targets(this, formations)

	fun select(formations: Formations) = selector.select(this, formations)

	fun select(formations: Formations, block: (Targets) -> Unit) = selector.select(this, formations)?.let {
		block(it)
		it
	}

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()
		private var abilities = Abilities()
		var selector: ISelector = RankSelector()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun ability(ability: IAbility) {
			abilities.ability(ability)
		}

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
