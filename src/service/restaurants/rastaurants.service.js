import { mocks } from "./mock";

export const restaurantsRequest = (location = "349295,-122.4194155") => {
  // console.log(mocks[location]);
  // 서버와 통신 할 경우에는 비동기적으로 데이터를 받아옴.
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    //만약 mock데이터가 없으면 거부됨. reject반환
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
// .then은 즉시 반환 되는 것이 아닌 언젠간 돌아올 결과를 기다린다는 의미.
restaurantsRequest()
  .then((result) => {
    console.log(result, "지금");
  })
  .catch((error) => {
    console.log("error");
  });
