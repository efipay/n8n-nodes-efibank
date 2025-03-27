export interface EfiCredentials {
    sandbox: boolean;
    client_id: string;
    client_secret: string;
    partner_token?: string;
    certificate?: string;
    cert_base64?: boolean;
    validate_mtls?: boolean;
    validateMtls?: boolean;
    cache?: boolean;
    pix_cert?: string; 
    pemKey?: string;
}