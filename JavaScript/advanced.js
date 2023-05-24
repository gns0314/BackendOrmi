// 전체 product의 갯수와
// 전체 가격의 평균을 구해주세요.

let total = 0;
let avg = 0;
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    total = data.length;
    avg = data.map((v) => v["price"]).reduce((a, c) => a + c, 0) / total;
    console.log("전체 product의 갯수 :", total);
    console.log("전체 가격의 평균 :", avg);
  });
