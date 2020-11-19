package leight.fixtures

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.Paging
import leight.storage.EntityUUID
import leight.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SortOrder

object PagedTable : UUIDTable("page") {
	val sort = integer("sort")
	val name = varchar("name", 24).uniqueIndex()
	val flag = bool("flag")
}

class PagedEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<PagedEntity>(PagedTable)

	var sort by PagedTable.sort
	var name by PagedTable.name
	var flag by PagedTable.flag
}

class PagedRepository(container: IContainer) : AbstractRepository<PagedEntity, PagedTable>(PagedEntity, PagedTable, container) {
	override fun source(paging: Paging) = super.source(paging).orderBy(table.sort to SortOrder.ASC)
}

@ExperimentalStdlibApi
class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			SchemaUtils.create(
				PagedTable,
			)
		}
		storage.write {
			var inc = 0
			PagedEntity.new {
				sort = inc++
				name = "paged-0"
				flag = true
			}
			repeat(9) {
				PagedEntity.new {
					sort = inc++
					name = "paged-$sort"
					flag = false
				}
			}
			repeat(10) {
				PagedEntity.new {
					sort = inc++
					name = "paged-$sort"
					flag = true
				}
			}
			repeat(10) {
				PagedEntity.new {
					sort = inc++
					name = "paged-$sort"
					flag = false
				}
			}
		}
	}
}

