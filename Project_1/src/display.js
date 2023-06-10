import { buttonrecovery } from "./button.js";
import { additionalDiv } from "./add_display.js";
import { additionalQuestionDiv } from "./add_display.js";

export const $chatList = document.querySelector("ul");

// 사용자의 질문
let question;

// 화면에 뿌려줄 데이터, 질문들
export let questionData = [];

// 화면에 질문 그려주는 함수
export const printQuestion = async () => {
  if (questionData.length > 0) {
    const li = document.createElement("li");
    li.classList.add("question");
    li.classList.add("hidden");
    questionData.forEach((el) => {
      const span = document.createElement("span");
      span.innerText = el.content;
      li.appendChild(span);
    });
    $chatList.appendChild(li);
    questionData = [];
    question = false;
  }
};

// 화면에 답변 그려주는 함수
export const printAnswer = async (answer) => {
  let li = document.createElement("li");
  li.setAttribute(
    "class",
    "answer shadow-md rounded border-2 border-indigo-200 text-xl w-1/2"
  );
  li.innerText = answer;
  $chatList.appendChild(li);

  // 추가 질문을 담는 div가 없을 경우에만 생성
  if (!additionalQuestionDiv) {
    additionalDiv();
  }
  // 버튼을 전송버튼으로 돌려주는 함수
  buttonrecovery();
};
