import { cuisineType } from "./radio.js";
const API_KEY = config.apikey;
// kakao img api
// 이미지 삽입 함수
export function kakaoImgApiInsert() {
  const foodType = cuisineType;
  let page;

  // 조건문 분기를 이용하여 foodType 값에 따라 page 값을 설정
  if (foodType === "한식") {
    page = 1;
  } else if (foodType === "일식요리") {
    page = 2;
  } else if (foodType === "중식") {
    page = 14;
  } else if (foodType === "양식요리") {
    page = 2;
  } else {
    page = 1;
  }
  //https://developers.kakao.com/tool/rest-api/open/get/v2-search-image
  $.ajax({
    type: "GET",
    url: "https://dapi.kakao.com/v2/search/image",
    headers: {
      Authorization: `${API_KEY}`,
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
