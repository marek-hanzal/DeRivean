package derivean.upgrade.u2020_11_17

import derivean.server.kingdom.KingdomAttributeCsv
import derivean.upgrade.u2020_11_16.storage.entities.KingdomEntity
import derivean.upgrade.u2020_11_16.storage.repository.UserRepository
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

@ExperimentalStdlibApi
class u2020_11_17_03(container: IContainer) : AbstractUpgrade(container) {
	private val userRepository: UserRepository by container.lazy()
	private val kingdomAttributeCsv: KingdomAttributeCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			KingdomEntity.new {
				this.user = userRepository.findByLogin("template")
				this.name = "template"
			}
			kingdomAttributeCsv.import("upgrade/u2020_11_17/kingdom-attributes.csv")
		}
	}
}
