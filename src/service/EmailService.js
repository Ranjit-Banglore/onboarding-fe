import { Button, Input, TextField } from "@material-ui/core";
import React from "react";
import emailjs from "emailjs-com";

export function sendEmail(e) {
  e.preventDefault();
  const code = Math.floor(Math.random() * 10000);
  console.log(JSON.stringify(e.target.name));

  emailjs
    .send(
      "service_l73aj3n",
      "template_6sboo1f",
      { email: "ranjitkumarkiit@gmail.com", code: "6762" },
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

export default function EmailService() {
  return (
    <div>
      <form onSubmit={sendEmail}>
        <TextField name="email" label="email"></TextField>
        <TextField
          name="code"
          label="code"
          value={Math.floor(Math.random() * 10000)}
        ></TextField>
        <Button type="submit">Click here to send Email</Button>
      </form>
    </div>
  );
}
