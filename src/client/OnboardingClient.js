const baseUrl = "https://onboarding-be.herokuapp.com/onboarding/v1/signup";

export default function signupPost(inputData, path) {
  let postData = {};
  postData.email = inputData.email;
  postData.password = inputData.password;
  fetch(baseUrl, {
    method: "POST", // or 'PUT'
    mode: "cors",
    supportHeaderParams: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
