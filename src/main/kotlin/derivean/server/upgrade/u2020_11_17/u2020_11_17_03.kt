package derivean.server.upgrade.u2020_11_17

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.KingdomEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.UserEntity
import derivean.server.upgrade.u2020_11_16.storage.repository.AttributeTypeRepository
import derivean.server.upgrade.u2020_11_16.storage.tables.UserTable
import org.jetbrains.exposed.sql.SizedCollection

class u2020_11_17_03(container: IContainer) : AbstractUpgrade(container) {
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	override fun upgrade() {
		storage.write {
			val user = UserEntity.find { UserTable.name eq "template" }.first()
			val kingdom = KingdomEntity.new {
				this.user = user
				this.name = "template"
				this.attributes = SizedCollection(
					AttributeEntity.new {
						this.type = attributeTypeRepository.findByGroupAndName("kingdom.limit", "limit.heroes")
						this.value = 8.0
					}
				)
			}
		}
	}
}
