import axios from "axios";

const baseUrl = "https://onboarding-be.herokuapp.com/onboarding/v1/signup";

export default function signupPost(inputData) {
  let postData = {};
  postData.email = inputData.email;
  postData.password = inputData.password;
  axios({
    method: "post",
    url: baseUrl,
    data: postData,
  });
}
