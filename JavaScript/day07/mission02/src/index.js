/**
 * 미션2. DOM API & Select Tag

id가 app인 div요소의 내부에 아래의 코드를을 넣어주세요.
(단, createElement, appendChild를 사용해서 생성해주세요,
select 태그의 값을 변경할 때 마다 변경된 값을 출력하는 기능도 작성해주세요)
 */

const $app = document.getElementById("app");

const $label = document.createElement("label");
$label.textContent = "기술 스택 선택: ";
$label.setAttribute("for", "skills");

const $select = document.createElement("select");
$select.id = "skills";
$select.required = true;

const skills = [
  { value: "", text: "선택하세요" },
  { value: "javascript", text: "JavaScript" },
  { value: "next", text: "Next.js" },
  { value: "react", text: "React.js" },
  { value: "typescript", text: "TypeScript" },
];

function createOption(value, text, isPlaceholder = false) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;

  if (isPlaceholder) {
    option.disabled = true;
    option.selected = true;
    option.hidden = true;
  }

  return option;
}

skills.forEach((skill, index) => {
  const option = createOption(skill.value, skill.text, index === 0);
  $select.appendChild(option);
});

const $output = document.createElement("p");
$output.textContent = "선택된 기술: ";

function handleSelectChange(event) {
  const selectedValue = event.target.value;
  const selectedText = event.target.options[event.target.selectedIndex].text;

  console.log("선택된 값:", selectedValue);

  if (selectedValue) {
    $output.textContent = `선택된 기술: ${selectedText}`;
    $output.style.color = "#333";
  } else {
    $output.textContent = "선택된 기술: ";
    $output.style.color = "#999";
  }
}

$app.appendChild($label);
$app.appendChild($select);
$app.appendChild($output);

$select.addEventListener("change", handleSelectChange);
