// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 
// 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 필요한 다스 수를 출력합니다.
// ▣ 입력예제 1 25
// ▣ 출력예제 1 3
// ▣ 입력예제 2 178
function solution(n){
   /**
    * n명의 학생수
    * 학생 한명당 1자루씩 연필 나눠
    * 연필은 12자루에 1다스
    * n/12 학생수 나누기 12자루 하면? 
    * n/12 해서 나머지값이 12보다 작으면 1다스 ==
    * 몫을 구해라 -> 몫이 있으면 1다스 추가 해줘야됨
    * Math.ceil -> 소주점 있으면 반올림
    * Math.floor -> 소수점 있으면 내림
    * Math.round -> 5이상 반올림
    * Math.sqrt -> 제곱근
    */
   let result = Math.ceil(n/12) // n/12 -> 소주점 생기면 반올림하니깐 1다스가 추가되잖여
   console.log(result)
   
 return result
}
//console.log(25/12)
console.log(solution(178));