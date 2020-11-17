package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.ilike
import derivean.storage.entities.BuildingEntity
import derivean.storage.entities.HeroEntity
import derivean.storage.entities.KingdomEntity
import derivean.storage.tables.KingdomTable
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.or
import java.util.*

class KingdomRepository(container: IContainer) : AbstractRepository<KingdomEntity, KingdomTable>(KingdomEntity, KingdomTable, container) {
	private val attributeRepository: AttributeRepository by container.lazy()

	fun findByName(name: String) = entity.find { table.name eq name }.first()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name ilike "%${search}%" or (table.id eq uuid) }.orderBy(table.name to SortOrder.ASC).limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name ilike "%${search}%" }.orderBy(table.name to SortOrder.ASC).limit(limit)
	}

	fun useTemplate(template: UUID, target: KingdomEntity) = useTemplate(find(template), target)

	fun useTemplate(template: String, target: KingdomEntity) = useTemplate(search(template).first(), target)

	fun useTemplate(kingdomEntity: KingdomEntity, target: KingdomEntity) {
		target.attributes = attributeRepository.attributes(target.attributes, kingdomEntity.attributes, replace = false)
		kingdomEntity.buildings.forEach {
			BuildingEntity.new {
				this.kingdom = target
				this.user = target.user
				this.name = it.name
				this.description = it.description
				this.build = it.build
				this.attributes = attributeRepository.attributes(this.attributes, it.attributes)
			}
		}
		kingdomEntity.heroes.forEach {
			HeroEntity.new {
				this.kingdom = target
				this.user = target.user
				this.name = it.name
				this.attributes = attributeRepository.attributes(this.attributes, it.attributes)
			}
		}
	}
}
