function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenHelmetCounter = 0;
  let brokenSwordCounter = 0;
  let brokenShieldCounter = 0;
  let brokenArmorCounter = 0;
  let secondShieldCounter = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      brokenHelmetCounter++;
    }
    if (i % 3 === 0) {
      brokenSwordCounter++;
    }
    if (i % 3 === 0 && i % 2 === 0) {
      brokenShieldCounter++;
      secondShieldCounter++;
    }
    if (secondShieldCounter === 2) {
      brokenArmorCounter++;
      secondShieldCounter = 0;
    }
  }
  let priceHelmets = brokenHelmetCounter * helmetPrice;
  let priceSwords = brokenSwordCounter * swordPrice;
  let priceShields = brokenShieldCounter * shieldPrice;
  let priceArmors = brokenArmorCounter * armorPrice;

  let totalCost = (
    priceHelmets +
    priceSwords +
    priceShields +
    priceArmors
  ).toFixed(2);
  console.log(`Gladiator expenses: ${totalCost} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
