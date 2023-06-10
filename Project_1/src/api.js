import { printAnswer } from "./display.js";
import { data } from "./data.js";

// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// api 요청보내는 함수
export const apiPost = async () => {
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
