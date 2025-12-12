/*
[ 문제1 소개 ]
아래 코드의 4개의 변수 a,b,c,d의 타입은 각각 어떻게 추론될까요?  
- 변수 a의 추론 결과를 A 타입에 정의해주세요
- 변수 b의 추론 결과를 B 타입에 정의해주세요
- 변수 c의 추론 결과를 C 타입에 정의해주세요
- 변수 d의 추론 결과를 D 타입에 정의해주세요
- 변수 e의 추론 결과를 E 타입에 정의해주세요
*/

let a = 10;
const b = 20;
const c = [1, 2];
const d = [1, "hello", true];
const e = [1, 2, 3] as const;

/* [Quiz] 변수 a의 타입은 무엇으로 추론될까요? */
type A = number;

/* [Quiz] 변수 b의 타입은 무엇으로 추론될까요? */
type B = 20;

/* [Quiz] 변수 c의 타입은 무엇으로 추론될까요? */
type C = number[];

/* [Quiz] 변수 d의 타입은 무엇으로 추론될까요? */
type D = (number | string | boolean)[];

/* [Quiz] 변수 e의 타입은 무엇으로 추론될까요? */
type E = [1, 2, 3];

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<A, number>>,
  Expect<Equal<B, 20>>,
  Expect<Equal<C, number[]>>,
  Expect<Equal<D, (number | string | boolean)[]>>,
  Expect<Equal<E, [1, 2, 3]>>,
];

/*
[ 문제2 소개 ]
다음 요구사항을 만족하는 Animal, DogCat(개냥이) 타입을 완성하세요
- Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
- DogCat 타입은 Dog이자 Cat입니다.
*/

/* [Quiz] 아래의 코드를 완성해 오류를 제거하세요 */
type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

type Animal = Dog | Cat;
type DogCat = Dog & Cat;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const animals: Animal[] = [
  {
    name: "토뭉이",
    color: "brown",
  },
  {
    name: "쨔미",
    age: 10,
  },
];

const dogCat: DogCat = {
  name: "개냥이",
  age: 2,
  color: "치즈색",
};
