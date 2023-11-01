function getRandomInteger() {
  return Math.floor(Math.random() * (21 - 1) + 1);
}
getRandomInteger();

module.exports = { getRandomInteger };
