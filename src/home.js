import { gel, crel } from './utils';

function renderHome() {
  const content = gel('content');

  const menu = crel('div');

  content.appendChild(menu);
}

export default renderHome;
