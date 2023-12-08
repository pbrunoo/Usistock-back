"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthConfig = void 0;
exports.AuthConfig = {
    jwt: {
        secret: process.env.JWT_SECRET = 'UsistockKeynowledge',
        signOptions: {
            expiresIn: process.env.JWT_EXPIRATION = '60s'
        }
    },
    token: {
        key: 'UsistockKeynowledge'
    }
};
//# sourceMappingURL=auth.config.js.map