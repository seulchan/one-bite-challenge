/**
1. Unknown
의미: 알 수 없는 타입, 모든 타입을 받을 수 있지만 타입 검사 후에만 사용 가능
특징: Any보다 안전한 버전, 타입 좁히기(narrowing) 필요
사용 예시:

let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // 이 부분에서만 string으로 사용 가능
}

2. Never
의미: 절대 발생하지 않는 값의 타입
특징: 항상 예외를 발생시키거나 무한 루프를 도는 함수의 반환 타입
사용 예시:

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while(true) {}
}

3. Void
의미: 아무런 값을 반환하지 않는 함수의 반환 타입
특징: undefined만 할당 가능, 주로 반환값이 없는 함수에 사용
사용 예시:

function log(message: string): void {
  console.log(message);
  // return 문이 없거나 return; 만 있음
}

4. Any
의미: 모든 타입을 허용하는 타입
특징: 타입 검사를 우회, TypeScript의 타입 시스템을 비활성화
사용 예시:

let value: any = 123;
value = "hello";    // OK
value.someMethod(); // 컴파일 에러 없음 (실행 시 에러 가능성)
 */
