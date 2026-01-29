// let lis=["apple","banana","mouse"]   //push adds element at the end of the array
// let newlength=lis.push("orange")
// console.log(lis)
// console.log(newlength)

// let lis=["apple","banana","mouse"]  //pop removes element from the end of the array
// let remoe=lis.pop()
// console.log(lis)
// console.log(remoe)

// let lis=["apple","banana","mouse"] //shift removes element from the beginning of the array
// let remove=lis.shift()
// console.log(lis)
// console.log(remove)

// let lis=["apple","banana","mouse"]   //unshift adds element at the beginning of the array
// let bun=lis.unshift("Anaconda")
// console.log(lis)
// console.log(bun)



// let arr=["apple","banana","mango","grapes"]
// let reversedArr=[]

// // while(arr.length>0){
// //     let removedElement=arr.pop()
// //     reversedArr.push(removedElement)
// // }
// // console.log(reversedArr)
// // console.log(arr)


// while(arr.length>0){
//     reversedArr.push(arr.pop())
// }
// console.log(reversedArr)

// // // for (let i=arr.length-1;i>=0;i--){
// // //     let removedElement=arr.pop()
// // //     reversedArr.push(removedElement)
// // // }
// // // console.log(reversedArr)



// let arr=[12,13,-14,15,12,-14,-15]  XXXXXX
// let positiveArr=[]
// let negativeArr=[]
// while(arr.length>0){
//     if (arr.length>=0){
//         positiveArr.push(arr.shift())
//     }
// }
// console.log(positiveArr)
// console.log(negativeArr)



// let arr=["apple","banana","mango","grapes"]
// let temp=[]
// let original=[]
// for (let i=0;i<arr.length;i++){
//     original.push(arr[i])
// }
// while(arr.length>0){
//     temp.push(arr.pop())
// }
// for (let i=0;i<original.length;i++){
//     if (original[i]!==temp[i]){
//         console.log("Not a palindrome")
//     }
// }
// console.log("Palindrome")

//TASK:
// let even=[]
// let odd=[]
// let arr=[12,-13,14,-15,16,17,18,-19,20]
// for (let i=0;i<arr.length;i++){
//     if (arr[i]%2==0){
//         even.push(arr[i])
//         console.log(even)
//     }
//     else{
//         odd.push(arr[i])
//         console.log(odd)
//     }
// }

// let arr=[0,1,0,3,12,0,5,0]
// let new_arr=[]
//  for(let i = 0; i <= arr.length-1; i++) {
//     let val = arr[i];

//     if(val > 0) {
//         new_arr.unshift(val);
//     }
//     else {
//         new_arr.push(val);
//     }
//  }

//  console.log(new_arr);