import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpSettingsConstants } from "../constants/http-settings.constants";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public constructor(private httpClient: HttpClient) { }

    public get<T>(url: string): Observable<HttpResponse<T>> {
        return this.httpClient.get<T>(url, { observe: HttpSettingsConstants.HTTP_OBSERVE });
    }

    public post<T>(url: string, data: any): Observable<HttpResponse<T>> {
        return this.httpClient.post<T>(url, data, { observe: HttpSettingsConstants.HTTP_OBSERVE });
    }

    public put<T>(url: string, data: any): Observable<HttpResponse<T>> {
        return this.httpClient.put<T>(url, data, { observe: HttpSettingsConstants.HTTP_OBSERVE });
    }

    public delete<T>(url: string, data?: any): Observable<HttpResponse<T>> {
        return this.httpClient.request<T>("delete", url, { body: data, observe: HttpSettingsConstants.HTTP_OBSERVE });
    }
}