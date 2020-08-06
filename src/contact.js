import { gel, crel } from './utils';

function renderContact() {
  const content = gel('content');

  const infoItem = crel('div');
  infoItem.className = 'contactItem';

  const name = crel('h1');
  name.textContent = 'Karma : Sea Side Restaurant';
  infoItem.appendChild(name);

  const address = crel('h1');
  address.textContent = 'Apples\' River Beach - Ios Island 84001';
  infoItem.appendChild(address);

  const call = crel('h1');
  call.textContent = 'Reserve : +30 2568 300 123';
  infoItem.appendChild(call);

  const hours = crel('h1');
  hours.textContent = 'Open : 24 hours 365 days/year';
  infoItem.appendChild(hours);

  content.appendChild(infoItem);

  const mapItem = crel('div');
  mapItem.className = 'contactItem mapItem';
  content.appendChild(mapItem);
}

export default renderContact;