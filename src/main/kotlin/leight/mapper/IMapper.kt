package leight.mapper

interface IMapper<T, U> {
	fun map(item: T): U
}
