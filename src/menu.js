import { gel, crel } from './utils';

function renderMenu() {
  const content = gel('content');

  let menuItem;
  for (let index = 0; index < 40; index += 1) {
    menuItem = crel('div');
    menuItem.className = 'menuItem';
    content.appendChild(menuItem);
  }
}

export default renderMenu;
