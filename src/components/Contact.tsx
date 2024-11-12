import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  const handleSuccess = () => {
    toast.success('Message sent successfully!');
  };

  const handleError = (error: Error) => {
    console.error('Contact form error:', error);
    toast.error(error.message);
  };

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">dunkwukris@gmail.com</p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (234) 567-8900</p>
              </div>
            </div> */}

            {/* <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
              </div>
            </div> */}

            <a
              href="https://wa.me/2349056288890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 transition-colors">
                  Chat with me on WhatsApp
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm onSuccess={handleSuccess} onError={handleError} />
          </motion.div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
};