import { DataColumn } from "../../../@shared/domain-models/data-column";

export class TasksConfiguration {
    public static identifier = 'tasks';
    public static pageIcon = 'task_alt';
    public static pageRouteTitle = 'Tasks';
    public static pageRoute = `tasks`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Manage Tasks`;
    public static pageName = `Manage Tasks`;
    public static tableHeading = 'Manage Tasks';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
