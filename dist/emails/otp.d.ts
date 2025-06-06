interface OTPEmailProps {
    otpCode: string;
    title: string;
}
export declare const OTPEmail: {
    ({ otpCode, title }: OTPEmailProps): any;
    PreviewProps: OTPEmailProps;
};
export default OTPEmail;
