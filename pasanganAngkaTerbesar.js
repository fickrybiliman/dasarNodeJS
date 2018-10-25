function pasanganTerbesar(num) {
   // you can only write your code here!
   let twoNum = [];
   let str = num + '';
   
   for (let i = 0; i < str.length-1; i++) {
      twoNum.push(str[i] + str[i+1])
   }

   return Math.max(...twoNum);
 }
 
 // TEST CASES
 console.log(pasanganTerbesar(641573)); // 73
 console.log(pasanganTerbesar(12783456)); // 83
 console.log(pasanganTerbesar(910233)); // 91
 console.log(pasanganTerbesar(71856421)); // 85
 console.log(pasanganTerbesar(79918293)); // 99