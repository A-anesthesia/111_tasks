const randomProfile = require("random-profile-generator");
const process = require("process");
const fs = require("fs");
const { getRandomInteger } = require("./getRandomInteger");

const num = process.argv[2];

function generateName(num) {
  const namesArr = [];

  if (num === undefined) {
    const numRandom = getRandomInteger();
    for (let i = 0; i < numRandom; i++) {
      const data = randomProfile.profile();
      const { fullName } = data;
      namesArr.push(fullName);
      const names = namesArr.join("\n");

      fs.writeFileSync(`./results/${numRandom}-names.txt`, names);
    }
  } else {
    for (let i = 0; i < num; i++) {
      const data = randomProfile.profile();
      const { fullName } = data;
      namesArr.push(fullName);
      const names = namesArr.join("\n");
      fs.writeFileSync(`./results/${num}-names.txt`, names);
    }
  }

  return namesArr;
}
generateName(num);

module.exports = { generateName };
