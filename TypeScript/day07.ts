/*
[ 문제1 소개 ]
다음 요구사항을 만족하도록 introduce 함수의 매개변수의 타입을 정의하세요
- name 매개변수는 String 타입이며, "이정환" 이라는 기본값이 설정됩니다.
- tall 매개변수는 Number 타입이며, 선택적 매개변수 입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
function introduce(name = "이정환", tall?: number) {
  if (!tall) {
    console.log(`안녕하세요 ${name}입니다!`);
  } else {
    console.log(`안녕하세요 ${name}입니다. 키는 ${tall}입니다`);
  }
}

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
introduce();
introduce("이정환");
introduce("이정환", 175);

/*
[ 문제2 소개 ]
함수 타입 표현식을 이용해 다음 요구사항을 만족하는 타입 Func를 정의하세요
- 2개의 매개변수 a와 b를 받습니다.
- 매개변수 a는 Number, b는 String 타입입니다.
- 반환값 타입은 boolean 입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Func = (a: number, b: string) => boolean;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const func: Func = (a, b) => {
  console.log(a.toFixed());
  console.log(b.toLocaleLowerCase());
  return true;
};

import { Equal, Expect, NotAny } from "@type-challenges/utils";

type TestCases = [
  Expect<NotAny<Func>>,
  Expect<Equal<Parameters<Func>[0], number>>,
  Expect<Equal<Parameters<Func>[1], string>>,
];
