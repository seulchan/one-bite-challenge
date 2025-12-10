/**
 * 미션1. 함수 스코프와 호이스팅의 상호작용
 * 다음 코드를 실행했을 때 콘솔에 찍히는 값을 순서대로 적어보세요.
 * 답 ) undefined, 2, 1
 * let x = 1;
 * function test() {
 *   console.log(x);
 *   var x = 2;
 *   console.log(x);
 * }
 * test();
 * console.log(x);
 */

/**
 * 미션2. 객체 메서드와 화살표 함수 사용하기
 * 다음 조건을 만족하는 코드를 직접 작성해보세요.
 * person 객체를 만든다.
 * name 속성에 "효빈"을 저장한다.
 * sayName이라는 일반 함수 메서드를 만든다.
 * run이라는 화살표 함수를 만든다.
 * run()을 호출하면 person.sayName()을 실행해야한다.
 */

person = {
  name: "효빈",
  sayName: function () {
    console.log(`I am ${this.name}.`);
  },
  run: () => {
    person.sayName();
  },
};

person.run();
