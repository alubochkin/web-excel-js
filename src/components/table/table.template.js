const CHART_CODES = {
  'A': 65,
  'Z': 90,
};

function toCell() {
  return `
  <div class="cell" contenteditable=""></div>
  `;
}

function createCol(content) {
  return `
    <div class="column">${content}</div>
  `;
}

function createRow(data = '', i = '') {
  // const className = 'row-data ';
  // if (i === '') className.push('top-columns');

  return `
    <div class="row">
      <div class="row-info">${i}</div>
      ${!!i ? `<div class="row-data">${data}</div>` : `<div class="row-data top-columns">${data}</div>` }
    </div>
  `;
}

export function createTable(rowCount = 15) {
  const colsCount = CHART_CODES.Z - CHART_CODES.A + 1;
  const cols = new Array(colsCount)
      .fill('')
      .map((col, i) => String.fromCharCode(CHART_CODES.A + i))
      .map((chart) => createCol(chart))
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
