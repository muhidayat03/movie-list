
const anagram = (array) => {
  let result = [];
  let words = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    let sorted_word = array[i].split('').sort().join('');
    let index = words.indexOf(sorted_word);
    if (index === -1) {
      words.push(sorted_word);
      result.push([array[i]]);
    } else { 
      result[index].push(array[i]);
    }
  }
  return result;
}


const data = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

console.log(anagram(data))