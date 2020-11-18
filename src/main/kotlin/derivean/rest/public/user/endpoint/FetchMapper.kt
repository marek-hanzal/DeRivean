package derivean.rest.public.user.endpoint

import derivean.storage.entities.UserEntity
import leight.container.IContainer
import leight.mapper.AbstractMapper
import leight.storage.EntityUUID

class FetchMapper(container: IContainer) : AbstractMapper<UserEntity, FetchMapper.Response>(container) {
	override fun map(item: UserEntity) = Response.build {
		this.id = item.id
		this.name = item.name
		this.login = item.login
		this.site = item.site!!
	}

	data class Response(
		val id: String,
		val name: String,
		val login: String,
		val site: String,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			lateinit var login: String
			lateinit var site: String

			fun build() = Response(
				id.toString(),
				name,
				login,
				site,
			)
		}
	}
}
