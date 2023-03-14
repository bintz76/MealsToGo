import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
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

export const restaurantsTransform = (result) => {
  // const newResult = camelize(result);
  // const mappedResult = result.map((restaurant) => {
  //   return {
  //     // ...restaurant,
  //     isOpenNow: restaurant,
  //   };
  // });
  // console.log(result);
  const mappedResult = result.results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpennow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};
