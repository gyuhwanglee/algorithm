// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
//  일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 
// 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시 오.
// ▣ 입력설명
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 
// 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// ▣ 출력설명
// 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
// ▣ 입력예제 1
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13
function solution(arr){
  /**
   * 일곱난쟁이 키의 합은 100을 넘지 않는 자연수
   * arr의 값을 반복문으로 돌고, 그 합이 100 이하인지 아닌지 
   * 주어진 배열의 전체 합을 구한다.
   * 가짜 난쟁이 값을 2개 구한다.-> 이중 반복문
   * 그리고 주어진 전체 합에서 2명의 합을 뺀 값이 100 보다 작거나 같아야된다.
   */
  let result 
  //let sum = 0
//  while(sum >= 100) {  //// sum이 100보다 크거나 작을때 까지 ?
//     sum
//     }
// let sum = arr.reduce((a,b) => {
//     return a + b
// },0)
// for(let i = 0 ; i < arr.length ; i ++) {
//     for(let j = j + 1 ; j < arr.length ; i ++) {
//         if()
//      }
//     }


let answer=arr;
let sum=answer.reduce((a, b)=>a+b, 0);
for(let i=0; i<arr.length; i++){
   for(let j=i+1; j<arr.length; j++){
       if((sum-(answer[i]+answer[j]))===100){
           console.log(answer.splice())
           let a =answer.splice(j, 1);
           let b = answer.splice(i, 1);
           console.log(a)
          
           console.log(b)
       }
   }
}
return answer;
}




let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
