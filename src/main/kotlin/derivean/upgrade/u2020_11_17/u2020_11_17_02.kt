package derivean.upgrade.u2020_11_17

import derivean.server.attribute.AttributeGroupCsv
import derivean.server.attribute.AttributeTypeCsv
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

/**
 * Initial set of Attribute Groups and Attribute Types.
 */
@ExperimentalStdlibApi
class u2020_11_17_02(container: IContainer) : AbstractUpgrade(container) {
	private val attributeGroupCsv: AttributeGroupCsv by container.lazy()
	private val attributeTypeCsv: AttributeTypeCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			attributeGroupCsv.import("upgrade/u2020_11_17/attribute-groups.csv")
			attributeTypeCsv.import("upgrade/u2020_11_17/attribute-types.csv")
		}
	}
}
