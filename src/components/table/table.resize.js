import { $ } from '@/core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  let value = 0;
  const $parent = $resizer.closest('[data-type="resizable"]');
  const typeResize = $resizer.data.resize;

  const coords = $parent.getCoord();
  if (typeResize === 'col') {
    $resizer.css({
      opacity: 1,
      bottom: -document.documentElement.clientHeight + 'px',
    });
  } else {
    $resizer.css({
      opacity: 1,
      width: '100%',
    });
  }


  document.onmousemove = (e) => {
    if (typeResize === 'col') {
      const delta = e.pageX - coords.right;
      value = delta + coords.width;

      $resizer.css({right: -delta + 'px'});
    } else {
      const delta = e.pageY - coords.bottom;
      value = delta + coords.height;
      $resizer.css({bottom: -delta + 'px'});
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (value > 0 ) {
      if (typeResize === 'col') {
        $parent.css({'width': value + 'px'});
        $root
            .findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => el.style.width = value + 'px');

        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0,
        });
      }
      if (typeResize === 'row') {
        $parent.css({'height': value + 'px'});
        $resizer.css({
          opacity: 0,
          right: 0,
          bottom: 0,
          width: 'inherit',
        });
      }
    }
  };
}
