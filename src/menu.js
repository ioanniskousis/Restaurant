import { gel, crel } from './utils';
import {
  salads,
  shellfish,
  fish,
  meat,
  wine,
} from './menuItems';

function renderHeader(content, text) {
  const saladsHeader = crel('div');
  saladsHeader.className = 'menuHeader';
  saladsHeader.innerHTML = text;
  content.appendChild(saladsHeader);
}

function renderItem(content, item) {
  const menuItem = crel('div');
  menuItem.className = 'menuItem';

  const itemImage = crel('div');
  itemImage.className = 'itemImage';
  itemImage.style.backgroundImage = 'url("../resources/images/'.concat(item.image).concat('")');
  menuItem.appendChild(itemImage);

  const itemText = crel('div');
  itemText.className = 'itemText';
  const itemName = crel('div');
  itemName.className = 'itemName';
  itemName.innerHTML = item.name;
  itemText.appendChild(itemName);
  const itemDescription = crel('div');
  itemDescription.className = 'itemDescription';
  itemDescription.innerHTML = item.description;
  itemText.appendChild(itemDescription);
  const itemPrice = crel('div');
  itemPrice.className = 'itemPrice';
  itemPrice.innerHTML = item.price;
  itemText.appendChild(itemPrice);
  menuItem.appendChild(itemText);

  content.appendChild(menuItem);
}

function renderMenu() {
  const content = gel('content');

  renderHeader(content, 'Salads and Appetisers');
  const saladsItems = salads();
  for (let index = 0; index < saladsItems.length; index += 1) {
    renderItem(content, saladsItems[index]);
  }

  renderHeader(content, 'Shellfish - Lobster');
  const shellfishItems = shellfish();
  for (let index = 0; index < shellfishItems.length; index += 1) {
    renderItem(content, shellfishItems[index]);
  }

  renderHeader(content, 'Fresh Fish');
  const fishItems = fish();
  for (let index = 0; index < fishItems.length; index += 1) {
    renderItem(content, fishItems[index]);
  }

  renderHeader(content, 'Meat');
  const meatItems = meat();
  for (let index = 0; index < meatItems.length; index += 1) {
    renderItem(content, meatItems[index]);
  }

  renderHeader(content, 'Wine');
  const wineItems = wine();
  for (let index = 0; index < wineItems.length; index += 1) {
    renderItem(content, wineItems[index]);
  }
}

export default renderMenu;
