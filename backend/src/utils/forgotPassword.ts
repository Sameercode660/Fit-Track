import nodemailer from 'nodemailer';

type ForgotPasswordMailProps = {
  customerEmail: string;
  customerName: string;
  password: string; // The user's existing password
};

export const sendForgotPasswordMail = async ({
  customerEmail,
  customerName,
  password,
}: ForgotPasswordMailProps) => {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
      user: 'privatething789736@gmail.com', // Your email address
      pass: 'ylpa stve wvnu tsly', // Your email password or app-specific password
    },
  });

  // Mail content
  const mailOptions = {
    from: 'Fit-Track <privatething789736@gmail.com>', // Sender email
    to: customerEmail, // Receiver email
    subject: 'Password Recovery - Fit-Track',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; text-align: center;">
          <h2 style="color: #FF5733;">Hello, ${customerName}!</h2>
          <p>You recently requested to recover your password for <strong>Fit-Track</strong>.</p>
          <p>Your password is:</p>
          <div style="margin: 20px; font-size: 18px; font-weight: bold; color: #333;">
            ${password}
          </div>
          <p>For security reasons, we recommend changing your password immediately after logging in.</p>
          <div style="margin: 20px;">
            <a href="https://fit-track.com/login" 
               style="text-decoration: none; color: white; background-color: #FF5733; padding: 10px 20px; border-radius: 5px;">
              Login to Your Account
            </a>
          </div>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: gray; text-align: center;">
          This is an automated email. Please do not reply.
        </p>
      </div>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Forgot Password email sent successfully!');
  } catch (error) {
    console.error('Error sending Forgot Password email:', error);
    throw new Error('Failed to send Forgot Password email.');
  }
};
