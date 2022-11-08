import { BaseModel } from "../@base/base-model";
import { LookupValue } from "../@base/lookup-value";
import { Project } from "../project/project";
import { User } from "../user/user";

export interface Task extends BaseModel {
    projectId?: number;
    taskTypeId?: number;
    priorityId?: number;
    parentTaskId?: number;
    assigneeId?: number;
    statusId?: number;
    project?: Project;
    taskType?: LookupValue;
    priority?: LookupValue;
    parentTask?: Task;
    assignee?: User;
    status?: LookupValue;
}
