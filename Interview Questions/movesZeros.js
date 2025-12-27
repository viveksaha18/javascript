
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
  // your code here
  let j = 0;
  for(let i = 0; i < list.length; i++) {
    if(list[i] != 0) {
      list[j] = list[i];
      j++;
    }
  }
  while(j < list.length) {
    list[j] = 0;
    j++;
  }
}

const list = [0,0,0,1,3,2,6];
moveZeros(list)
console.log(list)


