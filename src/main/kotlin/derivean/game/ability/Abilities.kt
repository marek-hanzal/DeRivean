package derivean.game.ability

class Abilities(private val map: MutableMap<String, IAbility> = mutableMapOf()) {
	fun ability(ability: IAbility) {
		map[ability.ability] = ability
	}

	operator fun get(name: String) = map.getOrElse(name) { throw UnknownAbilityException("Requested unknown ability [${name}].") }
}
