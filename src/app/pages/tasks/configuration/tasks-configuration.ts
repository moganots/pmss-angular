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
        {id:1, name:"id", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:2, name:"name", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:3, name:"description", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:4, name:"taskTypeId", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:5, name:"projectId", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:6, name:"parentTaskId", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:7, name:"priorityId", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:8, name:"statusId", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:9, name:"assigneeId", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:10, name:"createdBy", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
        {id:11, name:"dateCreated", canCreate: true, canView: true, canEdit: true, canDelete: true, canGroup: true, canSort: true},
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
