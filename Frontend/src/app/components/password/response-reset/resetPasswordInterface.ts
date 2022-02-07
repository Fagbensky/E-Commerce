export class ResetPassword {
    email?: string;
    password?: string;
    password_confirmation?: string;
    resetToken?: string;
}

export interface resetPasswordSuccess{
    data?: string
}