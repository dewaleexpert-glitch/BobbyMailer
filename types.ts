
export interface ProcessedEmail {
  id: number;
  originalEmail: string;
  personalizedName: string;
  personalizedSubject: string;
  personalizedBody: string;
  mailtoLink: string;
}
