package derivean.lib.api.upgrade

import derivean.lib.api.config.IConfigurable
import kotlin.reflect.KClass

interface IUpgradeManager : IConfigurable<IUpgradeManager> {
	/**
	 * register an upgrade (order of upgrades is important)
	 */
	fun <T : IUpgrade> register(upgrade: KClass<T>): IUpgradeManager

	/**
	 * execute upgrade process
	 */
	fun upgrade(): Int
}
