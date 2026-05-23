export type ContactSubmission = {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  message: string;
  created_at: string;
};

export type ContactInput = {
  full_name: string;
  email: string;
  phone_number: string;
  message: string;
};
