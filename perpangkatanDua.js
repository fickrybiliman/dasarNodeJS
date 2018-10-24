function perpangkatanDua(str) {
   // you can only write your code here!
   return Number.isInteger(Math.sqrt(str)) ? Math.sqrt(str) : -1;
 }
 
 // TEST CASES
 console.log(perpangkatanDua(64)); // 6
 console.log(perpangkatanDua(22)); // -1
 console.log(perpangkatanDua(16)); // 4
 console.log(perpangkatanDua(222)); // -1
 console.log(perpangkatanDua(1)); // 0