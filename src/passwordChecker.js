class PasswordChecker {
    static containsAtLeast8Chars(password) {
      return /.{8,}/.test(password); // At least 8 characters
    }
    static containsSpecialChar(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character
      }
    static containsDigit(password) {
    return /\d/.test(password); // At least one digit
    }
  }
  export { PasswordChecker };
  