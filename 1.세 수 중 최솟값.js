// 100이하의 자연수 A, B, C를 입력받아 세 수 중 
// 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)
// ▣ 입력설명
// 첫 번째 줄에 100이하의 세 자연수가 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 수를 출력한다.
// ▣ 입력예제 1 6 5 11
// ▣ 출력예제 1 5
// !
function solution(a, b, c){
  /**
   * 100이하의 자연수 a,b,c
   * 가장 작은 값 출력
   * 조건문으로 비교해서 출력?
   */
//   if(a < b && a < c) {
//       return a
//   }
//   else if(b< a && b < c ) return b;
//   else if(c < a && c < b) return c;
  
let result // 변수설정
if(a < b) result = a
// a,b를 비교해서 변수에 작은 값 할당
else result = b
// a가 작지 않으면 b를 변수에 할당
if(c < result) result = c
//그리고 c를 변수값과 비교해서 작으면 c를 할당
return result;// 최종값 리턴
// 변수를 하나 설정해서 a와 b를 비교하고, 변수와 c랑 비교해서 최종값 return result
}

console.log(solution(6, 5, 20));