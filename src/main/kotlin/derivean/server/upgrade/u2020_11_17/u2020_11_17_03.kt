package derivean.server.upgrade.u2020_11_17

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.kingdom.KingdomAttributeCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.KingdomAttributeEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.KingdomEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.UserEntity
import derivean.server.upgrade.u2020_11_16.storage.repository.AttributeTypeRepository
import derivean.server.upgrade.u2020_11_16.storage.repository.KingdomRepository
import derivean.server.upgrade.u2020_11_16.storage.tables.UserTable

@ExperimentalStdlibApi
class u2020_11_17_03(container: IContainer) : AbstractUpgrade(container) {
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	override fun upgrade() {
		storage.write {
			val user = UserEntity.find { UserTable.name eq "template" }.first()
			KingdomEntity.new {
				this.user = user
				this.name = "template"
			}
		}
		storage.write {
			KingdomAttributeCsv.load("upgrade/u2020_11_17/kingdom-attributes.csv").forEach {
				KingdomAttributeEntity.new {
					this.kingdom = kingdomRepository.findByName(it.kingdom)
					this.attribute = AttributeEntity.new {
						this.type = attributeTypeRepository.findByGroupAndName(it.group, it.type)
						this.value = it.value
					}
				}
			}
		}
	}
}
