import { Localization } from './LangAdapter';
import LangLocalRepository from './LangLocalRepository';

export default class LangService {
  constructor() {
    this.langLocal = new LangLocalRepository();
  }

  async changeLang(lang) {
    await this.langLocal.set(lang);
    if (lang) {
      await Localization.changeLanguage(lang);
    }
  }

  async getLang() {
    return await this.langLocal.get();
  }
}