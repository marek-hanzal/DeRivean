package leight.upgrade

import leight.config.IConfigurable
import kotlin.reflect.KClass

interface IUpgradeManager : IConfigurable {
	/**
	 * register an upgrade (order of upgrades is important)
	 */
	fun <T : IUpgrade> upgrade(upgrade: KClass<T>): IUpgradeManager

	/**
	 * execute upgrade process
	 */
	fun upgrade(): Int
}
