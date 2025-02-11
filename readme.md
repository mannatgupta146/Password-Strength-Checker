# Password Strength Checker

This project implements a password strength checker that evaluates the security of the entered password and provides dynamic visual feedback. It uses HTML, CSS, and JavaScript to calculate the strength based on various criteria, such as length, use of uppercase, lowercase, numbers, and special characters. The UI provides an interactive password strength bar that fills based on the password's strength.

## Features

- **Password Strength Calculation**:
  The strength of the password is evaluated based on the following factors:
  - Length of the password
  - Presence of lowercase letters
  - Presence of uppercase letters
  - Presence of numbers
  - Presence of special characters

- **Dynamic Visual Feedback**:
  - A strength bar that increases or decreases as you type your password.
  - Color-coded strength labels indicating whether the password is "Very Weak", "Medium", or "Strong".
  - Password visibility toggle button that allows you to toggle between text and password input for ease of typing.

## How It Works

1. **Password Input**: 
   The user types a password into an input field.

2. **Strength Calculation**: 
   The strength of the password is calculated by checking:
   - Length of the password (e.g., longer passwords are stronger).
   - Whether the password contains at least one lowercase letter, one uppercase letter, one number, and one special character.
   
3. **Strength Indicator**:
   Based on the score calculated, the strength bar and label update in real time. The strength is color-coded:
   - **Very Weak**: Red color
   - **Medium**: Yellow color
   - **Strong**: Green color

4. **Password Visibility Toggle**: 
   Users can toggle the visibility of the password with an eye icon next to the password input field.

## Preview

Here is a preview of how the password strength indicator looks:

![Password Strength Checker Screenshot](screenshot.png)

*The screenshot above shows the password input field, strength bar, and dynamic feedback when typing a password.*


## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS styling inspiration.
- [Font Awesome](https://fontawesome.com/) for the eye icon used in the password visibility toggle.

## Technologies Used

- **HTML**: Structure of the password input and strength indicator.
- **CSS**: Styling the input fields, strength bar, labels, and animations.
- **JavaScript**: Handles the password strength calculation, updates the UI in real-time, and manages the visibility toggle functionality.

---
Keep your password safe 🔒!