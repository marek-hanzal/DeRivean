package derivean.game.equipment

import derivean.game.equipment.equipments.Hands
import derivean.game.equipment.equipments.weapons.Sword
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class EquipmentsTest {
	@Test
	fun `Equip something`() {
		val equipments = Equipments()
		val hands = Hands()
		val sword = Sword()

		assertNull(equipments.equip("hands", hands))
		assertEquals(hands, equipments.equip("hands", sword))
		assertEquals(sword, equipments.equip("hands", hands))
	}
}
