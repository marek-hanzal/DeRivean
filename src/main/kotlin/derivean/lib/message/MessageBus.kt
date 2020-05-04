package derivean.lib.message

import derivean.lib.api.container.IContainer
import derivean.lib.api.message.IMessage
import derivean.lib.api.message.IMessageBus
import derivean.lib.api.message.IMessageService
import derivean.lib.api.message.MessageException
import mu.KotlinLogging
import kotlin.reflect.KClass

class MessageBus(private val container: IContainer) : AbstractMessageService<IMessageBus>(), IMessageBus {
	private var logger = KotlinLogging.logger {}
	private var messageServices: HashMap<String?, IMessageService<*>> = hashMapOf()

	override fun getTarget(): String? = "::message-bus"

	override fun <T : IMessageService<*>> register(messageService: KClass<T>) = container.create(messageService).apply {
		messageServices[this.getTarget()] = this
		logger.debug { "Register: Registered service [${messageService.qualifiedName}] as target for [${this.getTarget()}]" }
	}

	override fun <TResponse : IMessage> execute(message: IMessage): TResponse? {
		val route = (message.target ?: "") + "::" + message.type
		logger.debug { "Execute: [$route]" }
		if (!messageServices.containsKey(message.target)) {
			logger.warn { "Execute: [$route] - cannot handle." }
			throw MessageException("Cannot handle message [$route].")
		}
		try {
			return messageServices[message.target]!!.execute(message)
		} finally {
			logger.debug { "Execute: [$route] - done" }
		}
	}
}
