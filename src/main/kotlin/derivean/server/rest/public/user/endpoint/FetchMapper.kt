package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.user.entities.User

class FetchMapper(container: IContainer) : AbstractMapper<User, FetchMapper.Response>(container) {
	override fun map(item: User) = Response.build {
		this.id = item.id
		this.name = item.name
		this.login = item.login
	}

	data class Response(
		val id: String,
		val name: String,
		val login: String,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			lateinit var login: String

			fun build() = Response(
				id.toString(),
				name,
				login,
			)
		}
	}
}
