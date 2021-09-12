import { ExcelComponent } from '@core/ExcelComponent';
import { resizeHandler } from './table.resize';
import { createTable } from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mousemove'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      resizeHandler(this.$root, event);
    }
  }


  onMousemove() {

  }

  onClick(event) {
    console.log('click');
  }
}
