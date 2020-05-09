package derivean.game.entity

/**
 * General class knowing relationships between Spirits.
 */
class Relationships(val spirits: Spirits = Spirits()) {
	private val relationships: MutableMap<String, RelationshipType> = mutableMapOf()

	/**
	 * Makes uni-directional enemy. "enemy" is spirit's enemy
	 */
	fun enemyOf(spirit: Spirit, enemy: Spirit) = relation(spirit, enemy, RelationshipType.IS_ENEMY)

	/**
	 * Makes uni-directional friend. "friend" is spirit's friend
	 */
	fun friendOf(spirit: Spirit, friend: Spirit) = relation(spirit, friend, RelationshipType.IS_FRIEND)

	/**
	 * Mark spirits as an enemy to each other.
	 */
	fun enemies(spirit: Spirit, enemy: Spirit) {
		enemyOf(spirit, enemy)
		enemyOf(enemy, spirit)
	}

	fun enemies(spirit: String, enemy: String) = enemies(spiritBy(spirit), spiritBy(enemy))

	/**
	 * Mark spirits as friends to each other.
	 */
	fun friends(spirit: Spirit, friend: Spirit) {
		friendOf(spirit, friend)
		friendOf(friend, spirit)
	}

	fun friends(spirit: String, friend: String) = friends(spiritBy(spirit), spiritBy(friend))

	/**
	 * Return list of enemies of the given Spirit
	 */
	fun enemiesOf(spirit: Spirit) = relationsOf(spirit, RelationshipType.IS_ENEMY)

	/**
	 * Return list of friends of the given Spirit
	 */
	fun friendsOf(spirit: Spirit) = relationsOf(spirit, RelationshipType.IS_FRIEND)

	/**
	 * Return a Spirit by it's name
	 */
	fun spiritBy(name: String): Spirit = spirits.get(name)

	private fun relation(first: Spirit, second: Spirit, relationshipType: RelationshipType) {
		spirits.add(first, second)
		relationships["$first-$second"] = relationshipType
	}

	private fun relationsOf(spirit: Spirit, relationshipType: RelationshipType): Spirits = with(Spirits()) {
		spirits.list().forEach {
			relationships["$spirit-$it"]?.let { type ->
				if (type == relationshipType) {
					add(it)
				}
			}
		}
		return this
	}
}
