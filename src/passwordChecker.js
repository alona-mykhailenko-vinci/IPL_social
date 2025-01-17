class PasswordChecker {
    // Check if the password is at least 8 characters long
    static containsAtLeast8Chars(password) {
      if (!password) return false; // Ensure password is not null or undefined
      return /.{8,}/.test(password);
    }
  
    // Check if the password contains at least one special character
    static containsSpecialChar(password) {
      if (!password) return false; // Ensure password is not null or undefined
      return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
  
    // Check if the password contains at least one digit
    static containsDigit(password) {
      if (!password) return false; // Ensure password is not null or undefined
      return /\d/.test(password);
    }
  
    // Check if the password does not contain the prohibited substring "IPL" (case-insensitive)
    static containsProhibitedSubstring(password) {
      if (!password) return false; // Ensure password is not null or undefined
      return !/(ipl)/i.test(password);
    }
  }
  export { PasswordChecker };
  