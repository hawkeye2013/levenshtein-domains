const fs = require("fs");

const getDomains = (file) => {
  const rawData = fs.readFileSync(`./${file}.txt`, {
    encoding: "utf-8",
  });

  return rawData.split("\n").filter((domain) => domain !== "");
};

module.exports = {
  getDomains,
};
