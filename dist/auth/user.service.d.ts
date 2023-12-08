export declare type User = any;
export declare class UsService {
    private readonly users;
    findOne(username: string): Promise<User | undefined>;
}
