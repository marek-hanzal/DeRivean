package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.user.entities.UserAttribute
import derivean.server.user.entities.UserAttributeTable

class UserAttributeRepository(container: IContainer) : AbstractRepository<UserAttribute, UserAttributeTable>(UserAttribute, UserAttributeTable, container)
