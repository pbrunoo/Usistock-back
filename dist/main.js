"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const swaggerDocumentBuilder = (new swagger_1.DocumentBuilder())
        .setTitle('Usistock')
        .setVersion('1.0')
        .build();
    app.enableCors();
    app.use(bodyParser.json({ limit: '64mb' }));
    app.use(bodyParser.urlencoded({ limit: '64mb', extended: true }));
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerDocumentBuilder);
    swagger_1.SwaggerModule.setup('/', app, swaggerDocument);
    console.log(swaggerDocument);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map