"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTokenFromRequest = void 0;
const jwt_decode_1 = require("jwt-decode");
const extractTokenFromRequest = (request) => {
    const [, token] = request.headers.authorization.split(' ');
    const tokenDecoded = jwt_decode_1.default(token);
    return tokenDecoded;
};
exports.extractTokenFromRequest = extractTokenFromRequest;
//# sourceMappingURL=request-token-payload-extractor.js.map