package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.internalServerError
import derivean.lib.rest.ok
import derivean.server.user.UserRepository

class DeleteMapper(container: IContainer) : AbstractActionMapper<DeleteMapper.Request, Response<out Any>>(container) {
	private val userRepository: UserRepository by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.write {
			userRepository.delete(item.id)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val id: String)
}
