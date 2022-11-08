import { BaseModel } from "../@base/base-model";

export interface ProjectQuarterlyTarget extends BaseModel {
    firstQuarter?: number;
    secondQuarter?: number;
    thirdQuarter?: number;
    fourthQuarter?: number;
}
