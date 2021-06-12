import emailjs from "emailjs-com";

export default function sendEmail(data) {
  emailjs
    .send(
      "service_l73aj3n",
      "template_6sboo1f",
      data,
      "user_sVYHHnz58nCpik74KnF7l"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
