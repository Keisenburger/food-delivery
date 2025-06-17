export const refresh = (req, res) => {
  res.send("auth/refresh GET huselt irle");
};

export const signIn = (req, res) => {
  res.send("auth/sign-in POST huselt irle");
};

export const signUp = (req, res) => {
  res.send("auth/sign-up POST huselt irle");
};

export const resetPassword = (req, res) => {
  res.send("auth/reset-password-request POST huselt irle");
};

export const verifyResetPassword = (req, res) => {
  res.send("/auth/verify-reset-password-request GET huselt irle");
};

export const getResetPassword = (req, res) => {
  res.send("/auth/reset-password POST huselt irle");
};
