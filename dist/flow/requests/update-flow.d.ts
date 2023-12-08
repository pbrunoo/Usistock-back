import { Flow } from "../entities/abstractions/flow";
export declare class UpdateFlowRequest {
    costumerId: Flow['costumerId'];
    dateRegistered: Flow['dateRegistered'];
    costumerName: Flow['costumerName'];
    name: Flow['name'];
    description: Flow['description'];
    sla: Flow['sla'];
    priority: Flow['priority'];
    duplicate: Flow['duplicate'];
    age: Flow['age'];
    default: Flow['default'];
}
