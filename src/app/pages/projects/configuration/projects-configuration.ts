import { DataColumn } from "../../../@shared/domain-models/data-column";

export class ProjectsConfiguration {
    public static identifier = 'projects';
    public static pageIcon = 'hub';
    public static pageRouteTitle = 'Projects';
    public static pageRoute = `projects`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Manage Projects`;
    public static pageName = `Manage Projects`;
    public static tableHeading = 'Manage Projects';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
