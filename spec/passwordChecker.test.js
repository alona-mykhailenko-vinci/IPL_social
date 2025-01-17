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

  describe("PasswordChecker function prohibited substring 'IPL'", function () {
    it("given a password 'IPLPass1!'", function () {
      expect(PasswordChecker.containsProhibitedSubstring("IPLPass1!")).toBe(false);
    });

    it("given a password 'ValidPass1!'", function () {
      expect(PasswordChecker.containsProhibitedSubstring("ValidPass1!")).toBe(true);
    });
  });
  describe("PasswordChecker function with edge cases", function () {
    it("given an empty password ''", function () {
      expect(PasswordChecker.containsAtLeast8Chars("")).toBe(false);
    });
  
    it("given a null password", function () {
      expect(PasswordChecker.containsAtLeast8Chars(null)).toBe(false);
    });
  
    it("given an undefined password", function () {
      expect(PasswordChecker.containsAtLeast8Chars(undefined)).toBe(false);
    });
  });
  
});
