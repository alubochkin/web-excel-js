import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';
  toHTML() {
    return `
        <div class="font-style">
          <div class="button">
            <span class="material-icons-outlined">format_bold</span>
          </div>
          <div class="button">
            <span class="material-icons-outlined">format_italic</span>
          </div>
          <div class="button">
            <span class="material-icons-outlined">format_underlined</span>
          </div>
        </div>

        <div class="v-hr"></div>

        <div class="color">

          <div class="button font-color">
            <span class="material-icons-outlined">format_color_text</span>
            <input type="color">
          </div>

          <div class="button row-color">
            <span class="material-icons-outlined">format_color_fill</span>
            <input type="color">
          </div>

        </div>

        <div class="v-hr"></div>

        <div class="text">
          <div class="size">
            <div class="button">           
              <span class="material-icons-outlined">format_size</span>
            </div>
          </div>

          <div class="align">
            <div class="button">           
              <span class="material-icons-outlined">format_align_left</span>
            </div>
          </div>
        </div>
    `;
  }
}
