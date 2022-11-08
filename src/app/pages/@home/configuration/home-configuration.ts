import { DataColumn } from "../../../@shared/domain-models/data-column";

export class HomeConfiguration {
    public static identifier = 'home';
    public static pageIcon = 'home';
    public static pageRouteTitle = 'Home';
    public static pageRoute = `home`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Home`;
    public static pageName = `Home`;
    public static tableHeading = 'Home';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
