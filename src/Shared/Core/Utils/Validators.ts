const STRONG_PASS_RGX = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,12}$/;
const MEDIUM_PASS_RGX = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const WEAK_PASS_RGX = /(?=.{6,}).*/;
const EMAIL_RGX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const ValidatorPassword = {
  STRONG_PASS_RGX,
  MEDIUM_PASS_RGX,
  WEAK_PASS_RGX
};

export const ValidatorEmail = {
  EMAIL_RGX
};
