import { makeAutoObservable } from 'mobx';
import LangService from './LangService';

export default class LangStore {
  langService = new LangService();
  currentLang = 'ru';

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  async init() {
    const lang = await this.langService.getLang();
    if (lang) {
      this.currentLang = lang;
    }
  }

  async changeLang(lang) {
    await this.langService.changeLang(lang);
    this.currentLang = lang;
  }
}