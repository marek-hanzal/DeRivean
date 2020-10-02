package derivean.game.ability

class Abilities(private val map: MutableMap<String, IAbility> = mutableMapOf()) {
	fun ability(ability: Ability) {
		map[ability.name] = ability
	}
}
