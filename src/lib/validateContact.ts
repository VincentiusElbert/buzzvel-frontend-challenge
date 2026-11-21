export type ContactValues = { name: string; email: string; message: string };
export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

/** Field order, used to focus the first invalid field. */
export const CONTACT_FIELDS: ContactField[] = ["name", "email", "message"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Pure validation for the contact form, kept separate so it can be unit-tested. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Your name should be at least 2 characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email, like name@example.com.";

  if (!message) errors.message = "Please tell us how we can help.";
  else if (message.length < 10) errors.message = "Please add a little more detail (at least 10 characters).";

  return errors;
}
