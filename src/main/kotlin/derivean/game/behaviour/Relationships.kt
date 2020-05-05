package derivean.game.behaviour

import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

/**
 * General class knowing relationships between Spirits.
 */
class Relationships(val spirits: Spirits = Spirits()) {
	private val relationships: MutableMap<Pair<Spirit, Spirit>, RelationshipType> = mutableMapOf()

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

	/**
	 * Mark spirits as friends to each other.
	 */
	fun friends(spirit: Spirit, friend: Spirit) {
		friendOf(spirit, friend)
		friendOf(friend, spirit)
	}

	/**
	 * Return list of enemies of the given Spirit
	 */
	fun enemiesOf(spirit: Spirit) = relationsOf(spirit, RelationshipType.IS_ENEMY)

	/**
	 * Return list of friends of the given Spirit
	 */
	fun friendsOf(spirit: Spirit) = relationsOf(spirit, RelationshipType.IS_FRIEND)

	private fun relation(first: Spirit, second: Spirit, relationshipType: RelationshipType) {
		spirits.add(first, second)
		relationships[Pair(first, second)] = relationshipType
	}

	private fun relationsOf(spirit: Spirit, relationshipType: RelationshipType): Spirits = with(Spirits()) {
		spirits.list().forEach {
			relationships[Pair(spirit, it)]?.let { type ->
				if (type == relationshipType) {
					add(it)
				}
			}
		}
		return this
	}
}
