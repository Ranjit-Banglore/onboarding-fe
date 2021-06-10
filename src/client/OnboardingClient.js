export function PostRequest(url, data) {
  fetch(url, {
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
      //
      history.push("/step_1/" + data.name);
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
