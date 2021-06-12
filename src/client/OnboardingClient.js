const baseUrl = "https://onboarding-be.herokuapp.com/onboarding/v1/signup";

export default function signupPost(data, path) {
  fetch(baseUrl + path, {
    method: "POST", // or 'PUT'
    mode: "cors",
    supportHeaderParams: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
