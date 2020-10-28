package derivean.lib.repository

import derivean.lib.container.IContainer
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.*

abstract class AbstractRelationRepository<T : UUIDEntity, U : UUIDTable>(entity: EntityClass<UUID, T>, table: U, container: IContainer) : AbstractRepository<T, U>(entity, table, container)
