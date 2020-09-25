package derivean.game.effect

class Effects(private val effects: MutableMap<String, IEffect> = mutableMapOf()) {
	operator fun plusAssign(ability: Ability) {
		effects[ability.name] = ability.effect
	}
}
