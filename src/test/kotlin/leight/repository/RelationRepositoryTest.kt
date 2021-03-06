package leight.repository

import io.ktor.util.*
import leight.TestContainer
import leight.checker.AbstractChecker
import leight.container.IContainer
import leight.fixtures.PagedEntity
import leight.fixtures.PagedRepository
import leight.storage.IStorage
import org.junit.Test
import kotlin.test.assertEquals

class FlagFilter(container: IContainer) : AbstractChecker<PagedEntity>(container) {
	override fun check(item: PagedEntity) = item.flag
}

@KtorExperimentalAPI
@ExperimentalStdlibApi
class RelationRepositoryTest {
	@Test
	fun `Proper paging!`() {
		TestContainer.setup().let { container ->
			val flagFilter = container.create(FlagFilter::class)
			val storage = container.create(IStorage::class)
			container.create(PagedRepository::class).let { pagedRepository ->
				storage.transaction {
					assertEquals(30, pagedRepository.total())
					assertEquals(11, pagedRepository.total(flagFilter))
					val list = mutableListOf<PagedEntity>()
					pagedRepository.page(Paging(0, 5), { list.add(it) }, flagFilter)
					assertEquals(5, list.count())
					assertEquals(listOf(
						"paged-0",
						"paged-10",
						"paged-11",
						"paged-22",
						"paged-23",
					), list.map { it.name })
				}
			}
		}
	}
}
