
import { useState, useEffect, useMemo } from 'react';
import { ProcessedEmail } from '../types';

const parseNameFromEmail = (email: string): string => {
  if (!email || !email.includes('@')) {
    return 'Friend';
  }
  const namePart = email.split('@')[0];
  const cleanedName = namePart.replace(/[^a-zA-Z]/g, '');
  if (!cleanedName) {
    return 'Friend';
  }
  return cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
};

const parseEmails = (rawText: string): string[] => {
  const emails = rawText
    .replace(/[,;\s\n]+/g, ' ')
    .split(' ')
    .map(e => e.trim())
    .filter(e => e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
  return [...new Set(emails)]; // Remove duplicates
};

export const useEmailProcessor = (emailsRaw: string, subjectTemplate: string, bodyTemplate: string): ProcessedEmail[] => {
  const placeholder = '____';

  const processedEmails = useMemo(() => {
    const validEmails = parseEmails(emailsRaw);
    
    return validEmails.map((email, index) => {
      const personalizedName = parseNameFromEmail(email);
      
      const personalizedSubject = `${personalizedName}: ${subjectTemplate}`;
      
      const bodyWithReplacements = bodyTemplate.replace(new RegExp(placeholder, 'g'), personalizedName);
      
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(personalizedSubject)}&body=${encodeURIComponent(bodyWithReplacements)}`;

      return {
        id: 1234 + index,
        originalEmail: email,
        personalizedName,
        personalizedSubject,
        personalizedBody: bodyWithReplacements,
        mailtoLink,
      };
    });
  }, [emailsRaw, subjectTemplate, bodyTemplate]);

  return processedEmails;
};
