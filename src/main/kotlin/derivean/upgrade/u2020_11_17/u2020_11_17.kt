package derivean.upgrade.u2020_11_17

import derivean.server.auth.AuthenticatorService
import derivean.upgrade.u2020_11_16.storage.entities.RoleEntity
import derivean.upgrade.u2020_11_16.storage.entities.UserEntity
import derivean.upgrade.u2020_11_16.storage.tables.RoleTable
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

/**
 * This upgrade contains default user and roles.
 */
class u2020_11_17(container: IContainer) : AbstractUpgrade(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.write {
			/**
			 * Default (mandatory) root role.
			 */
			RoleEntity.new {
				name = "root"
			}
			/**
			 * Default (mandatory) game role.
			 */
			RoleEntity.new {
				name = "game"
			}
			/**
			 * Default system administrator (root).
			 *
			 * You should change password later on.
			 *
			 * Seriously!
			 */
			UserEntity.new {
				name = "The God"
				login = "root"
				password = authenticatorService.encrypt("root")
				site = "root"
				roles = RoleEntity.find { RoleTable.name eq "root" }
			}
			/**
			 * Default gamer used for testing gaming experience (so it's not necessary
			 * to create game testing account all the times).
			 */
			UserEntity.new {
				name = "The Gamer"
				login = "game"
				password = authenticatorService.encrypt("game")
				site = "game"
				roles = RoleEntity.find { RoleTable.name eq "game" }
			}
			/**
			 * Template user is used as template for new gamers (for example for defining number of
			 * welcome gems or limitations).
			 *
			 * This user is not permitted for login.
			 */
			UserEntity.new {
				name = "template"
				login = "template"
			}
		}
	}
}
