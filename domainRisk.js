const { levenshteinDistance } = require("./levenshtein");
const { getDomains } = require("./domains");

const getRiskyDomains = (inputDomains, riskLevel) => {
  const trustedDomains = getDomains("trusted-domains");

  let domainLevDist = [];

  inputDomains.forEach((inputDomain) => {
    domainLevDist.push(
      trustedDomains.map((trustedDomain) =>
        levenshteinDistance(trustedDomain, inputDomain)
      )
    );
  });

  let results = [];

  domainLevDist.forEach((distArr, index) => {
    let inputDomainName = inputDomains[index];
    let levDistanceIndex = distArr.indexOf(Math.min(...distArr));
    let levDistanceValue = distArr[levDistanceIndex];
    let closestDomainName = trustedDomains[levDistanceIndex];
    results.push({
      inputDomainName,
      closestDomainName,
      levDistanceValue,
    });
  });

  return results.filter(
    (domainResult) => domainResult.levDistanceValue > riskLevel
  );
};

module.exports = {
  getRiskyDomains,
};
