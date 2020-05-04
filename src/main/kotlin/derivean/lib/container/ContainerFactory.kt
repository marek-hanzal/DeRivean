package derivean.lib.container

import derivean.lib.job.*
import derivean.lib.job.stats.JobStats
import derivean.lib.message.IMessageBus
import derivean.lib.message.MessageBus
import derivean.lib.pool.IPool
import derivean.lib.pool.Pool
import derivean.lib.rest.discovery.DiscoveryService
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.rest.page.IPageService
import derivean.lib.rest.page.PageService
import derivean.lib.scraper.IScraper
import derivean.lib.scraper.Scraper
import derivean.lib.server.HttpServer
import derivean.lib.server.IHttpServer
import derivean.lib.server.ILinkGenerator
import derivean.lib.server.LinkGenerator
import derivean.lib.storage.IStorage
import derivean.lib.storage.Storage
import derivean.lib.upgrade.IUpgradeManager
import derivean.lib.upgrade.IVersionService
import derivean.lib.upgrade.UpgradeManager
import derivean.lib.upgrade.VersionService
import kotlin.time.ExperimentalTime

@ExperimentalTime
object ContainerFactory {
	fun container() = Container().apply {
		registerSystemServices()
		registerStorageServices()
		registerJobServices()
		registerHttpServices()
	}

	private fun IContainer.registerSystemServices() {
		register(IContainer::class) { this }
		register(IUpgradeManager::class, UpgradeManager::class)
		register(IVersionService::class, VersionService::class)
		register(IMessageBus::class, MessageBus::class)
	}

	private fun IContainer.registerStorageServices() {
		register(IStorage::class, Storage::class)
		register(IPool::class, Pool::class)
	}

	private fun IContainer.registerJobServices() {
		register(IJobScheduler::class, JobScheduler::class)
		register(IJobManager::class, JobManager::class)
		register(IJobExecutor::class, JobExecutor::class)
		register(IJobController::class, JobController::class)
		register(IJobStats::class, JobStats::class)
	}

	private fun IContainer.registerHttpServices() {
		register(IHttpServer::class, HttpServer::class)
		register(ILinkGenerator::class, LinkGenerator::class)
		register(IPageService::class, PageService::class)
		register(IDiscoveryService::class, DiscoveryService::class)
		register(IScraper::class, Scraper::class)
	}
}
