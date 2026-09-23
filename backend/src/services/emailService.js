const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
}) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,

    to: process.env.EMAIL_USER,

    replyTo: email,

    subject: subject
      ? `Portfolio Contact: ${subject}`
      : `New Portfolio Contact from ${name}`,

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 30px;
        background: #f9f8f4;
        border-radius: 12px;
      ">

        <h2 style="color: #164b36;">
          New Portfolio Message
        </h2>

        <div style="
          background: #ffffff;
          padding: 20px;
          border-radius: 10px;
        ">

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

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p style="line-height: 1.6;">
            ${message}
          </p>

        </div>

        <p style="
          color: #666;
          font-size: 13px;
          margin-top: 20px;
        ">
          This message was sent from your portfolio contact form.
        </p>

      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
};

module.exports = {
  sendContactEmail,
};