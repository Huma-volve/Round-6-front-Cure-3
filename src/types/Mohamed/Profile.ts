export type ProfileProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  birthdate?: string;
};

export interface FormDataProfile {
  name: string;
  email: string;
  phone: string;
  day: string;
  month: string;
  year: string;
  avatar?: File | string;
  birthdate?: string;
}

export type PrivacyPolicyResponse = {
  content: string;
  title?: string;
};

export type ModelProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  titleModal: string;
  contentModal: string;
  YesButtonText: string;
  onConfirm?: (password?: string) => void;
  disabled?: boolean;
  loading?: boolean;
};

export type PaymentCard = {
  id: string;
  brand: string;
  card_holder_name: string;
  last_four: string;
};

export type RowProps = {
  leftIcon: string;
  label: string;
  right?: React.ReactNode;
  danger?: boolean;
  to?: string;
  onClick?: () => void;
};

export type SendOTPFormProps = {
  email: string;
  setEmail: (email: string) => void;
  onSend: () => void;
  loading: boolean;
};

export type VerifyOTPFormProps = {
  otp: string;
  setOtp: (otp: string) => void;
  onVerify: (otp: string) => void;
  loading: boolean;
};

export type ResetPasswordFormProps = {
  onReset: (password: string, confirmPassword: string) => void;
  loading: boolean;
};

export type verifyOTPType = {
    email: string;
    otp: string;
};

export type resetPasswordType = {
    email: string;
    otp: string;
    password: string;
    password_confirmation: string;
};
