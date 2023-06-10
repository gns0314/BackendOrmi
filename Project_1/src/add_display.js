import { $form } from "../index.js";

// 추가 질문을 담는 div 생성
export let additionalQuestionDiv;

// 추가 질문 값을 저장할 변수
export let additional;

// 레시피 div 출력 함수
export function recipe() {
  let sub_title = document.querySelector("#sub_title");
  let detail_menu = document.createElement("div");
  detail_menu.setAttribute("class", "w-1/2");

  let detail_title = document.createElement("p");
  detail_title.setAttribute(
    "class",
    "block text-gray-700 text-sm font-bold mb-4 text-xl"
  );
  detail_title.innerText = "레시피";

  detail_menu.appendChild(detail_title);
  sub_title.appendChild(detail_menu);
}

export function additionalDiv() {
  // 상세히 보고싶은 레시피 입력
  let additional_input = document.createElement("input");
  additional_input.addEventListener("input", (e) => {
    additional = e.target.value;
  });
  let label = document.createElement("label");
  label.setAttribute("for", "add");
  label.setAttribute(
    "class",
    "block text-gray-700 text-sm font-bold mb-2 text-xl"
  );
  label.innerText = "상세히 보고싶은 레시피를 적으세요";
  additional_input.setAttribute("type", "text");
  additional_input.setAttribute("name", "add");
  additional_input.setAttribute("id", "add");
  additional_input.setAttribute("placeholder", "ex)2.탕수육");
  additional_input.setAttribute(
    "class",
    "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
  );

  // 추가 질문을 전송할 수 있는 버튼 생성
  let additionalQuestionInput = document.createElement("button");
  additionalQuestionInput.type = "submit";
  additionalQuestionInput.setAttribute(
    "class",
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
  );
  additionalQuestionInput.innerText = "전송";

  // 추가 질문을 담는 div 생성
  additionalQuestionDiv = document.createElement("div");
  additionalQuestionDiv.setAttribute("class", "additional");
  additionalQuestionDiv.appendChild(label);
  additionalQuestionDiv.appendChild(additional_input);
  additionalQuestionDiv.appendChild(additionalQuestionInput);

  $form.appendChild(additionalQuestionDiv);
}
