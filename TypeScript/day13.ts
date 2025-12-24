/*
[ 문제1 소개 ]
다음 요구사항을 만족하는 IsProductKey<T> 타입을 완성하세요
- IsProductKey 타입은 조건부 타입으로 다음 조건에 따라 각각 다른 타입으로 결정됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나일 경우 결과는 true 타입이 됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나가 아닐 경우 결과는 false 타입이 됩니다.
  - 예를 들면 다음과 같습니다.
    - ex) IsProductKey<"id"> 타입은 true 타입이 됩니다.
    - ex) IsProductKey<"author"> 타입은 false 타입이 됩니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type IsProductKey<T> = T extends keyof Product ? true : false;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<IsProductKey<"id">, true>>,
  Expect<Equal<IsProductKey<"name">, true>>,
  Expect<Equal<IsProductKey<"author">, false>>,
  Expect<Equal<IsProductKey<"winterlood">, false>>,
];

/*
[ 문제2 소개 ]
다음 조건을 만족하는 Extract<T, U> 타입을 구현하세요
- Extract<T, U> 타입은 T로부터 U만 추출하는 타입입니다.
  - ex) Extract<string | boolean, boolean>은 boolean 타입이 됩니다.
  - ex) Extract<number | string, string>은 string 타입이 됩니다.

(힌트💡 강의 중 직접 구현하는 Exclude 타입의 반대라고 생각해보세요!)
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type Extract<T, U> = T extends U ? T : never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Equal, Expect } from "@type-challenges/utils";

type TestCases = [
  Expect<Equal<Extract<string | number, string>, string>>,
  Expect<Equal<Extract<string | number, number>, number>>,
];

/*
[ 문제3 소개 ]
배열 타입의 요소를 추출하는 InferArrayType<T> 타입을 구현하세요
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type InferArrayType<T> = any;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Expect, Equal } from "@type-challenges/utils";

const arr1 = [1, 2, 3];
const arr2 = ["hello", "myname", "winterlood"];
const arr3 = [1, true, "hi"];

type TestCases = [
  Expect<Equal<InferArrayType<typeof arr1>, number>>,
  Expect<Equal<InferArrayType<typeof arr2>, string>>,
  Expect<Equal<InferArrayType<typeof arr3>, number | string | boolean>>,
];

/*
[ 문제3 소개 ]
배열 타입의 요소를 추출하는 InferArrayType<T> 타입을 구현하세요
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type InferArrayType<T> = T extends (infer R)[] ? R : never;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
import { Expect, Equal } from "@type-challenges/utils";

const arr1 = [1, 2, 3];
const arr2 = ["hello", "myname", "winterlood"];
const arr3 = [1, true, "hi"];

type TestCases = [
  Expect<Equal<InferArrayType<typeof arr1>, number>>,
  Expect<Equal<InferArrayType<typeof arr2>, string>>,
  Expect<Equal<InferArrayType<typeof arr3>, number | string | boolean>>,
];
