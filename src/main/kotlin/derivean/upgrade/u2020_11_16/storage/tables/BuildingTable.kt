package derivean.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.jodatime.datetime

/**
 * Building is intended to produce some resources (defined via Attributes).
 */
object BuildingTable : UUIDTable("building") {
	/**
	 * Shortcut reference to the user owning this building.
	 */
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)

	/**
	 * Building belongs to some kingdom, this is the reference
	 */
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)

	/**
	 * Short name of the building, should go through translator.
	 */
	val name = varchar("name", 64)

	/**
	 * Short description of the building, should go through translator.
	 */
	val description = varchar("description", 192).nullable()

	/**
	 * When a building should be built (usually will be future time); when a building is being built,
	 * this value is not null and should point to the future; building is built, when this flag is in the
	 * past.
	 */
	val build = datetime("build").nullable()

	/**
	 * Marks last time when resources from the building has been claimed. Also when a building is built, marks
	 * the first time the building starts production.
	 */
	val claim = datetime("claim").nullable()

	init {
		uniqueIndex("building_unique", kingdom, name)
	}
}
