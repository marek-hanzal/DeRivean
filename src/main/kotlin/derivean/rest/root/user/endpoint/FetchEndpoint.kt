package derivean.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.rest.common.AttributeType
import derivean.rest.common.FetchAttribute
import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.User
import derivean.storage.repository.UserHeroRepository
import derivean.storage.repository.UserRepository
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable

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
		this.attributes = item.attributes
	}

	data class Fetch(
		val id: String,
		val name: String,
		val login: String,
		val ticket: String?,
		val site: String?,
		val stats: Stats,
		val attributes: List<FetchAttribute>,
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
			var attributes: SizedIterable<derivean.storage.entities.Attribute> = SizedCollection()

			fun build() = Fetch(
				id.toString(),
				name,
				login,
				ticket,
				site,
				stats,
				attributes.map { FetchAttribute(AttributeType(it.type.id.value, it.type.group.id.value, it.type.name), it.value) },
			)
		}
	}

	data class Stats(
		val kingdoms: Long,
		val heroes: Long,
	)
}
