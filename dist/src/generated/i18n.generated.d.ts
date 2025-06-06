import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "error": {
        "NOT_FOUND": string;
    };
};
export type I18nPath = Path<I18nTranslations>;
