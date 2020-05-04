package derivean.lib.container

import derivean.lib.api.container.IContainer
import derivean.lib.api.job.*
import derivean.lib.api.message.IMessageBus
import derivean.lib.api.pool.IPool
import derivean.lib.api.rest.discovery.IDiscoveryService
import derivean.lib.api.rest.page.IPageService
import derivean.lib.api.scraper.IScraper
import derivean.lib.api.server.IHttpServer
import derivean.lib.api.server.ILinkGenerator
import derivean.lib.api.storage.IStorage
import derivean.lib.api.upgrade.IUpgradeManager
import derivean.lib.api.upgrade.IVersionService
import derivean.lib.job.JobController
import derivean.lib.job.JobExecutor
import derivean.lib.job.JobManager
import derivean.lib.job.JobScheduler
import derivean.lib.job.stats.JobStats
import derivean.lib.message.MessageBus
import derivean.lib.pool.Pool
import derivean.lib.rest.discovery.DiscoveryService
import derivean.lib.rest.page.PageService
import derivean.lib.scraper.Scraper
import derivean.lib.server.HttpServer
import derivean.lib.server.LinkGenerator
import derivean.lib.storage.Storage
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
