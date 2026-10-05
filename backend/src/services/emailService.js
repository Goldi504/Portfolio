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

const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  try {
    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    if (!process.env.EMAIL_USER) {
      throw new Error("EMAIL_USER is not configured");
    }

    if (!process.env.FROM_EMAIL) {
      throw new Error("FROM_EMAIL is not configured");
    }

    console.log("📧 Sending portfolio contact email...");

    const { data, error } = await resend.emails.send({
      // Use your VERIFIED domain email
      from: `Goldi Portfolio <${process.env.FROM_EMAIL}>`,

      // Your receiving Gmail
      to: [process.env.EMAIL_USER],

      // When you click Reply, reply directly to the visitor
      replyTo: email,

      subject: subject
        ? `Portfolio Contact: ${subject}`
        : `New Portfolio Contact from ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Portfolio Message</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f4f4f5;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e5e7eb;
              "
            >

              <!-- Header -->
              <div
                style="
                  background: #111827;
                  padding: 28px;
                  text-align: center;
                "
              >
                <h1
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 24px;
                  "
                >
                  New Portfolio Message
                </h1>

                <p
                  style="
                    margin: 8px 0 0;
                    color: #9ca3af;
                    font-size: 14px;
                  "
                >
                  Someone contacted you through your portfolio
                </p>
              </div>

              <!-- Content -->
              <div style="padding: 30px;">

                <h2
                  style="
                    margin-top: 0;
                    color: #111827;
                    font-size: 20px;
                  "
                >
                  Contact Details
                </h2>

                <table
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 15px;
                  "
                >
                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-weight: bold;
                        color: #374151;
                        width: 100px;
                      "
                    >
                      Name
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        color: #111827;
                      "
                    >
                      ${escapeHtml(name)}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-weight: bold;
                        color: #374151;
                      "
                    >
                      Email
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        color: #111827;
                      "
                    >
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-weight: bold;
                        color: #374151;
                      "
                    >
                      Subject
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        color: #111827;
                      "
                    >
                      ${escapeHtml(subject || "No subject")}
                    </td>
                  </tr>
                </table>

                <!-- Message -->
                <div
                  style="
                    margin-top: 25px;
                    padding: 20px;
                    background: #f9fafb;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                  "
                >
                  <h3
                    style="
                      margin-top: 0;
                      color: #111827;
                      font-size: 16px;
                    "
                  >
                    Message
                  </h3>

                  <p
                    style="
                      margin-bottom: 0;
                      color: #374151;
                      line-height: 1.7;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(message)}
                  </p>
                </div>

                <!-- Reply button -->
                <div
                  style="
                    text-align: center;
                    margin-top: 30px;
                  "
                >
                  <a
                    href="mailto:${escapeHtml(email)}"
                    style="
                      display: inline-block;
                      padding: 12px 24px;
                      background: #111827;
                      color: #ffffff;
                      text-decoration: none;
                      border-radius: 6px;
                      font-weight: bold;
                    "
                  >
                    Reply to ${escapeHtml(name)}
                  </a>
                </div>

              </div>

              <!-- Footer -->
              <div
                style="
                  padding: 20px;
                  text-align: center;
                  background: #f9fafb;
                  border-top: 1px solid #e5e7eb;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #6b7280;
                    font-size: 13px;
                  "
                >
                  This email was sent from your portfolio contact form.
                </p>

                <p
                  style="
                    margin: 8px 0 0;
                    color: #9ca3af;
                    font-size: 12px;
                  "
                >
                  Goldi Kumari · MERN Stack Developer
                </p>
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("❌ Resend email error:", error);
      throw new Error(error.message || "Failed to send email");
    }

    console.log("✅ Email sent successfully");
    console.log("📨 Message ID:", data?.id);

    return data;

  } catch (error) {
    console.error("❌ Email sending failed:");
    console.error(error);

    throw error;
  }
};


/**
 * Escape HTML characters to prevent HTML injection
 */
const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};


module.exports = {
  sendContactEmail,
};