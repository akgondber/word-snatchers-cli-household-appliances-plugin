import { test } from "uvu";
import * as assert from "uvu/assert";
import WordSnatchersCliHouseholdAppliancesPlugin from "../index.js";

let wordSnatchersCliHouseholdAppliancesPlugin;

test.before.each(() => {
  wordSnatchersCliHouseholdAppliancesPlugin =
    new WordSnatchersCliHouseholdAppliancesPlugin();
});

test("WordSnatchersCliHouseholdAppliancesPlugin#build", () => {
  const items = wordSnatchersCliHouseholdAppliancesPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 4 && item.word.length > 1)
  );
});

test.run();
