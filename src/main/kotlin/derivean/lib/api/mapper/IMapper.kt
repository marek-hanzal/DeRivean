package derivean.lib.api.mapper

interface IMapper<T, U> {
	fun map(item: T): U
}
