
import React from 'react';
import { ProcessedEmail } from '../types';
import { InputCard } from './InputCard';

interface EmailQueueProps {
  emails: ProcessedEmail[];
}

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-gray-400 group-hover:text-brand-500 transition-colors" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);


export const EmailQueue: React.FC<EmailQueueProps> = ({ emails }) => {
  return (
    <InputCard title="Email Queue" description="Click an email to open it in your default mail client.">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 max-h-96 overflow-y-auto">
        {emails.length > 0 ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {emails.map((email) => (
              <li key={email.id}>
                <a
                  href={email.mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center p-3 text-left w-full hover:bg-brand-50 dark:hover:bg-brand-900/50 rounded-md transition-colors duration-150"
                >
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 mr-3">{email.id}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-brand-800 dark:group-hover:text-brand-200 truncate">
                      {email.originalEmail}
                    </span>
                  </div>
                  <SendIcon />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            <p>Your email queue is empty.</p>
            <p className="text-xs mt-1">Add emails to get started.</p>
          </div>
        )}
      </div>
    </InputCard>
  );
};
