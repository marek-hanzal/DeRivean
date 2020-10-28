package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable
import derivean.server.user.entities.User
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll

class UserKingdomRepository(val user: User, container: IContainer) : AbstractRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container) {
	override fun total() = entity.table.slice(entity.table.id).selectAll().andWhere { KingdomTable.user eq user.id }.count()

	override fun page(page: Int, limit: Int, block: (Kingdom) -> Unit) = entity.find { KingdomTable.user eq user.id }.limit(limit, (page * limit).toLong()).forEach { block(it) }
}
