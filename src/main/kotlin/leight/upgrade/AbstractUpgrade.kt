@file:Suppress("unused")

package leight.upgrade

import leight.container.IContainer
import leight.storage.IStorage
import kotlin.reflect.KClass

abstract class AbstractUpgrade(container: IContainer) : IUpgrade {
	protected val storage: IStorage by container.lazy()
	private lateinit var upgrades: List<KClass<out IUpgrade>>

	override fun getVersion(): String {
		return this::class.qualifiedName as String
	}

	override fun <T : IUpgrade> isCurrent(upgrade: KClass<T>): Boolean {
		return upgrades.contains(upgrade)
	}

	override fun upgrade(upgrades: List<KClass<out IUpgrade>>) {
		this.upgrades = upgrades
		upgrade()
	}
}
