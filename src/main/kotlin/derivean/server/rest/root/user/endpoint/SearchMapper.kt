package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.internalServerError
import derivean.lib.rest.ok
import derivean.server.user.UserRepository

class SearchMapper(container: IContainer) : AbstractActionMapper<SearchMapper.Request, Response<out Any>>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun resolve(item: Request) = try {
		ok(Result(storage.read { userRepository.search(item.search).map { fetchMapper.map(it) } }))
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val search: String)
	data class Result(val users: List<FetchMapper.Fetch>)
}
