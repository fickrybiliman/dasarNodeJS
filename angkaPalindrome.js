function angkaPalindrome(num) {
   // you can only write your code here!
   if (num < 10) {
      return num + 1;
   }

   let str = num.toString();
   let rev = str.split('').reverse().join('');
   
   while (str != rev) {
      str = (str * 1) + 1;
      str = str.toString();
      rev = str.split('').reverse().join('')
   }

   return str;
 }
 
 // TEST CASES
 console.log(angkaPalindrome(8)); // 9
 console.log(angkaPalindrome(10)); // 11
 console.log(angkaPalindrome(117)); // 121
 console.log(angkaPalindrome(175)); // 181
 console.log(angkaPalindrome(1000)); // 1001