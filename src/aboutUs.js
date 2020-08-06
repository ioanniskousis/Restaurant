import { gel, crel } from './utils';

function renderGrabs(content) {
  const grabs = crel('div');
  grabs.className = 'aboutItem';
  grabs.style.backgroundImage = 'url("../resources/images/grabs.jpg")';

  const caption = crel('div');
  caption.className = 'aboutItemCaption';
  caption.innerHTML = 'Fresh Supplies Daily';
  grabs.appendChild(caption);

  content.appendChild(grabs);
}

function renderChefs(content) {
  const checfs = crel('div');
  checfs.className = 'aboutItem';
  checfs.style.backgroundImage = 'url("../resources/images/kitchen.jpg")';

  const caption = crel('div');
  caption.className = 'aboutItemCaption';
  caption.innerHTML = 'Passionate Chefs';
  checfs.appendChild(caption);

  const chef1 = crel('div');
  chef1.className = 'chef chef1';
  checfs.appendChild(chef1);

  const chef2 = crel('div');
  chef2.className = 'chef chef2';
  checfs.appendChild(chef2);

  const chef3 = crel('div');
  chef3.className = 'chef chef3';
  checfs.appendChild(chef3);

  const chef4 = crel('div');
  chef4.className = 'chef chef4';
  checfs.appendChild(chef4);

  content.appendChild(checfs);
}

function renderAtmosphaire(content) {
  const atmosphaire = crel('div');
  atmosphaire.className = 'aboutItem';
  atmosphaire.style.backgroundImage = 'url("../resources/images/atmosphaire.jpg")';

  const caption = crel('div');
  caption.className = 'aboutItemCaption';
  caption.innerHTML = 'Atmosphere of Sea';
  atmosphaire.appendChild(caption);

  content.appendChild(atmosphaire);
}

function renderAboutUs() {
  const content = gel('content');
  renderGrabs(content);
  renderChefs(content);
  renderAtmosphaire(content);
}

export default renderAboutUs;
