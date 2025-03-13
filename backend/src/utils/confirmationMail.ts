import nodemailer from 'nodemailer';

type ThankYouMailProps = {
  customerEmail: string;
  customerName: string;
};

export const sendThankYouMail = async ({
  customerEmail,
  customerName,
}: ThankYouMailProps) => {
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
    subject: 'Welcome to Fit-Track!',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; text-align: center;">
          <h2 style="color: #4CAF50;">Welcome, ${customerName}!</h2>
          <p>Thank you for signing up for <strong>Fit-Track</strong>.</p>
          <p>We’re excited to have you on board and help you track your fitness goals effectively.</p>
          <p>Start exploring features designed to keep you motivated and on track!</p>
          <div style="margin: 20px;">
            <a href="https://fit-track.com/login" 
               style="text-decoration: none; color: white; background-color: #4CAF50; padding: 10px 20px; border-radius: 5px;">
              Login to Your Account
            </a>
          </div>
          <p>If you have any questions, feel free to reach out to our support team.</p>
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
    console.log('Thank You email sent successfully!');
  } catch (error) {
    console.error('Error sending Thank You email:', error);
    throw new Error('Failed to send Thank You email.');
  }
};
