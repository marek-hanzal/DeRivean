package derivean.server.server

import derivean.storage.repository.KingdomRepository
import derivean.storage.repository.UserRepository
import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage

data class ValidationError(
	val id: String,
	val text: String,
	val action: String,
)

class ValidationService(container: IContainer) : AbstractService(container) {
	private val storage: IStorage by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	fun isLockdown() = false

	fun validate(): List<ValidationError> = storage.read {
		mutableListOf<ValidationError>().apply {
			try {
				userRepository.findByLogin("template")
			} catch (e: NoSuchElementException) {
				add(ValidationError("create-template-user", "Missing template user!", "create-template-user"))
			}
			try {
				kingdomRepository.findByName("template")
			} catch (e: NoSuchElementException) {
				add(ValidationError("create-template-kingdom", "Missing template kingdom!", "create-template-kingdom"))
			}
		}
	}
}
