import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ErrorHandlerService } from "../services/error-handler.service";

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
    public constructor(private errorHandlerService: ErrorHandlerService) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return new Observable((observer) => {
            next.handle(req).subscribe(
                (res: HttpResponse<any>) => {
                    if (res instanceof HttpResponse) {
                        observer.next(res)
                    }
                },
                (err: HttpErrorResponse) => {
                    this.errorHandlerService.handleError(err);
                }
            );
        });
    }

}