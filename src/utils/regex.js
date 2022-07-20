export const EMAIL_REGEX =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
export const PHONE_REGEX =
  /^01([0|1|6|7|8|9])(-?|\s?)([0-9]{3,4})(-?|\s?)([0-9]{4})$/;
export const KOREAN_REGEX = /^[가-힣]{2,}$/;
export const ENGLISH_REGEX = /^[A-Za-z]{3,}$/;
export const CARD_REGEX = /^[0-9]{4}$/;
