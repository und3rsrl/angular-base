import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private readonly ENGLISH_LANGUAGE = 'en';

    public constructor(private translationService: TranslateService) {
    }

    public init() {
        this.translationService.defaultLang = this.ENGLISH_LANGUAGE;
        this.translationService.use(this.ENGLISH_LANGUAGE);
        const t = this.translationService.translations;
    }
}