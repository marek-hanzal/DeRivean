package derivean.game.ability

class Abilities(private val map: MutableMap<String, IAbility> = mutableMapOf()) : Iterable<IAbility> {
	fun ability(ability: IAbility) {
		map[ability.ability] = ability
	}

	operator fun get(name: String) = map.getOrElse(name) { throw UnknownAbilityException("Requested unknown ability [${name}].") }

	override fun iterator() = map.values.iterator()
}
