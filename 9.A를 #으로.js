// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#

function solution(s){
  /**
   * A를 #으로 바꿔라?
   * 문자열 s 
   * a를 #으로? 문자열도 배열처럼 반복문 돌수있잖아
   */
 let result = ''
 for(let i = 0 ; i < s.length; i++) {
     console.log(s[i])
     if(s[i] === "A") {
         result += "#"
         console.log(result)
     }
     else result += s[i]
     console.log(result)
 }
 return result
}

let str="BANANA";
console.log(solution(str));