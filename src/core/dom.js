class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  append(Node) {
    if (Node instanceof Dom) {
      Node = Node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(Node);
    } else {
      this.$el.appendChild(Node);
    }
    return this;
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  // el.css({})

  css(styles = {}) {
    if (styles && !!Object.values(styles).length) {
      Object
          .keys(styles)
          .forEach((keys) => this.$el.style[keys] = styles[keys]);
    } else {
      console.log('----------- null');
      this.$el.style = '';
    }
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb);
  }

  getCoord() {
    return this.$el.getBoundingClientRect();
  }
  get data() {
    return this.$el.dataset;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, className) => {
  const el = document.createElement(tagName);
  if (className) {
    el.classList.add(className);
  }
  return $(el);
};
