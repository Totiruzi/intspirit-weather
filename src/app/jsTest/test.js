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

function alternate0and1(arr, size)
{
    let type0 = 0;
    let type1 = size - 1;
     
    while (type0 < type1)
    {
        if (arr[type0] == 1)
        {
             
            // Swap
            arr[type1] = arr[type1] + arr[type0];
            arr[type0] = arr[type1] - arr[type0];
            arr[type1] = arr[type1] - arr[type0];
            type1--;
        }
        else
            type0++;
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