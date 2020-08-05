import renderHome from './home';
import { renderMenu, selectMenu } from './menu';

function menuCallBack(tabIndex) {
  // alert(tabIndex);
}

renderMenu(menuCallBack);
selectMenu(0);

renderHome();
