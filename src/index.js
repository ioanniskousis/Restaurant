import renderAboutUs from './aboutUs';
import renderMenu from './menu';
import renderContact from './contact';

import { renderNavigator, selectNavigatorItem } from './navigator';
import { gel } from './utils';

function navigatorCallBack(tabIndex) {
  const content = gel('content');
  content.innerHTML = '';
  content.scrollTop = '0';

  switch (tabIndex) {
    case 1:
      renderMenu();
      break;
    case 2:
      renderContact();
      break;
    default:
      renderAboutUs();
      break;
  }
}

renderNavigator(navigatorCallBack);
selectNavigatorItem(0, navigatorCallBack);
