package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.user.entities.User

class UserFetchMapper(container: IContainer) : AbstractMapper<User, UserFetchMapper.Fetch>(container) {
	override fun map(item: User) = Fetch.build {
		this.id = item.id
		this.name = item.name
		this.login = item.login
		this.token = item.token
		this.site = item.site
	}

	data class Fetch(
		val id: String,
		val name: String,
		val login: String,
		val token: String?,
		val site: String,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			lateinit var login: String
			var token: String? = null
			lateinit var site: String

			fun build() = Fetch(
				id.toString(),
				name,
				login,
				token,
				site,
			)
		}
	}
}
