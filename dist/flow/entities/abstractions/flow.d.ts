export interface Flow {
    id?: string;
    dateRegistered: Date;
    costumerId?: string;
    costumerName: string;
    name: string;
    description: string;
    sla: number;
    priority: number;
    duplicate: boolean;
    age: number;
    default: boolean;
}
