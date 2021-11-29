// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.
// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1
// 2

function solution(arr){         
  /**
   * 배열 7개의 수가 들어옴
   * 가장 작은 값을 구해서 출력해라
   * 일단 반복문으로 돌려
   * 작은 수 값을 추력
   * 
   * 최솟값 구할때는 큰 숫자로 초기화(?) -> Number.MAX_SAFE_INTEGER;
   */
  //let result, min  = Number.MAX_SAFE_INTEGER;
 let result = 0
 let min = arr[0] // 그냥 0 이 아니라, arr의 [0번째] 값이랑 비교해야 최솟값을 구하지 병신아!!!
 console.log(arr[0])
 console.log(result)
 console.log(min)
  for(let i = 0 ; i < arr.length ; i++) {
   console.log(arr[i])
      if(min > arr[i]) {
          min = arr[i]
          
      }
  }
  //result = min
  return min;
}
//최소값 -> 내장함수 Math.min() -> 자연수만 들어감 1,2,3 // 배열형태로 못들어감 
// 배열을 스프레드 형태로 넣어줌
console.log(Math.min(2,5,7))
//console.log(Math.min(arr))


let arr=[5, 7, 5, 3, 2, 9, 11];
//console.log(solution(arr))
console.log(Math.min(...arr))
// 스프레드 안쓰러ㅕ면???