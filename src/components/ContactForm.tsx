import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { sendEmail } from '../lib/emailjs';

interface ContactFormProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      await sendEmail(formRef.current);
      onSuccess();
      formRef.current.reset();
    } catch (error) {
      onError(error instanceof Error ? error : new Error('Failed to send message'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-lg"
    >
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="reply_to" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="reply_to"
          name="reply_to"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
};