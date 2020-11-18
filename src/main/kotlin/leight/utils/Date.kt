package leight.utils

import org.joda.time.DateTime
import org.joda.time.format.ISODateTimeFormat

fun DateTime.asDate() = this.toString("YYYY-MM-dd")

fun DateTime.asStamp() = this.toString("YYYY-MM-dd HH:mm:ss.SSS")

fun DateTime.asIso() = this.toLocalDateTime().toString(ISODateTimeFormat.dateTime())
