import { capitalize } from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodEvent(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`Метод ${method} не реализован в компоненте ${name}`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodEvent(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

const getMethodEvent = (eventName) => 'on' + capitalize(eventName);

// const errWorker = (check, reason = {}, placeErr = '') => {
//   if (check) {
//     throw new Error(`Произошла ошибка по причине ${reason} в ${placeErr}`);
//   }
// };

