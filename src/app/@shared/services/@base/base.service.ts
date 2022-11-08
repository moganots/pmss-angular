import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError as ObservableThrowError } from 'rxjs';
import { SharedConfiguration } from '../../configuration/shared-configuration';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public baseApiUrl: string = SharedConfiguration.applicationApiBaseUrl();
  public httpHeaders: HttpHeaders;

  constructor(
    @Inject('serviceName') public serviceName: string,
    @Inject('entityName') public entityName: string,
    public httpClient: HttpClient
    ) {
    this.httpHeaders = new HttpHeaders();
    this.httpHeaders.set('Access-Control-Allow-Origin', 'origin-list');
  }
  getEndpointUrl(
    childEntityName?: string,
    resourceType?: string,
    actionName?: string
  ): string {
    return `${this.baseApiUrl}${[
      this.serviceName.nullIfSame(this.entityName),
      this.entityName.nullIfSame(this.serviceName),
      childEntityName.nullIfSame(this.serviceName || this.entityName),
      resourceType,
      actionName
    ].filter((uriComponent) => !(uriComponent === null || uriComponent === undefined || uriComponent.trim().length === 0))
      .map((uriComponent) => encodeURIComponent(uriComponent))
      .join('/')}`;
  }
  protected _handleError(error: HttpErrorResponse | any): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const errorMsg = [error.message || 'Error: Unable to complete request.', JSON.stringify(error)].filter((message) => !(message === null)).join(`\r\n`);
    return ObservableThrowError(errorMsg);
  }
}
