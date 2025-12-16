/**
 * 미션1. DOM API
index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.
DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.
*/

document.addEventListener("DOMContentLoaded", () => {
  const $text = document.getElementById("text");
  const $changeTextBtn = document.getElementById("changeTextButton");

  if (!$text || !$changeTextBtn) {
    console.error("필요한 요소를 찾을 수 없습니다.");
    return;
  }

  const originalText = $text.textContent;
  let isChanged = false;

  function changeText() {
    if (isChanged) {
      $text.textContent = originalText;
      $changeTextBtn.textContent = "텍스트 변경";
    } else {
      $text.textContent = "버튼이 클릭되었습니다!";
      $changeTextBtn.textContent = "원래대로";
    }
    isChanged = !isChanged;
  }

  $changeTextBtn.addEventListener("click", changeText);
});
