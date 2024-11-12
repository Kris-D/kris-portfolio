import emailjs from '@emailjs/browser';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

if (!publicKey || !serviceId || !templateId) {
  console.error('EmailJS configuration is missing. Please check your environment variables.');
}

// Initialize EmailJS with error handling
try {
  emailjs.init(publicKey || '');
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

interface EmailParams {
  from_name: string;
  reply_to: string;
  message: string;
}

export const sendEmail = async (form: HTMLFormElement): Promise<void> => {
  if (!publicKey || !serviceId || !templateId) {
    throw new Error('EmailJS configuration is missing');
  }

  try {
    const result = await emailjs.sendForm(serviceId, templateId, form, publicKey);
    if (result.status !== 200) {
      throw new Error(`EmailJS returned status ${result.status}`);
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};