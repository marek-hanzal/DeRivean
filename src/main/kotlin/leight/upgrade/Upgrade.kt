package leight.upgrade

import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.jodatime.datetime
import org.joda.time.DateTime

object UpgradeTable : UUIDTable("upgrade") {
	val version = varchar("version", 64).uniqueIndex()
	val stamp = datetime("stamp").clientDefault { DateTime() }
}

class UpgradeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEntity>(UpgradeTable)

	var version by UpgradeTable.version
	var stamp by UpgradeTable.stamp
}
