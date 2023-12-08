export const AuthConfig = {
    jwt: {
        secret: process.env.JWT_SECRET = 'UsistockKeynowledge',
        signOptions: {
            expiresIn: process.env.JWT_EXPIRATION = '60s'
        }
    },
    token: {
        key: 'UsistockKeynowledge'
        
    }
}