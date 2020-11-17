package derivean.server.upgrade.u2020_11_17

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.translation.TranslationCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.TranslationEntity

/**
 * Just translations. They're quite useful.
 */
@ExperimentalStdlibApi
class u2020_11_17_01(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			TranslationCsv.load("upgrade/u2020_11_17/translations.csv").forEach {
				TranslationEntity.new {
					language = it.language
					namespace = it.namespace
					label = it.label
					text = it.text
				}
			}
		}
	}
}