package leight.upgrade

import leight.container.AbstractService
import leight.container.IContainer
import leight.container.LazyProxy
import kotlin.reflect.KClass
import kotlin.system.measureTimeMillis

class UpgradeManager(container: IContainer) : AbstractService(container), IUpgradeManager {
	private val versionService: IVersionService by container.lazy()
	private var upgrades: MutableList<LazyProxy<out IUpgrade>> = mutableListOf()

	override fun <T : IUpgrade> upgrade(upgrade: KClass<T>): IUpgradeManager {
		upgrades.add(LazyProxy(upgrade, container))
		return this
	}

	override fun upgrade(): Int {
		val version = versionService.getVersion()
		logger.debug { "Upgrade: Starting upgrade to version [${version ?: " - initial version - "}]" }
		val upgrades: MutableList<IUpgrade> = mutableListOf()
		for (upgrade in this.upgrades.reversed()) {
			if (upgrade.instance.getVersion() == version) {
				break
			}
			logger.debug { "Upgrade: Adding upgrade [${upgrade.instance.getVersion()}]" }
			upgrades.add(upgrade.instance)
		}
		upgrades.reverse()
		val currents = upgrades.map {
			logger.debug { "Upgrade: Current [${it::class.qualifiedName}]" }
			it::class
		}
		measureTimeMillis {
			for (upgrade in upgrades) {
				val start = System.currentTimeMillis()
				logger.debug { "Upgrade: [${upgrade::class.qualifiedName}] - starting" }
				try {
					with(upgrade) {
						upgrade(currents)
						versionService.upgrade(this)
					}
					logger.info { "Upgrade: [${upgrade::class.qualifiedName}] - done in [${System.currentTimeMillis() - start}]ms" }
				} catch (e: Throwable) {
					logger.warn { "Upgrade: [${upgrade::class.qualifiedName}] - failed in [${System.currentTimeMillis() - start}]ms: ${e.message}" }
					throw e
				}
			}
		}.also {
			logger.debug { "Upgrade: #${upgrades.count()} upgrades run in ${it}ms" }
		}
		return upgrades.count()
	}
}
