interface IRegistrationForm {
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default IRegistrationForm;