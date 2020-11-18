package leight.auth

import java.util.*

interface IRoleService {
	fun rolesFor(ticket: UUID): Set<String>
}
