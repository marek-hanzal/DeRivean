package derivean.server.upgrade.u2020_11_16

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService
import derivean.server.translation.TranslationCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.*
import derivean.server.upgrade.u2020_11_16.storage.tables.*
import org.jetbrains.exposed.sql.SchemaUtils

@ExperimentalStdlibApi
class u2020_11_16(container: IContainer) : AbstractUpgrade(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.write {
			SchemaUtils.create(
				AttributeGroupTable,
				AttributeTable,
				UserTable,
				UserAttributeTable,
				RoleTable,
				UserRoleTable,
				KingdomTable,
				KingdomAttributeTable,
				HeroTable,
				HeroAttributeTable,
				BuildingTable,
				BuildingAttributeTable,
				EquipmentTable,
				EquipmentAttributeTable,
				EntityTable,
				EntityAttributeTable,
				TranslationTable,
			)
		}
		storage.write {
			Role.new {
				name = "root"
			}
			Role.new {
				name = "game"
			}
			User.new {
				name = "The God"
				login = "root"
				password = authenticatorService.encrypt("root")
				site = "root"
				roles = Role.find { RoleTable.name eq "root" }
			}

			val resources = { it: AttributeGroup ->
				AttributeType.new {
					this.group = it
					this.name = "wood"
					this.description = "Just good old wood"
				}
				AttributeType.new {
					this.group = it
					this.name = "stone"
					this.description = "Hard rough stone"
				}
				AttributeType.new {
					this.group = it
					this.name = "plank"
					this.description = "That thing made from wood used for a bit more sophisticated buildings"
				}
				AttributeType.new {
					this.group = it
					this.name = "gold"
					this.description = "Without gold nothing is possible!"
				}
			}
			val commons = { it: AttributeGroup ->
				AttributeType.new {
					this.group = it
					this.name = "xp"
					this.description = "You know it, experience!"
				}
			}
			val userLimits = { it: AttributeGroup ->
				AttributeType.new {
					this.group = it
					this.name = "limit.kingdoms"
					this.description = "Limit number of kingdoms user can create"
				}
			}

			AttributeGroup.new {
				name = "resource"
				description = "Attributes describing Resources (usually production of buildings)."
			}.also { resources(it) }
			AttributeGroup.new {
				name = "cost"
				description = "Attributes describing cost of something; should be in pair with Resources."
			}.also { resources(it) }
			AttributeGroup.new {
				name = "production"
				description = "Attributes related to production of Resources; should be in pair with Resources."
			}.also { resources(it) }

			AttributeGroup.new {
				name = "kingdom"
				description = "Attributes related to Kingdoms"
			}.also { commons(it) }
			AttributeGroup.new {
				name = "building"
				description = "Attributes related to Buildings"
			}.also { commons(it) }
			AttributeGroup.new {
				name = "hero"
				description = "Attributes related to Heroes"
			}.also { commons(it) }
			AttributeGroup.new {
				name = "user"
				description = "Attributes related to Users"
			}.also { commons(it) }
			AttributeGroup.new {
				name = "user.limit"
				description = "Attributes related to User's limits"
			}.also { userLimits(it) }
		}
		storage.write {
			TranslationCsv.translations("upgrade/u2020_11_13/translations.csv").forEach {
				Translation.new {
					language = it.language
					namespace = it.namespace
					label = it.label
					text = it.text
				}
			}
		}
	}
}
