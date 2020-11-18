package derivean.server.upgrade.u2020_11_17

import derivean.server.attribute.AttributeGroupCsv
import derivean.server.attribute.AttributeTypeCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeGroupEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeTypeEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

/**
 * Initial set of Attribute Groups and Attribute Types.
 */
@ExperimentalStdlibApi
class u2020_11_17_02(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			AttributeGroupCsv.load("upgrade/u2020_11_17/attribute-groups.csv").forEach {
				AttributeGroupEntity.new {
					name = it.name
					description = it.description
				}
			}
		}
		storage.write {
			AttributeTypeCsv.load("upgrade/u2020_11_17/attribute-types.csv").forEach {
				AttributeTypeEntity.new {
					group = AttributeGroupEntity.find { AttributeGroupTable.name eq it.group }.first()
					name = it.name
					description = it.description
				}
			}
		}
	}
}
