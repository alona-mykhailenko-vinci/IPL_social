class PasswordChecker {
    static containsAtLeast8Chars(password) {
      return /.{8,}/.test(password); // At least 8 characters
    }
  }
  export { PasswordChecker };
  