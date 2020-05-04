package derivean.lib.message

import derivean.lib.api.message.IMessage

abstract class AbstractMessage(override val type: String, override val target: String? = null) : IMessage
