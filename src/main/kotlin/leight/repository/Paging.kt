package leight.repository

data class Paging(val page: Int, val limit: Int) {
	val offset: Long
		get() = (page * limit).toLong()
}
