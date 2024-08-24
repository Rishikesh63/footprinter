import test from "ava"
import { getTestFixture } from "tests/fixtures/get-test-fixture"
import { su } from "@tscircuit/soup-util"

test("sot236", async (t) => {
  const { fp, logSoup, snapshotSoup } = await getTestFixture(t)
  const soup = fp.string("sot236").soup()

  await logSoup(soup)
  snapshotSoup(soup)
  t.pass()
})
