// // const nodemailer = require("nodemailer");

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",

// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASSWORD,
// //   },
// // });

// // const sendContactEmail = async ({
// //   name,
// //   email,
// //   subject,
// //   message,
// // }) => {
// //   const mailOptions = {
// //     from: process.env.EMAIL_USER,

// //     to: process.env.EMAIL_USER,

// //     replyTo: email,

// //     subject: subject
// //       ? `Portfolio Contact: ${subject}`
// //       : `New Portfolio Contact from ${name}`,

// //     html: `
// //       <div style="
// //         font-family: Arial, sans-serif;
// //         max-width: 600px;
// //         margin: auto;
// //         padding: 30px;
// //         background: #f9f8f4;
// //         border-radius: 12px;
// //       ">

// //         <h2 style="color: #164b36;">
// //           New Portfolio Message
// //         </h2>

// //         <div style="
// //           background: #ffffff;
// //           padding: 20px;
// //           border-radius: 10px;
// //         ">

// //           <p>
// //             <strong>Name:</strong>
// //             ${name}
// //           </p>

// //           <p>
// //             <strong>Email:</strong>
// //             ${email}
// //           </p>

// //           <p>
// //             <strong>Subject:</strong>
// //             ${subject || "No subject"}
// //           </p>

// //           <hr />

// //           <p>
// //             <strong>Message:</strong>
// //           </p>

// //           <p style="line-height: 1.6;">
// //             ${message}
// //           </p>

// //         </div>

// //         <p style="
// //           color: #666;
// //           font-size: 13px;
// //           margin-top: 20px;
// //         ">
// //           This message was sent from your portfolio contact form.
// //         </p>

// //       </div>
// //     `,
// //   };

// //   const info = await transporter.sendMail(mailOptions);

// //   return info;
// // };

// // module.exports = {
// //   sendContactEmail,
// // };






// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",

//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// const sendContactEmail = async ({
//   name,
//   email,
//   subject,
//   message,
// }) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_USER,
//     replyTo: email,

//     subject: subject
//       ? `Portfolio Contact: ${subject}`
//       : `New Portfolio Contact from ${name}`,

//     html: `
//       <h2>New Portfolio Message</h2>

//       <p><strong>Name:</strong> ${name}</p>

//       <p><strong>Email:</strong> ${email}</p>

//       <p><strong>Subject:</strong> ${subject || "No subject"}</p>

//       <hr />

//       <p><strong>Message:</strong></p>

//       <p>${message}</p>
//     `,
//   };

//   const info = await transporter.sendMail(mailOptions);

//   return info;
// };

// module.exports = {
//   sendContactEmail,
// };

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// Send contact email
const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER is not configured");
    }

    console.log("📧 Sending portfolio contact email...");

    const { data, error } = await resend.emails.send({
      // from: "Portfolio <onboarding@resend.dev>",
      from: "Goldi Portfolio <contact@goldikumari.com>",

      // Your Gmail address
      to: [process.env.EMAIL_USER],

      subject: subject
        ? `Portfolio Contact: ${subject}`
        : `New Portfolio Contact from ${name}`,

      replyTo: email,

      html: `
        <!DOCTYPE html>

        <html>
          <head>
            <meta charset="UTF-8" />
            <title>Portfolio Contact</title>
          </head>

          <body style="
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
          ">

            <div style="
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            ">

              <!-- Header -->

              <div style="
                background-color: #164b36;
                padding: 25px;
                text-align: center;
              ">

                <h2 style="
                  margin: 0;
                  color: #ffffff;
                ">
                  New Portfolio Message
                </h2>

              </div>


              <!-- Content -->

              <div style="
                padding: 30px;
              ">

                <p style="
                  font-size: 16px;
                  color: #333333;
                ">
                  You received a new message from your portfolio.
                </p>


                <p>
                  <strong>Name:</strong>
                  ${name}
                </p>


                <p>
                  <strong>Email:</strong>
                  ${email}
                </p>


                <p>
                  <strong>Subject:</strong>
                  ${subject || "No subject"}
                </p>


                <hr style="
                  border: none;
                  border-top: 1px solid #eeeeee;
                  margin: 25px 0;
                " />


                <p>
                  <strong>Message:</strong>
                </p>


                <div style="
                  background-color: #f9f9f9;
                  padding: 15px;
                  border-radius: 8px;
                  line-height: 1.6;
                  color: #333333;
                ">
                  ${message}
                </div>

              </div>


              <!-- Footer -->

              <div style="
                padding: 20px 30px;
                background-color: #f8f8f8;
                color: #777777;
                font-size: 13px;
              ">

                This message was sent from your portfolio contact form.

              </div>

            </div>

          </body>
        </html>
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("❌ Resend email error:", error);

      throw new Error(
        error.message || "Failed to send email"
      );
    }

    console.log("✅ Email sent successfully");

    console.log("Message ID:", data?.id);

    return data;

  } catch (error) {
    console.error("❌ Email sending failed:");
    console.error(error);

    throw error;
  }
};


module.exports = {
  sendContactEmail,
};