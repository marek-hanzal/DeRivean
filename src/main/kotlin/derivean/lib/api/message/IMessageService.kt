package derivean.lib.api.message

import derivean.lib.api.config.IConfigurable

interface IMessageService<T> : IConfigurable<T> {
	fun getTarget(): String?

	fun <TResponse : IMessage> execute(message: IMessage): TResponse?

	fun fire(message: IMessage) = execute<IMessage>(message)
}
