export class Login{
    public email?: string;
    public password?: string;
}

export interface LoginResponse{
    access_token: string,
    token_type: string,
    expires_in: number,
    user:string
}