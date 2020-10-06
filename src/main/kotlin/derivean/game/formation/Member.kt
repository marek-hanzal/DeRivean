package derivean.game.formation

import derivean.game.entity.Entity

/**
 * Just simple class making relation between an Entity and it's team (Formation).
 */
data class Member(val entity: Entity, val formation: Formation)
