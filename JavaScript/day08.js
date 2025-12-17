/**
 * 미션1. 자바스크립트의 this

다음 코드에서 regularFunction과 arrowFunction이 있습니다. 두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!)

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? => 여기서 this는 obj를 가리킵니다. (메서드로 호출되었기 때문)
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요? => 여기서 this는 전역 객체를 가리킵니다. 화살표 함수는 상위 스코프의 this를 상속받기 때문입니다.
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요 => 화살표 함수는 obj가 아닌 전역 객체를 가리킴)
*/

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value);
  },
  arrowFunction: function () {
    console.log(this.value);
  },
};

obj.regularFunction();
obj.arrowFunction();
