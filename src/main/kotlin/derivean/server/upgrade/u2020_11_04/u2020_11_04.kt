package derivean.server.upgrade.u2020_11_04

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass
import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade

@ExperimentalStdlibApi
class u2020_11_04(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
//			SchemaUtils.create(
//				UpgradeTranslationTable,
//			)
		}
		storage.write {
			grass<Translation>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream("upgrade/u2020_11_04/translations.csv"))).forEach {
//				UpgradeTranslation.new {
//					language = it.language
//					namespace = it.namespace
//					label = it.label
//					text = it.text
//				}
			}
		}
	}

	data class Translation(
		val id: String,
		val language: String,
		val namespace: String,
		val label: String,
		val text: String,
	)
}
