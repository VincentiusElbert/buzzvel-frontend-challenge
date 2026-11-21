"use client";

import { useId, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircleIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import {
  CONTACT_FIELDS,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/validateContact";

type Status = "idle" | "submitting" | "success";

const EMPTY: ContactValues = { name: "", email: "", message: "" };
/** Simulated request — there is no backend in this challenge. */
const sendMessage = () => new Promise<void>((resolve) => setTimeout(resolve, 900));

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");
  const titleId = useId();

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as ContactField;
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    // Once a field has been visited, re-check it as the user types so errors clear immediately.
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: validateContact(next)[field] }));
  };

  const onBlur = (field: ContactField) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateContact(values)[field] }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });

    const firstInvalid = CONTACT_FIELDS.find((field) => found[field]);
    if (firstInvalid) {
      // Move focus to the first problem so keyboard and screen-reader users land on it.
      const element = event.currentTarget.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    setStatus("submitting");
    await sendMessage();
    setSentTo(values.name.trim().split(" ")[0]);
    setValues(EMPTY);
    setTouched({});
    setStatus("success");
  };

  const fieldProps = (field: ContactField) => ({
    name: field,
    value: values[field],
    onChange,
    onBlur: () => onBlur(field),
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    disabled: status === "submitting",
  });

  return (
    <div className="rounded-2xl border border-line bg-white px-5 py-6 shadow-form lg:w-[540px] lg:shrink-0 lg:p-10">
      <h3 id={titleId} className="font-display text-xl leading-8 font-bold text-ink">
        Contact us
      </h3>
      <p className="mt-2 text-sm leading-6 text-body">Fill out the fields and we will get in touch.</p>

      {/* Announces the result to screen readers */}
      <div role="status" aria-live="polite">
        {status === "success" && (
          <div className="mt-6 flex gap-3 rounded-xl bg-primary-soft p-4 text-sm leading-6 text-ink">
            <CheckCircleIcon className="mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold">Thanks{sentTo ? `, ${sentTo}` : ""}! Your message is on its way.</p>
              <p className="text-body">We usually reply within 24 hours on business days.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 rounded-sm text-primary underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send another message
              </button>
            </div>
          </div>
        )}
      </div>

      {status !== "success" && (
        <form noValidate aria-labelledby={titleId} onSubmit={onSubmit} className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <FormField id="name" label="Full name" error={errors.name}>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className={inputClasses(errors.name)}
                {...fieldProps("name")}
              />
            </FormField>

            <FormField id="email" label="Email" error={errors.email}>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="youremail@example.com"
                className={inputClasses(errors.email)}
                {...fieldProps("email")}
              />
            </FormField>

            <FormField id="message" label="Your question" error={errors.message}>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className={cn(inputClasses(errors.message), "h-[100px] resize-y py-[13px] lg:h-[120px]")}
                {...fieldProps("message")}
              />
            </FormField>
          </div>

          <Button type="submit" fullWidth disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>
        </form>
      )}
    </div>
  );
}

function inputClasses(error?: string) {
  return cn(
    "block h-12 w-full rounded-lg border bg-cream px-4 py-[11px] text-sm leading-6 text-ink placeholder:text-muted",
    "transition-[border-color,box-shadow] outline-none focus:border-primary focus:ring-4 focus:ring-primary/15",
    "disabled:opacity-60",
    error ? "border-red-600 focus:border-red-600 focus:ring-red-600/15" : "border-line hover:border-muted/50",
  );
}

type FormFieldProps = { id: string; label: string; error?: string; children: ReactNode };

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm leading-6 font-bold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs leading-5 text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
