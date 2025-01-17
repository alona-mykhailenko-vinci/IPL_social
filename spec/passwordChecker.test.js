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

  describe("PasswordChecker function special character validation", function () {
    it("given a password 'Password1!'", function () {
      expect(PasswordChecker.containsSpecialChar("Password1!")).toBe(true);
    });

    it("given a password 'Password1'", function () {
      expect(PasswordChecker.containsSpecialChar("Password1")).toBe(false);
    });
  });

  describe("PasswordChecker function digit validation", function () {
    it("given a password 'Password1!'", function () {
      expect(PasswordChecker.containsDigit("Password1!")).toBe(true);
    });

    it("given a password 'Password!'", function () {
      expect(PasswordChecker.containsDigit("Password!")).toBe(false);
    });
  });
});
