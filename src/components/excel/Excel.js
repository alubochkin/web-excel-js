import { $ } from '@/core/dom';

export class Excel {
  constructor(selector, options) {
    this.$app = $(selector);
    this.components = options.components || [];
  }
  getRoot() {
    const $root = $.create('div', 'excel');
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      // debug
      if (component.name) {
        window['c' + component.name] = component;
      }

      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }
  render() {
    this.$app.append(this.getRoot());
    this.components.map((component) => component.init());
  }
}
