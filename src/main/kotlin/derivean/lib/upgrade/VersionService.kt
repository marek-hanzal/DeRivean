package derivean.lib.upgrade

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import derivean.lib.utils.asStamp
import org.jetbrains.exposed.sql.SchemaUtils

class VersionService(container: IContainer) : AbstractService(container), IVersionService {
	private val storage: IStorage by container.lazy()

	override fun getVersion(): String? = try {
		getCollection().first().version
	} catch (e: NoSuchElementException) {
		null
	}

	override fun upgrade(upgrade: IUpgrade) = storage.write {
		UpgradeEntity.new {
			version = upgrade.getVersion()
		}
	}

	override fun getCollection() = storage.read {
		UpgradeEntity.all().sortedByDescending { it.stamp }.iterator().asSequence().asIterable()
	}

	override fun print() = storage.read {
		for (version in getCollection()) {
			println("\t[${version.stamp.asStamp()}]: ${version.version}")
		}
	}

	override fun onSetup() = storage.transaction {
		SchemaUtils.create(UpgradeTable)
	}
}
