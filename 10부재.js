// 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 
// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금 지하는 것이다. 
// 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다. 또한, 
// 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한 다.
// 여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 
// 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.
// ▣ 출력설명
// 주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니 다.
// ▣ 입력예제 1
// 3
// 25 23 11 47 53 17 33
// ▣ 출력예제 1 
// 3
// ▣ 입력예제 2
// 0
// 12 20 54 30 87 91 30
// ▣ 출력예제 2 
// 3

function solution(day, arr){
  /**
   * 날짜와 자동차 번호가 주어짐
   * 날짜와 자동차 1의 자리 숫자가 같은걸 찾아야됨
   * arr은 반복문으로 돌리긴 해야할듯
   * 반복문 돌려서 나온 arr[i]을 10으로 나눈 나머지  day의 값과 같은지 여부를 확인
   * 같으면 카운트해줘
   * 
   */
  //! 어떤 숫자든 10으로 나눴을때 일의 자리 앞에 숫자는 몫이 되고, 일의 자리 숫자는 나머지가 된다
  // 10/ 25 -> 몫은 2 되고 나머지는 5가 된다.
  let count = 0
  for(let i = 0 ; i < arr.length ; i++){
      console.log(arr[i])
      
      if( arr[i] % 10 === day) {
          count++
      }
  }
  return count
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));