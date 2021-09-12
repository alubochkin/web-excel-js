const CHART_CODES = {
  'A': 65,
  'Z': 90,
};

function toCell(_, col) {
  return `
  <div class="cell" data-col="${col}" contenteditable=""></div>
  `;
}

function toColumn(col, index) {
  return `
    <div class="column" data-col="${index}" data-type="resizable">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(data = '', i = '') {
  const resizer = i ? '<div class="row-resize" data-resize="row"></div>' : '';

  return `
    <div class="row">
      <div class="row-info" ${!!i ? `data-type="resizable"` : ''}>
        ${i}
        ${resizer}
      </div>
      ${!!i ? `<div class="row-data">${data}</div>` : `<div class="row-data top-columns">${data}</div>` }
    </div>
  `;
}


export function createTable(rowCount = 15) {
  const colsCount = CHART_CODES.Z - CHART_CODES.A + 1;
  const cols = new Array(colsCount)
      .fill('')
      .map((col, i) => String.fromCharCode(CHART_CODES.A + i))
      .map((chart, index) => toColumn(chart, index))
      .join('\n');

  const rows = [];
  rows.push(createRow(cols));

  for (let i = 0; i < rowCount; i++) {
    const cell = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('\n');

    rows.push(createRow(cell, i + 1));
  }

  return rows.join('\n');
}
