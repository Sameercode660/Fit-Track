import nodemailer from 'nodemailer';

type OtpMailProps = {
  customerEmail: string;
  customerName: string;
  otp: string;
};

export const sendOtpMail = async ({
  customerEmail,
  customerName,
  otp,
}: OtpMailProps) => {
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
    subject: 'Your OTP for Verification',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; text-align: center;">
          <h2 style="color: #4CAF50;">Hello ${customerName},</h2>
          <p>Use the following OTP to complete your verification:</p>
          <div style="font-size: 24px; font-weight: bold; color: #4CAF50; margin: 20px 0;">
            ${otp}
          </div>
          <p>This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>
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
    console.log('OTP email sent successfully!');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Failed to send OTP email.');
  }
};

// Function to generate a 6-digit OTP
export const generateOtp = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};