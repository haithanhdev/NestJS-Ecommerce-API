export declare class EmailService {
    private resend;
    constructor();
    sendOTP(payload: {
        email: string;
        code: string;
    }): Promise<import("resend").CreateEmailResponse>;
}
