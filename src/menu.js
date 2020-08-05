import { gel, crel } from './utils';

function resetMenu() {
  gel('aboutUsTab').style.marginTop = '0';
  gel('menuTab').style.marginTop = '0';
  gel('contactTab').style.marginTop = '0';
}

function selectMenu(index) {
  resetMenu();
  const menus = ['aboutUsTab', 'menuTab', 'contactTab'];
  gel(menus[index]).style.marginTop = '20px';
}

function renderMenu(menuCallBack) {
  const content = gel('content');

  const menu = crel('div');
  menu.className = 'content-menu';

  const homeTab = crel('div');
  homeTab.innerHTML = 'About Us';
  homeTab.id = 'aboutUsTab';
  homeTab.addEventListener('click', () => {
    selectMenu(0);
    menuCallBack(0);
  });

  const menuTab = crel('div');
  menuTab.innerHTML = 'Menu';
  menuTab.id = 'menuTab';
  menuTab.addEventListener('click', () => {
    selectMenu(1);
    menuCallBack(1);
  });

  const contactTab = crel('div');
  contactTab.innerHTML = 'Contact';
  contactTab.id = 'contactTab';
  contactTab.addEventListener('click', () => {
    selectMenu(2);
    menuCallBack(2);
  });

  menu.appendChild(homeTab);
  menu.appendChild(menuTab);
  menu.appendChild(contactTab);

  content.appendChild(menu);
}

export {
  renderMenu,
  selectMenu,
};
