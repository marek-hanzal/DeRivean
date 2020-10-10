package derivean.game.ability

class Abilities(private val map: MutableMap<String, IAbility> = mutableMapOf()) : Iterable<IAbility> {
	fun ability(vararg abilities: IAbility) {
		for (ability in abilities) {
			map[ability.ability] = ability
		}
	}

	operator fun get(name: String) = map.getOrElse(name) { throw UnknownAbilityException("Requested unknown ability [${name}].") }

	override fun iterator() = map.values.iterator()
}
