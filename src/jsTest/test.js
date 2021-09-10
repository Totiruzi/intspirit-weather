//‌ ‌1.‌ ‌Find‌ ‌the‌ ‌longest‌ ‌sequence‌ ‌of‌ ‌"0"s‌ ‌
function longestZeros(str) {
  // split on 1's, sort, pop and return the length
  return str.split('1').sort().pop().length;
}
//‌ ‌2.‌ ‌Arrange‌ ‌the‌ ‌sequence‌ ‌of‌ ‌"1"s‌ ‌and‌ ‌"0"s‌ ‌in‌ ‌ascending‌ ‌order‌ ‌in‌ ‌a‌ ‌new‌ ‌array‌ ‌while‌ ‌alternating‌ ‌the‌ ‌"1"s‌ ‌and‌ ‌"0"s‌ ‌like:‌‌
// 1010110001111…‌ ‌
// ‌
// const‌ ‌sequencesArray‌ ‌=‌ ‌[‌ ‌
// "1","1","1","1","1",‌ ‌
// "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",‌ ‌
// "1","1","1","1","1",‌ ‌
// "0","0",‌ ‌
// "1",‌ ‌
// "0",‌ ‌
// "1",‌ ‌
// "0",‌ ‌
// "1",‌ ‌
// "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",‌ ‌//starts‌ ‌from‌ ‌idx‌ ‌32‌ ‌
// "1","1",‌ ‌
// "0","0","0","0","0","0","0",‌ ‌
// "1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1",‌ ‌//starts‌ ‌from‌ ‌idx‌ ‌60‌ ‌
// "0","0","0","0","0","0","0","0","0","0","0",‌ ‌
// "1","1","1","1","1",‌ ‌
// "0","0","0",‌ ‌
// "1","1","1","1","1","1",‌ ‌
// "0","0","0","0","0",‌ ‌
// "1","1","1","1","1",‌ ‌
// "0"‌ ‌
// ];‌

function alternate0and1(arr, size) {
  
  /* Initialize left and right indexes */
  let left = 0, right = size-1;
 
  while (left < right) {
    /* Increment left index while we see 0 at left */
    while (arr[left] == 0 && left < right)
        left++;

    /* Decrement right index while we see 1 at right */
    while (arr[right] == 1 && left < right)
        right--;

    /* If left is smaller than right then there is a 1 at left
    and a 0 at right. Exchange arr[left] and arr[right]*/
    if (left < right) {
        arr[left] = 0;
        arr[right] = 1;
        left++;
        right--;
    }
  }
  
}


// 0‌ ‌represents‌ ‌a‌ ‌fish‌ ‌flowing‌ ‌upstream,‌ ‌
// 1‌ ‌represents‌ ‌a‌ ‌fish‌ ‌flowing‌ ‌downstream.
// ‌number‌ ‌of‌ ‌fish‌ ‌that‌ ‌will‌ ‌stay‌ ‌alive.

// For‌ ‌example,‌ ‌consider‌ ‌arrays‌ ‌A‌ ‌and‌ ‌B‌ ‌such‌ ‌that:‌ ‌
// ‌
// ‌A[0]‌ ‌=‌ ‌4‌ ‌B[0]‌ ‌=‌ ‌0‌ ‌
// ‌A[1]‌ ‌=‌ ‌3‌ ‌B[1]‌ ‌=‌ ‌1‌ ‌
// ‌A[2]‌ ‌=‌ ‌2‌ ‌B[2]‌ ‌=‌ ‌0‌ ‌
// ‌A[3]‌ ‌=‌ ‌1‌ ‌B[3]‌ ‌=‌ ‌0‌ ‌
// ‌A[4]‌ ‌=‌ ‌5‌ ‌B[4]‌ ‌=‌ ‌0‌

function lastFishes(A, B) {
  var i=1;
  var fishs = [];
  fishs.push(0);
  
  while(i<A.length) {
      var curFish = i;
      var lastFish = fishs.pop();
      
      if(B[lastFish] === 0 || B[curFish] === 1) {
          fishs.push(lastFish);
          fishs.push(curFish);
          i++;
      } else if(B[lastFish] === 1 && B[curFish] === 0) {
          if(A[lastFish] > A[curFish]) {
              fishs.push(lastFish);
              i++;
          }
          
          if(fishs.length === 0) {
              fishs.push(curFish);
              i++;
          }
      }
  }
  
  return fishs.length;
}