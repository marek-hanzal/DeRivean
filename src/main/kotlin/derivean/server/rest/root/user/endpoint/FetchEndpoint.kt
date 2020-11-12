package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.rest.common.Attribute
import derivean.server.rest.root.AbstractFetchEndpoint
import derivean.server.user.UserHeroRepository
import derivean.server.user.UserRepository
import derivean.server.user.entities.User
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/user",
		"root.user",
		fetchMapper,
		userRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<User, FetchMapper.Fetch>(container) {
	private val userHeroRepository: UserHeroRepository by container.lazy()

	override fun map(item: User) = Fetch.build {
		this.id = item.id
		this.name = item.name
		this.login = item.login
		this.site = item.site
		item.ticket?.let { this.ticket = it.toString() }
		this.stats = Stats(
			item.kingdoms.count(),
			userHeroRepository.total(item.id.value),
		)
		item.attributes.forEach {
			this.attributes.add(Attribute(it.name, it.value))
		}
	}

	data class Fetch(
		val id: String,
		val name: String,
		val login: String,
		val ticket: String?,
		val site: String?,
		val stats: Stats,
		val attributes: List<Attribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			lateinit var login: String
			var ticket: String? = null
			var site: String? = null
			lateinit var stats: Stats
			val attributes = mutableListOf<Attribute>()

			fun build() = Fetch(
				id.toString(),
				name,
				login,
				ticket,
				site,
				stats,
				attributes,
			)
		}
	}

	data class Stats(
		val kingdoms: Long,
		val heroes: Long,
	)
}
