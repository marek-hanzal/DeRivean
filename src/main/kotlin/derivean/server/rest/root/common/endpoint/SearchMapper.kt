package derivean.server.rest.root.common.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.internalServerError
import derivean.lib.rest.ok
import derivean.server.kingdom.KingdomRepository
import derivean.server.user.UserRepository
import derivean.server.rest.root.kingdom.endpoint.FetchMapper as KingdomFetchMapper
import derivean.server.rest.root.user.endpoint.FetchMapper as UserFetchMapper

class SearchMapper(container: IContainer) : AbstractActionMapper<SearchMapper.Request, Response<out Any>>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val userFetchMapper: UserFetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.read {
			Result(
				userRepository.search(item.search).map { userFetchMapper.map(it) },
				kingdomRepository.search(item.search).map { kingdomFetchMapper.map(it) },
			)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val search: String,
	)

	data class Result(
		val users: List<UserFetchMapper.Fetch>,
		val kingdoms: List<KingdomFetchMapper.Fetch>,
	)
}
