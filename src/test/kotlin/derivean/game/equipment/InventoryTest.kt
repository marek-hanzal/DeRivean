package derivean.game.equipment

import derivean.game.attribute.Attributes
import derivean.game.equipment.equipments.Hands
import derivean.game.equipment.equipments.weapons.Sword
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class InventoryTest {
	@Test
	fun `Equip something`() {
		val equipments = Inventory()
		val hands = Hands(Attributes())
		val sword = Sword(Attributes())

		assertNull(equipments.slot("hands", hands))
		assertEquals(hands, equipments.slot("hands", sword))
		assertEquals(sword, equipments.slot("hands", hands))
	}
}
