import { gel, crel } from './utils';
import facebookImg from '../resources/images/facebook-24.png';
import twitterImg from '../resources/images/twitter-24.png';
import instaImg from '../resources/images/instagram-24.png';
import pinteImg from '../resources/images/pinterest-24.png';
import googleImg from '../resources/images/google-plus-4-24.png';

function renderHeader() {
  const header = crel('header');

  const headerCaption = crel('div');
  headerCaption.id = 'header-caption';
  headerCaption.innerHTML = 'Sea Side Restaurant';
  header.appendChild(headerCaption);

  document.body.appendChild(header);
}

function renderMain() {
  const main = crel('main');

  const mainContent = crel('div');
  mainContent.id = 'mainContent';

  const content = gel('content');
  mainContent.appendChild(content);

  main.appendChild(mainContent);
  document.body.appendChild(main);
}

function renderFooter() {
  const footer = crel('footer');
  footer.id = 'footer';

  const fb = crel('img');
  fb.src = facebookImg;

  const tt = crel('img');
  tt.src = twitterImg;

  const inst = crel('img');
  inst.src = instaImg;

  const pin = crel('img');
  pin.src = pinteImg;

  const ggl = crel('img');
  ggl.src = googleImg;

  footer.appendChild(fb);
  footer.appendChild(tt);
  footer.appendChild(inst);
  footer.appendChild(pin);
  footer.appendChild(ggl);
}

renderHeader();
renderMain();
renderFooter();
