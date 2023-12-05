/*function makeArray(firstArray, secondArray, maxLength) {
  const resultArray = [...firstArray, ...secondArray];

  if (maxLength === 0) {
    return [];
  } else if (resultArray.length > maxLength) {
    return resultArray.slice(0, maxLength);
  } else {
    return resultArray;
  }
}
*/
function makeArray(firstArray, secondArray, maxLength) {
  const resultArray = [];
  for (
    let i = 0;
    i < firstArray.length && resultArray.length < maxLength;
    i++
  ) {
    resultArray.push(firstArray[i]);
  }
  for (
    let secondI = 0;
    secondI < secondArray.length && resultArray.length < maxLength;
    secondI++
  ) {
    resultArray.push(secondArray[secondI]);
  }
  return resultArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); //
