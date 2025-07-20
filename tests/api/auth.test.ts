// getAPIKey.test.ts
import { describe, it, expect } from "vitest";
import { getAPIKey } from "../../src/api/auth"

describe("getAPIKey", () => {
  it("returns the API key when header is properly formatted", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };
    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  it("returns null if authorization header is missing", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null if authorization header does not start with 'ApiKey'", () => {
    const headers = {
      authorization: "Bearer something-else",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null if authorization header is malformed", () => {
    const headers = {
      authorization: "ApiKeyOnlyNoSpace",
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("returns null if authorization header is an empty string", () => {
    const headers = {
      authorization: "",
    };
    expect(getAPIKey(headers)).toBeNull();
  });
});
