package derivean.game.equipment

import derivean.game.attribute.Attributes
import derivean.game.equipment.equipments.Hands
import derivean.game.equipment.equipments.weapons.Sword
import org.junit.Test
import kotlin.test.assertEquals

class InventoryTest {
	@Test
	fun `Equip something`() {
		val inventory = Inventory(
			Hands(Attributes()),
			Hands(Attributes()),
			Sword(Attributes()),
		)
		assertEquals(3, inventory.size())
	}
}
