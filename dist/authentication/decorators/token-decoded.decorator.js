"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenDecoded = void 0;
const common_1 = require("@nestjs/common");
const request_token_payload_extractor_1 = require("./../helpers/request-token-payload-extractor");
exports.TokenDecoded = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request_token_payload_extractor_1.extractTokenFromRequest(request);
});
//# sourceMappingURL=token-decoded.decorator.js.map