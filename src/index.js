/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangle = 0;
  preferences.unshift(0);
    
  for(let i = 1; i < preferences.length; i++) {
      
    let spichoneeA = preferences[i]; // 6
    let spichoneeB = preferences[spichoneeA]; // 20
    let spichoneeC = preferences[spichoneeB]; // 1

    if (i === spichoneeC) {
      triangle ++
    }
  }
  return Math.round(triangle / 3);
};