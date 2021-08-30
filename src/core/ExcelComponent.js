import { DomListener } from '@core/DomListener';

/**
*@method toHtml - возвращает шаблон компонента
**/

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.$root = $root;
    this.name = options.name || '';
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
    return this;
  }

  destroy() {
    this.removeDomListeners();
    return this;
  }
}
