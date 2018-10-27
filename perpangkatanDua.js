function perpangkatanDua(str) {
   // you can only write your code here!

   let count = 0;

   while (str % 2 == 0) {
     count++;
     str /= 2;
   }
   return count == 1 ? -1 : count;

 }
 
 // TEST CASES
 console.log(perpangkatanDua(64)); // 6
 console.log(perpangkatanDua(22)); // -1
 console.log(perpangkatanDua(16)); // 4
 console.log(perpangkatanDua(222)); // -1
 console.log(perpangkatanDua(1)); // 0