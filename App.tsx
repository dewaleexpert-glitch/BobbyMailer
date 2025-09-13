import React, { useState } from 'react';
import { useEmailProcessor } from './hooks/useEmailProcessor';
import { ProcessedEmail } from './types';
import { InputCard } from './components/InputCard';
import { PreviewCard } from './components/PreviewCard';
import { EmailQueue } from './components/EmailQueue';

const App: React.FC = () => {
  const [emailsRaw, setEmailsRaw] = useState('bobbylade212@gmail.com, support@bobbyladex.com');
  const [subjectTemplate, setSubjectTemplate] = useState('Happy Christmas');
  const [bodyTemplate, setBodyTemplate] = useState('Dear ____,\n\nWe wish you a Happy Christmas!\n\nBest,\nBobby');
  const processedEmails: ProcessedEmail[] = useEmailProcessor(emailsRaw, subjectTemplate, bodyTemplate);

  const placeholder = '____';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-600 dark:text-brand-400 tracking-tight">
            Bobby Sender
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Personalize and send emails in a flash.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <InputCard title="1. Paste Email List" description="Separate emails with commas, spaces, or new lines.">
              <textarea
                value={emailsRaw}
                onChange={(e) => setEmailsRaw(e.target.value)}
                rows={5}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                placeholder="email1@example.com, email2@example.com..."
              />
            </InputCard>

            <InputCard title="2. Set Subject Template" description={`The recipient's name will be added as a prefix.`}>
              <input
                type="text"
                value={subjectTemplate}
                onChange={(e) => setSubjectTemplate(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                placeholder="A special offer for you"
              />
            </InputCard>

            <InputCard title="3. Create Body Template" description={`Use "${placeholder}" as the placeholder for the recipient's name.`}>
              <textarea
                value={bodyTemplate}
                onChange={(e) => setBodyTemplate(e.target.value)}
                rows={8}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition font-mono text-sm"
                placeholder={`Hello ${placeholder},\n\nThis is a special message for you.`}
              />
            </InputCard>
          </div>

          <div className="space-y-8">
            <PreviewCard email={processedEmails[0]} />
            <EmailQueue emails={processedEmails} />
          </div>
        </main>

        <footer className="text-center mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This app is designed by Bobola saheed adewale with my email <a href="mailto:bobbyladex212@gmail.com" className="font-medium text-brand-600 dark:text-brand-400 hover:underline">bobbyladex212@gmail.com</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;