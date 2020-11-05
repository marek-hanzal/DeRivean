package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable
import derivean.server.kingdom.entities.KingdomTable
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll
import java.util.*

class UserHeroRepository(container: IContainer) : AbstractRelationRepository<Hero, HeroTable>(Hero, HeroTable, KingdomTable.user, container) {
	fun query(relation: UUID) = (entity.table innerJoin KingdomTable).selectAll().andWhere { column eq relation }

	override fun total(relation: UUID) = query(relation).count()

	override fun page(relation: UUID, page: Int, limit: Int, block: (Hero) -> Unit) = query(relation).limit(limit, (page * limit).toLong()).forEach {
		block(entity.wrapRow(it))
	}
}
