package derivean.server.upgrade.u2020_10_21

import derivean.game.attribute.common.*
import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService
import derivean.server.entity.EntityRepository
import derivean.server.upgrade.u2020_10_21.entities.*
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_10_21(container: IContainer) : AbstractUpgrade(container) {
	private val entityRepository: EntityRepository by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				UpgradeUserTable,
				UpgradeKingdomTable,
				UpgradeBuildingTable,
				UpgradeHeroTable,
				UpgradeHeroAttributeTable,
				UpgradeEntityTable,
				UpgradeEntityAttributeTable,
				UpgradeEquipmentTable,
				UpgradeEntityAttributeTable,
				inBatch = true,
			)
		}
		storage.transaction {
			UpgradeUser.new {
				name = "The God"
				login = "root"
				password = authenticatorService.encrypt("root")
				site = "root"
			}
			/**
			 * Base Entity for all Human related Entities.
			 */
			UpgradeEntity.new {
				this.name = "Gwork, The First Human"
			}.also { human ->
				/**
				 * Base Entity for all Warrior Class related Entities.
				 */
				UpgradeEntity.new {
					this.ancestor = human
					this.name = "Horwath, Greatest of Warriors"
				}
				/**
				 * Base Entity for all Mage Class related Entities.
				 */
				UpgradeEntity.new {
					this.ancestor = human
					this.name = "Moo, Greatest of Mages"
				}
			}
			UpgradeKingdom.new {
				user = UpgradeUser.find { UpgradeUserTable.login eq "root" }.first()
				name = "root"
			}
		}
		storage.transaction {
			entityRepository.attributes(
				entityRepository.findByName("Gwork, The First Human").id,
				100.0.health(),
				100.0.maxHealth(),
				25.0.mana(),
				25.0.maxMana(),
				10.0.strength(),
				5.0.physicalDefense(),
				10.0.roundInitiative(),
				1.0.haste(),
			)
			entityRepository.attributes(
				entityRepository.findByName("Horwath, Greatest of Warriors").id,
				160.0.health(),
				160.0.maxHealth(),
				5.0.mana(),
				5.0.maxMana(),
				20.0.strength(),
				12.0.physicalDefense(),
				0.9.haste(),
				12.5.roundInitiative(),
				1.0.classWarrior(),
			)
			entityRepository.attributes(
				entityRepository.findByName("Moo, Greatest of Mages").id,
				70.0.health(),
				70.0.maxHealth(),
				100.0.mana(),
				100.0.maxMana(),
				0.75.haste(),
				10.0.roundInitiative(),
				1.0.classMage(),
			)
		}
	}
}
