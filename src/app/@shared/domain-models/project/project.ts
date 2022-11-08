import { BaseModel } from "../@base/base-model";
import { LookupValue } from "../@base/lookup-value";
import { Task } from "../task/task";
import { ProjectQuarterlyTarget } from "./project-quarterly-target";

export interface Project extends BaseModel {
    projectTypeId?: number;
    institution?: string;
    department?: string;
    objectives?: string;
    strategy?: string;
    annualBudget?: number;
    annualTarget?: number;
    maximumHoursAllocated?: number;
    dueDate?: Date;
    sdBipReferenceNumber?: string;
    parentProjectId?: number;
    projectQuarterlyTargets: ProjectQuarterlyTarget;
    priorityId?: number;
    dateStarted?: Date;
    statusId?: number;
    tasks: Task[];
    projectType?: LookupValue;
    parentProject?: LookupValue;
    priority?: LookupValue;
    status?: LookupValue;
}
