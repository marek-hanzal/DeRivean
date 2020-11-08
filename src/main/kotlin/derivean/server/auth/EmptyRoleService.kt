package derivean.server.auth

import derivean.lib.auth.IRoleService
import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import java.util.*

class EmptyRoleService(container: IContainer) : AbstractService(container), IRoleService {
	override fun rolesFor(ticket: UUID) = setOf<String>()
}
