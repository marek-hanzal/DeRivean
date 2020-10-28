package derivean.server.rest.root.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.created
import derivean.server.kingdom.KingdomRepository
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class KingdomCreateMapper(container: IContainer) : AbstractActionMapper<KingdomCreateMapper.Request, Response<out Any>>(container) {
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun resolve(item: Request) = try {
		created(kingdomFetchMapper.map(storage.write {
			kingdomRepository.create {
				this.name = item.name
				this.user = userRepository.find(item.user)
			}.also { kingdom ->
				kingdomRepository.attributes(kingdom.id, *item.attributes.distinctBy { it.attribute }.map { it.attribute to it.value }.toTypedArray())
			}
		}))
	} catch (e: ExposedSQLException) {
		when {
			else -> {
				throw e
			}
		}
	}
//	catch (e: Throwable) {
//		internalServerError(ValidationResponse.build {
//			message = "Some ugly internal server error happened!"
//		})
//	}

	data class Request(val user: String, val name: String, val attributes: List<Attribute>)
	data class Attribute(val attribute: String, val value: Double)
}
