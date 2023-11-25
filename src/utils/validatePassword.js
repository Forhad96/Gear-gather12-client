// Utility function for password validation
function validatePassword(password) {
  // Define the password requirements
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;

  // Check each requirement
  const isLengthValid = password.length >= minLength;
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  // Check if all requirements are met
  return (
    isLengthValid && hasUppercase && hasLowercase && hasDigit && hasSpecialChar
  );
}

export default validatePassword