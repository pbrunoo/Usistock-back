import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export const ORMConfig: MongoConnectionOptions = {
    type: 'mongodb',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    /*synchronize: true,
    host: 'dm002-dev.iauditcloud.com.br',
    port: Number(8500),
    username: 'mipmanager_lgn',
    password: 'batatinha99',
    database: 'mipmanager_db',
    replicaSet: 'rs0',
    readPreference: 'secondaryPreferred',
    useNewUrlParser: true*/
    url: 'mongodb://127.0.0.1:27017/usistock'
};
