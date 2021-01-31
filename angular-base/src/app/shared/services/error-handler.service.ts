import { HttpErrorResponse } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { TranslationKeys } from "../constants/translations-keys.constants";

export class ErrorHandlerService {
    public constructor(private translationService: TranslateService) {   
    }

    public handleError(err: HttpErrorResponse) {
        let errorMessage: string;
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            switch(err.status) {
                case 400:
                    errorMessage = TranslationKeys.HTTP_BAD_REQUEST_ERROR;
                    break;

                case 401:
                    errorMessage = TranslationKeys.HTTP_UNAUTHORIZED_ERROR;
                    break;

                case 403:
                    errorMessage = TranslationKeys.HTTP_FORBIDDEN_ERROR;

                case 404:
                    errorMessage = TranslationKeys.HTTP_NOT_FOUND_ERROR;
                    break;

                case 412:
                    errorMessage = TranslationKeys.HTTP_PRECONDITION_FAILED_ERROR;
                    break;

                case 500:
                    errorMessage = TranslationKeys.HTTP_INTERNAL_SERVER_ERROR;
                    break;

                case 503:
                    errorMessage = TranslationKeys.HTTP_NOT_AVAILABLE_ERROR;
                    break;

                case 422:
                    errorMessage = TranslationKeys.HTTP_VALIDATION_ERROR;
                    break;

                default:
                    errorMessage = TranslationKeys.HTTP_DEFAULT_ERROR;
                    break;
            }
        }

        if(errorMessage) {
            console.log(this.translationService.instant(errorMessage));
        }
    }
}