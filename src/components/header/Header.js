import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';
  toHTML() {
    return `
    <input type="text" class="input" value="Новая таблица">

    <div class="button-block">
      <div class="button logout">
        <span title="выход" class="material-icons-two-tone">logout</span>
      </div>
      <div class="button delete">
        <span title="удалить" class="material-icons-outlined">
          delete_forever
        </span>
      </div>
    `;
  }
}
