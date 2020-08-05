import { gel, crel } from './utils';

function salads() {
  const items = [];
  items.push({ image: '', description: '', price: 20 });

  return items;
}

function renderHeader(content, text) {
  const saladsHeader = crel('div');
  saladsHeader.className = 'menuHeader';
  saladsHeader.innerHTML = text;
  content.appendChild(saladsHeader);
}

function renderItem(content, item) {
  const menuItem = crel('div');
  menuItem.className = 'menuItem';
  content.appendChild(menuItem);
}

function renderMenu() {
  const content = gel('content');

  renderHeader(content, 'Salads and Appetisers');
  const saladsItems = salads();
  for (let index = 0; index < saladsItems.length; index += 1) {
    renderItem(saladsItems[index]);
  }
  
  renderHeader(content, 'Shellfish');

  for (let index = 0; index < 4; index += 1) {
    const menuItem = crel('div');
    menuItem.className = 'menuItem';
    content.appendChild(menuItem);
  }

  const fishHeader = crel('div');
  fishHeader.className = 'menuHeader';
  fishHeader.innerHTML = 'Fresh Fish';
  content.appendChild(fishHeader);

  for (let index = 0; index < 4; index += 1) {
    const menuItem = crel('div');
    menuItem.className = 'menuItem';
    content.appendChild(menuItem);
  }

  const meatHeader = crel('div');
  meatHeader.className = 'menuHeader';
  meatHeader.innerHTML = 'Meat';
  content.appendChild(meatHeader);

  for (let index = 0; index < 4; index += 1) {
    const menuItem = crel('div');
    menuItem.className = 'menuItem';
    content.appendChild(menuItem);
  }

  const wineHeader = crel('div');
  wineHeader.className = 'menuHeader';
  wineHeader.innerHTML = 'Wine';
  content.appendChild(wineHeader);

  for (let index = 0; index < 8; index += 1) {
    menuItem = crel('div');
    menuItem.className = 'menuItem';
    content.appendChild(menuItem);
  }

  // for (let index = 0; index < 10; index += 1) {
  //   menuItem = crel('div');
  //   menuItem.className = 'menuItem';
  //   content.appendChild(menuItem);
  // }

}

export default renderMenu;
