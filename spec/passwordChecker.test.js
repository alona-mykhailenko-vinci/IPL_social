import { PasswordChecker } from "../src/passwordChecker.js";

describe("PasswordChecker class should implement a password checker function", function () {
  describe("PasswordChecker function at least 8 characters", function () {
    it("given a password '12345678'", function () {
      expect(PasswordChecker.containsAtLeast8Chars("12345678")).toBe(true);
    });

    it("given a password '12345'", function () {
      expect(PasswordChecker.containsAtLeast8Chars("12345")).toBe(false);
    });
  });
});
