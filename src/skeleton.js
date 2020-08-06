import { gel, crel } from './utils';
import facebookImg from '../resources/images/facebook-24.png';
import twitterImg from '../resources/images/twitter-24.png';
import instaImg from '../resources/images/instagram-24.png';
import pinteImg from '../resources/images/pinterest-24.png';
import googleImg from '../resources/images/google-plus-4-24.png';

// const linkImage = crel('link');
// linkImage.setAttribute('', '');

// document.head.appendChild('');

const footer = gel('footer');

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
