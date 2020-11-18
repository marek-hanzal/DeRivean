package leight.container

import kotlin.reflect.KClass

interface IContainer {
	fun <T : Any> register(name: KClass<T>, callback: IContainer.() -> T)

	/**
	 * Register a service to Container.
	 */
	fun <T : Any, U : T> service(name: KClass<T>, callback: IContainer.() -> U)

	/**
	 * register config callback
	 */
	fun <T : Any> configurator(name: KClass<T>, configurator: T.() -> Unit)

	/**
	 * actually creates (returns) an instance; instance type
	 * is based on rules defined in instance's factory
	 */
	fun <T : Any> create(name: String): T

	/**
	 * creates an instance by class name
	 */
	fun <T : Any> create(name: KClass<T>): T = create(name.qualifiedName ?: throw ContainerException("Cannot create an instance of unknown class (without qualified name)."))

	fun <T : Any> lazy(): LazyDelegate<T> = LazyDelegate(this)
}
