import { Flow } from './abstractions/flow';
export declare class FlowEntity implements Flow {
    id: Flow['id'];
    dateRegistered: Flow['dateRegistered'];
    costumerId: Flow['costumerId'];
    costumerName: Flow['costumerName'];
    name: Flow['name'];
    description: Flow['description'];
    sla: Flow['sla'];
    priority: Flow['priority'];
    duplicate: Flow['duplicate'];
    age: Flow['priority'];
    default: Flow['default'];
}
