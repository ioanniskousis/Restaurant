import { gel, crel } from './utils';

function renderAboutUs() {
  const content = gel('content');

  let aboutItem;
  for (let index = 0; index < 5; index += 1) {
    aboutItem = crel('div');
    aboutItem.className = 'aboutItem';
    content.appendChild(aboutItem);
  }
}

export default renderAboutUs;
