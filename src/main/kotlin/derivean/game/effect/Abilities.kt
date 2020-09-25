package derivean.game.effect

class Abilities(private val effects: MutableMap<String, IEffect> = mutableMapOf()) {
	operator fun plusAssign(ability: Ability) {
		effects[ability.name] = ability.effect
	}
}
