package derivean.upgrade.u2020_11_17

import derivean.server.translation.TranslationCsv
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

/**
 * Just translations. They're quite useful.
 */
@ExperimentalStdlibApi
class u2020_11_17_01(container: IContainer) : AbstractUpgrade(container) {
	private val translationCsv: TranslationCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			translationCsv.import("upgrade/u2020_11_17/translations.csv")
		}
	}
}
