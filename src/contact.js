import { gel, crel } from './utils';

function renderContact() {
  const content = gel('content');

  let contactItem;
  for (let index = 0; index < 3; index += 1) {
    contactItem = crel('div');
    contactItem.className = 'contactItem';
    content.appendChild(contactItem);
  }
}

export default renderContact;