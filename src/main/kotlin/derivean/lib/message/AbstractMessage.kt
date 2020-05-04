package derivean.lib.message

abstract class AbstractMessage(override val type: String, override val target: String? = null) : IMessage
