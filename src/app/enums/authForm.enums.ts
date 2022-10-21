enum AuthForm {
  FULLNAME = 'fullName',
  DISPLAYNAME = 'displayName',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_REPEAT = 'passwordRepeat',
}

enum Placeholders {
  SIGN_IN_EMAIL = 'Email',
  SIGN_IN_PASSWORD = 'Password',
  SIGN_UP_EMAIL = 'email*',
  SIGN_UP_PASSWORD = 'password*',
}

export { AuthForm, Placeholders };
