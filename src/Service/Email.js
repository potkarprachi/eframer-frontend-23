import emailjs from "emailjs-com";
// 12/03/2023 install dependency=> npm install emailjs-com --save

export function sendEmail(fname, femail) {
  const templateParams = {
    name: fname,
    email: femail,
  };
  console.log(templateParams);

  emailjs
    .send(
      "service_i1yokil",
      "template_zxue2gb",
      templateParams,
      "jxuAuq3psGJl62n3y"
    )
    .then(
      (response) => {
        console.log("Email sent!", response.status, response.text);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
}
