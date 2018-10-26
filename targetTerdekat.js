function targetTerdekat(arr) {
   // you can only write your code here!
   if (arr.indexOf('x') == -1) {
      return 0;
   }
   let oIndex = arr.indexOf('o');
   let xIndex = arr.indexOf('x', oIndex) > 0 ? arr.indexOf('x', oIndex) : arr.indexOf('x');

   // console.log(`oindex = ${oIndex}, xindex = ${xIndex}`);
   return xIndex - oIndex > 0 ? (xIndex - oIndex) : ((arr.length-1) - oIndex) + xIndex;
 }
 
 // TEST CASES
 console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
 console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
 console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
 console.log(targetTerdekat(['', '', 'o', ''])); // 0
 console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2