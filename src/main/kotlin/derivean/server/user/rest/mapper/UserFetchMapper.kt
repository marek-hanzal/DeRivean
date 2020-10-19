package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.user.User

class UserFetchMapper(container: IContainer) : AbstractMapper<User, UserFetchMapper.Fetch>(container) {
	override fun map(item: User) = Fetch.build {
		this.id = item.id
		this.name = item.name
		this.user = item.user
	}

	data class Fetch(
		val id: String,
		val name: String,
		val user: String,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			lateinit var user: String

			fun build() = Fetch(
				id.toString(),
				name,
				user,
			)
		}
	}
}
