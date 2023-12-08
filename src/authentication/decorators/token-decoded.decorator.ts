import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { extractTokenFromRequest } from './../helpers/request-token-payload-extractor';

export const TokenDecoded = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return extractTokenFromRequest(request);
    }
);