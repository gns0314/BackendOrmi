const $form = document.querySelector("form");
const $input = document.querySelector("input");
const $chatList = document.querySelector("ul");

// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 사용자의 질문
let question;

// input에 입력된 값을 저장할 변수
let ingredient;

// 선택된 요리 타입을 저장할 변수
let cuisineType = "한식";

// 추천받을 가지수 저장할 변수
let num;

// 추가 질문 값을 저장할 변수
let additional;

// 질문과 답변 저장
let data = [
  {
    role: "system",
    content: "assistant는 유능한 요리사이다.",
  },
];

// 화면에 뿌려줄 데이터, 질문들
let questionData = [];

// 전역 변수로 추가 질문을 담는 div 생성
let additionalQuestionDiv;

// input에 입력된 질문 받아오는 함수
$input.addEventListener("input", (e) => {
  question = e.target.value;
});

// radio 버튼 변경 이벤트 처리
document.querySelectorAll('input[name="type"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    cuisineType = e.target.value;
  });
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

// 화면에 질문 그려주는 함수
const printQuestion = async () => {
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
const printAnswer = async (answer) => {
  let li = document.createElement("li");
  li.setAttribute("class", "answer border-2 border-indigo-200 text-xl w-1/2");
  li.innerText = answer;
  $chatList.appendChild(li);

  // 추가 질문을 담는 div가 없을 경우에만 생성
  if (!additionalQuestionDiv) {
    // 상세히 보고싶은 레시피 입력
    let input1 = document.createElement("input");
    input1.addEventListener("input", (e) => {
      additional = e.target.value;
    });
    let label = document.createElement("label");
    label.setAttribute("for", "add");
    label.setAttribute(
      "class",
      "block text-gray-700 text-sm font-bold mb-2 text-xl"
    );
    label.innerText = "상세히 보고싶은 레시피를 적으세요";
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "add");
    input1.setAttribute("id", "add");
    input1.setAttribute("placeholder", "ex)2.탕수육");
    input1.setAttribute(
      "class",
      "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
    );

    // 추가 질문을 전송할 수 있는 버튼 생성
    if (!additionalQuestionDiv) {
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
      additionalQuestionDiv.appendChild(input1);
      additionalQuestionDiv.appendChild(additionalQuestionInput);

      $form.appendChild(additionalQuestionDiv);
    }
  }
  // 버튼을 전송버튼으로 돌려주는 함수
  buttonrecovery();
};

// api 요청보내는 함수
const apiPost = async () => {
  const result = await axios({
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });
  try {
    console.log(result.data);
    printAnswer(result.data.choices[0].message.content);
  } catch (err) {
    console.log(err);
  }
};

$form.addEventListener("submit", (e) => {
  if ($chatList.querySelectorAll(".answer").length >= 2) {
    const confirmation = confirm("답변이 가득 찼습니다. 초기화 하시겠습니까?");

    if (confirmation) {
      clear(); // 초기화 함수 호출
    }
  } else {
    buttonchange();
    if (additional) {
      // 추가 질문이 있는 경우
      $input.value = null;
      sendQuestion(
        `너가 위에서 추천해준 ${additional}에 대한 자세한 레시피를 알고싶어`
      );
      // 답변 리스트 초기화 여부를 묻는 확인 메시지
    } else {
      // 추가 질문이 없는 경우
      ingredient = $input.value;
      num = document.getElementById("num").value;
      sendQuestion(
        `냉장고에 ${ingredient}가 있고 나는 ${cuisineType}을 만들고 싶어 ${ingredient}로 만들 수 있는 ${cuisineType}을 ${num}가지 추천해줘.`
      );
    }
    printQuestion();
    apiPost();
  }
  e.preventDefault(); // submit 이벤트의 기본 동작 막기
});

// kakao img api
// input 값이 변경될 때마다 kakaoImgApiInsert 함수 호출
$form.addEventListener("submit", function handleFormSubmit(event) {
  event.preventDefault(); // 폼 제출 기본 동작 막기
  kakaoImgApiInsert();
  $form.removeEventListener("submit", handleFormSubmit); // 이벤트 리스너 제거
});

// 이미지 삽입 함수
function kakaoImgApiInsert() {
  const foodType = cuisineType;
  let page;

  // switch 문을 사용하여 foodType 값에 따라 page 값을 설정
  switch (foodType) {
    case "한식":
      page = 1;
      break;
    case "일식요리":
      page = 3;
      break;
    case "중식":
      page = 15;
      break;
    case "양식요리":
      page = 3;
      break;
    default:
      page = 1;
      break;
  }

  //https://developers.kakao.com/tool/rest-api/open/get/v2-search-image
  $.ajax({
    type: "GET",
    url: "https://dapi.kakao.com/v2/search/image",
    headers: {
      Authorization: "KakaoAK 1ae7763bfd5906ae723a040cd42f2538", // 'KakaoAK 0000000000000000000000000000000000'
    },
    data: {
      query: `${foodType}`,
      sort: "accuracy", //accuracy(정확도순) 또는 recency(최신순)
      page: page, //결과 페이지 번호, 1~50 사이의 값, 기본 값 1
      size: 1, //한 페이지에 보여질 문서 수, 1~80 사이의 값, 기본 값 80
    },
    success: function (jdata) {
      //console.log(jdata);
      $(jdata.documents).each(function (index) {
        $("div#content").append(
          '<img class="w-full h-full" src="' + this.image_url + '"/>'
        );
      });
    },
    error: function (xhr, textStatus) {
      console.log(xhr.responseText);
      console.log("에러");
      return;
    },
  });
}

// 버튼을 로딩 중 상태로 변경 함수
function buttonchange() {
  const submitButton = $form.querySelectorAll("button[type='submit']");
  for (let i = 0; i < submitButton.length; i++) {
    const subBtn = submitButton[i];

    subBtn.disabled = true;
    subBtn.innerHTML = `
       <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
       <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
       </svg>
       Loading...
     `;
  }
}

// 버튼을 원래 상태로 복구 함수
function buttonrecovery() {
  const submitButton = $form.querySelectorAll("button[type='submit']");
  for (let i = 0; i < submitButton.length; i++) {
    const subBtn = submitButton[i];
    subBtn.disabled = false;
    subBtn.innerHTML = "전송";
  }
}

//초기화 함수
function clear() {
  location.reload();
}
