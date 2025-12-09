/**
 * 미션1. switch case문 작성하기
사용자가 입력한 나이가 18세 이상이면 "성인입니다.", 그 외에는 "미성년자입니다."라고 출력하는 함수를 만들어보세요.
 */
function checkAdult(age) {
  // 입력값 검증
  if (typeof age !== "number" || isNaN(age) || age < 0) {
    console.log("유효하지 않은 나이입니다.");
    return;
  }

  switch (age >= 18) {
    case true:
      console.log("성인입니다.");
      break;
    case false:
      console.log("미성년자입니다.");
      break;
  }
}

/**
 * 미션2. 간단한 연산자 선택기
두 숫자와 연산자 기호 중 하나("+", "-", "*", "/")를 전달하면, 해당 연산의 결과를 출력하는 함수를 switch문을 사용해 만들어보세요.
 */
function calculate(num1, num2, operator) {
  // 입력값 검증
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    console.log("유효하지 않은 숫자입니다.");
    return;
  }

  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      if (num2 === 0) {
        console.log("0으로 나눌 수 없습니다.");
      } else {
        console.log(num1 / num2);
      }
      break;
    default:
      console.log(
        "유효하지 않은 연산자입니다. (+, -, *, / 중 하나를 사용하세요)",
      );
      break;
  }
}

// 테스트 코드
console.log("=== 미션1 테스트 ===");
checkAdult(20);
checkAdult(17);
checkAdult(-5);
checkAdult("abc");

console.log("\n=== 미션2 테스트 ===");
calculate(5, 3, "+");
calculate(10, 4, "-");
calculate(6, 7, "*");
calculate(15, 3, "/");
calculate(10, 0, "/");
calculate(5, 2, "%");
calculate("a", "b", "+");
