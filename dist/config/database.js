"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORMConfig = void 0;
exports.ORMConfig = {
    type: 'mongodb',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    url: 'mongodb://127.0.0.1:27017/usistock'
};
//# sourceMappingURL=database.js.map