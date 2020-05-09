package derivean.game.environment

import derivean.game.entity.Relationships
import derivean.game.entity.Spirits

abstract class Environment(
	private val spirits: Spirits,
	private val relationships: Relationships
) : IEnvironment {
	override fun spirits(): Spirits = spirits

	override fun relationships(): Relationships = relationships
}
