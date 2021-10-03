const { getRiskyDomains } = require("./domainRisk");
const { getDomains } = require("./domains");

const inputDomains = getDomains("input-domains");

const results = getRiskyDomains(inputDomains, 0);

console.log(`========== RISKY DOMAINS ==========\n`);
results.forEach((result, index) => {
  console.log(`Input Domain Name: ${result.inputDomainName}`);
  console.log(`Closest Domain Name: ${result.closestDomainName}`);
  console.log(`Levenshtein Distance: ${result.levDistanceValue}`);

  if (index + 1 !== results.length) {
    console.log(`\n`);
  }
});
console.log(`\n===================================`);
