import { buttonchange } from "./src/button.js";
import { clear } from "./src/clear.js";
import { kakaoImgApiInsert } from "./src/img.js";
import { data } from "./src/data.js";
import { printQuestion, $chatList, questionData } from "./src/display.js";
import { apiPost } from "./src/api.js";
import { recipe, additional } from "./src/add_display.js";
import { cuisineType } from "./src/radio.js";

export const $form = document.querySelector("form");
const $input = document.querySelector("input");

// 사용자의 질문
let question;

// input에 입력된 값을 저장할 변수
let ingredient;

// 추천받을 가지수 저장할 변수
let num;

// input에 입력된 질문 받아오는 함수
$input.addEventListener("input", (e) => {
  question = e.target.value;
});

// 사용자의 질문을 객체를 만들어서 push
const sendQuestion = (question) => {
  if (question) {
    data.push({
      role: "user",
      content: question,
    });
    questionData.push({
      role: "user",
      content: question,
    });
  }
};

$form.addEventListener("submit", (e) => {
  if ($chatList.querySelectorAll(".answer").length >= 2) {
    // 답변 리스트 초기화 여부를 묻는 확인 메시지
    const confirmation = confirm("답변이 가득 찼습니다. 초기화 하시겠습니까?");

    if (confirmation) {
      clear(); // 초기화 함수 호출
    }
  } else {
    buttonchange();
    // 추가 질문이 있는 경우

    ingredient = $input.value;
    num = document.getElementById("num").value;
    if (ingredient) {
      // 재료에 대한 입력이 있는경우
      sendQuestion(
        `냉장고에 ${ingredient}가 있고 나는 ${cuisineType}을 만들고 싶어 ${ingredient}로 만들 수 있는 ${cuisineType}을 ${num}가지 메뉴만추천해줘.`
      );
    } else if (
      !ingredient &&
      $chatList.querySelectorAll(".answer").length < 1
    ) {
      // 재료에 대한 입력이 없는 경우
      sendQuestion(
        `가정집에서 간단하게 만들수있는 ${cuisineType}을 ${num}가지 메뉴만추천해줘`
      );
    } else if (additional) {
      // 추가 질문이 있는경우
      recipe();
      sendQuestion(
        `너가 위에서 추천해준 ${additional}에 대한 자세한 레시피를 알고싶어`
      );
    } else if (!additional) {
      // 추가 질문이 없는 경우
      recipe();
      sendQuestion(
        `너가 위에서 추천해준${num}가지 메뉴중에 너가 메뉴 한개 추천해주고 그 추천해주는 음식에 대한 자세한 레시피를 알고싶어`
      );
    }
    $input.value = null;
    printQuestion();
    apiPost();
  }
  e.preventDefault(); // submit 이벤트의 기본 동작 막기
});

// input 값이 변경될 때 kakaoImgApiInsert 함수 호출
$form.addEventListener("submit", function handleFormSubmit(event) {
  event.preventDefault(); // 폼 제출 기본 동작 막기
  kakaoImgApiInsert();
  $form.removeEventListener("submit", handleFormSubmit); // 이벤트 리스너 제거
});
