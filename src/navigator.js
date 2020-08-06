import { gel, crel } from './utils';

function resetNavigator() {
  gel('aboutUsNavigatorItem').className = 'navigateSelector';
  gel('menuNavigatorItem').className = 'navigateSelector';
  gel('contactNavigatorItem').className = 'navigateSelector';
}

function selectNavigatorItem(index, navigatorCallBack) {
  resetNavigator();
  const navigatorItems = ['aboutUsNavigatorItem', 'menuNavigatorItem', 'contactNavigatorItem'];
  gel(navigatorItems[index]).className = 'navigateSelector selectedNavigator';
  navigatorCallBack(index);
}

function renderNavigator(navigatorCallBack) {
  const mainContent = gel('mainContent');

  const navigator = crel('div');
  navigator.className = 'content-navigator';

  const aboutUsNavigatorItem = crel('div');
  aboutUsNavigatorItem.innerHTML = 'About Us';
  aboutUsNavigatorItem.id = 'aboutUsNavigatorItem';
  aboutUsNavigatorItem.className = 'navigateSelector';
  aboutUsNavigatorItem.addEventListener('click', () => {
    selectNavigatorItem(0, navigatorCallBack);
  });

  const menuNavigatorItem = crel('div');
  menuNavigatorItem.innerHTML = 'Menu';
  menuNavigatorItem.id = 'menuNavigatorItem';
  menuNavigatorItem.className = 'navigateSelector';
  menuNavigatorItem.addEventListener('click', () => {
    selectNavigatorItem(1, navigatorCallBack);
  });

  const contactNavigatorItem = crel('div');
  contactNavigatorItem.innerHTML = 'Contact';
  contactNavigatorItem.id = 'contactNavigatorItem';
  contactNavigatorItem.className = 'navigateSelector';
  contactNavigatorItem.addEventListener('click', () => {
    selectNavigatorItem(2, navigatorCallBack);
  });

  navigator.appendChild(aboutUsNavigatorItem);
  navigator.appendChild(menuNavigatorItem);
  navigator.appendChild(contactNavigatorItem);

  mainContent.appendChild(navigator);
}

export {
  renderNavigator,
  selectNavigatorItem,
};
