// / 0, 2 , 4 ...10

// 2)67(33
//   66
// -----
//   1


  // if divisibe by 2 , reminder will be 0 --> even 
  // if not divisibe by 2 , reminder will be 1 --> odd
// 1, 3,5,7,11,13,17,27,29, 31  -- > 1 
// 67/2 = 1- remainder, 33 quotient
// 9/2 = 4 - quotient
// 67% [--> Modulus operation ]2 = 1 --- > final remainder --> odd


var arr = [3,35,4,70, 98, 48];
// even numbers
 var even = [];
 var odd = [];
for(var i=0; i<arr.length; i++){
if(arr[i] % 2 ==0){
even.push(arr[i]);
}else{
    odd.push(arr[i]);
}
}
// console.log(even,odd);

// var nums = [23,12,34,56,76,13,9]
// var even = [];
// var odd = [];
// for(var i =0; i<nums.length;i++){
//   if(nums[i] % 2 ==0){
//     even.push(nums[i]);
//   }else{
//     odd.push(nums[i]);
//   }
// }
// console.log(odd);

var arr = [12,35,76,22,19,34];
 var even = [];
 var odd = []; 

 for(var i = 0; i<arr.length;i++){
  if(arr[i] % 2 ==0){
    even.push(arr[i]);
  }else{
    odd.push(arr[i]);
  }
 }
 console.log(even,odd);