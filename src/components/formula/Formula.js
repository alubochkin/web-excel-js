import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
    this.$root = $root;
  }
  toHTML() {
    return `
        <div class="text">fx</div>
        <div class="input" spellcheck="false" contenteditable="true"></div>
    `;
  }

  onInput(event) {
    console.log('component formula ==== ', this.$root);
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick(event) {
    console.log(event);
  }
}
