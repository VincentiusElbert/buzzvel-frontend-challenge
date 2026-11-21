import { describe, expect, it } from "vitest";
import { validateContact } from "./validateContact";

const valid = { name: "Alex Morgan", email: "alex@example.com", message: "How do team plans work?" };

describe("validateContact", () => {
  it("accepts a complete, valid submission", () => {
    expect(validateContact(valid)).toEqual({});
  });

  it("requires every field", () => {
    expect(validateContact({ name: "", email: "", message: "" })).toEqual({
      name: "Please enter your name.",
      email: "Please enter your email address.",
      message: "Please tell us how we can help.",
    });
  });

  it("ignores surrounding whitespace", () => {
    expect(validateContact({ name: "   ", email: " alex@example.com ", message: valid.message })).toEqual({
      name: "Please enter your name.",
    });
  });

  it.each(["alex", "alex@", "alex@example", "alex example@mail.com"])("rejects the invalid email %j", (email) => {
    expect(validateContact({ ...valid, email }).email).toMatch(/valid email/);
  });

  it("asks for more detail on very short messages", () => {
    expect(validateContact({ ...valid, message: "Hi" }).message).toMatch(/at least 10 characters/);
  });
});
