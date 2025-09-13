
import React from 'react';

interface InputCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const InputCard: React.FC<InputCardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg p-6 ring-1 ring-black ring-opacity-5">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">{description}</p>
      {children}
    </div>
  );
};
