package derivean.lib.container

import derivean.lib.pool.IPool
import derivean.lib.pool.Pool
import derivean.lib.rest.discovery.DiscoveryService
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.rest.page.IPageService
import derivean.lib.rest.page.PageService
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

object ContainerFactory {
	fun container() = Container().apply {
		registerSystemServices()
		registerStorageServices()
		registerHttpServices()
	}

	private fun IContainer.registerSystemServices() {
		service(IContainer::class) { this }
		service(IUpgradeManager::class) { UpgradeManager(this) }
		service(IVersionService::class) { VersionService(this) }
	}

	private fun IContainer.registerStorageServices() {
		service(IStorage::class) { Storage(this) }
		service(IPool::class) { Pool(this) }
	}

	private fun IContainer.registerHttpServices() {
		service(IHttpServer::class) { HttpServer(this) }
		service(ILinkGenerator::class) { LinkGenerator(this) }
		service(IPageService::class) { PageService(this) }
		service(IDiscoveryService::class) { DiscoveryService(this) }
	}
}
