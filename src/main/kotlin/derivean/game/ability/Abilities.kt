package derivean.game.ability

class Abilities(vararg ability: Pair<String, Ability>) {
	private val abilities = mutableMapOf<String, Ability>()

	init {
		for (k in ability) {
			abilities[k.first] = k.second
		}
	}

	operator fun get(name: String) = abilities.getOrElse(name) { throw UnknownAbilityException("Requested unknown ability [${name}].") }
}
