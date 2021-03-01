import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{3,32}$/, 'Enter a valid name')
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  name: NAME_SCHEMA,
  surName: NAME_SCHEMA,
  email: Yup.string()
    .email('Email must be a truly email')
    .required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      'Password have to contain an one big letter and etc...'
    )
    .required(),
});

export const SIGN_UP_SCHEMA = Yup.object({
  name: NAME_SCHEMA,
  surName: NAME_SCHEMA,
  nickName: Yup.string().matches(/^[A-Z][a-z]{3,12}$/, 'Enter a valid nickname')
    .required(),
  emailAddress: Yup.string()
    .email('Email must be a truly email')
    .required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      'Password have to contain an one big letter and etc...'
    )
    .required(),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ).required(),
});
