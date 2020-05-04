package derivean.lib.api.upgrade

import derivean.lib.api.config.IConfigurable
import derivean.lib.upgrade.UpgradeEntity

interface IVersionService : IConfigurable<IVersionService> {
	/**
	 * return current version or null if an application is in zero state
	 */
	fun getVersion(): String?

	/**
	 * add a new upgrade
	 */
	fun upgrade(upgrade: IUpgrade): UpgradeEntity

	/**
	 * return collection of installed upgrades
	 */
	fun getCollection(): Iterable<UpgradeEntity>

	/**
	 * print currently installed versions (version per line)
	 */
	fun print()
}
