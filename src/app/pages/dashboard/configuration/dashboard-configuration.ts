import { DataColumn } from "../../../@shared/domain-models/data-column";

export class DashboardConfiguration {
    public static identifier = 'dashboard';
    public static pageIcon = 'empty_dashboard';
    public static pageRouteTitle = 'Dashboard';
    public static pageRoute = `dashboard`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Dashboard`;
    public static pageName = `Dashboard`;
    public static tableHeading = 'Dashboard';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
