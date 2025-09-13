
import React from 'react';
import { ProcessedEmail } from '../types';
import { InputCard } from './InputCard';

interface PreviewCardProps {
  email: ProcessedEmail | undefined;
}

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const PreviewCard: React.FC<PreviewCardProps> = ({ email }) => {
  return (
    <InputCard title="Live Preview" description="This is what your first email will look like.">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 min-h-[200px] flex flex-col">
        {email ? (
          <>
            <div className="border-b border-gray-300 dark:border-gray-600 pb-3 mb-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">To: {email.originalEmail}</p>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-1">
                {email.personalizedSubject}
              </h3>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap flex-grow">
              {email.personalizedBody}
            </div>
          </>
        ) : (
          <div className="m-auto text-center text-gray-500 dark:text-gray-400">
            <MailIcon />
            <p>Your personalized email preview will appear here.</p>
          </div>
        )}
      </div>
    </InputCard>
  );
};
