// export default function (req, res) {
//   require("dotenv").config();

//   let nodemailer = require("nodemailer");
//   const transporter = nodemailer.createTransport({
//     port: "smtp.mailtrap.io",
//     host: 2525,
//     auth: {
//       user: "4b6b6b0d99cefb",
//       pass: "349fb7381a8277",
//     },
//     secure: true,
//   });

//   const mailData = {
//     from: process.env.FROM,
//     to: "m.krasnansky.fafo@gmail.com",
//     subject: `Message From ${req.body.name}`,
//     text:
//       req.body.message +
//       " | Sent from: " +
//       req.body.email +
//       " | Subject is: " +
//       req.body.subject,
//     html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
//   };

//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });

//   console.log(req.body);
//   res.send("success");
// }
