// My code begins here!!!
const initBlock = document.querySelector('#initBlock');
const konamiCodeKeys = [
  '38', '38', '40', '40',
  '37', '39', '37', '39',
  '66', '65', '32',
];
const length = konamiCodeKeys.length;
const konamiCodeString = konamiCodeKeys.join('');
let inputKeys = [];
let showUnicorn = false;

document.addEventListener('keyup', (event) => {
  if (showUnicorn) {
    cornify_add();
    return;
  }
  const keyCode = event.keyCode;
  if (length === inputKeys.length) {
    inputKeys.shift();
  }
  inputKeys.push(keyCode.toString());
  const inputKeysString = inputKeys.join('');
  console.log('konamiCodeString', konamiCodeString);
  console.log('inputKeysString', inputKeysString);
  if (konamiCodeString !== inputKeysString) {
    return;
  }
  console.log('DING DING!');
  initBlock.style.display = 'none';
  showUnicorn = true;
  cornify_add();
});




// Copy from http://www.cornify.com/js/cornify.js
var cornify_count = 0;
var cornify_add = function () {
  cornify_count += 1;
  var cornify_url = 'https://www.cornify.com/';
  var div = document.createElement('div');
  div.style.position = 'fixed';
  var numType = 'px';
  var heightRandom = Math.random() * .75;
  var windowHeight = 768;
  var windowWidth = 1024;
  var height = 0;
  var width = 0;
  var de = document.documentElement;
  if (typeof (window.innerHeight) == 'number') {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  } else if (de && de.clientHeight) {
    windowHeight = de.clientHeight;
    windowWidth = de.clientWidth;
  } else {
    numType = '%';
    height = Math.round(height * 100) + '%';
  }

  div.onclick = cornify_add;
  div.style.zIndex = 10;
  div.style.outline = 0;

  if (cornify_count == 15) {
    div.style.top = Math.max(0, Math.round((windowHeight - 530) / 2)) + 'px';
    div.style.left = Math.round((windowWidth - 530) / 2) + 'px';
    div.style.zIndex = 1000;
  } else {
    if (numType == 'px') div.style.top = Math.round(windowHeight * heightRandom) + numType;
    else div.style.top = height;
    div.style.left = Math.round(Math.random() * 90) + '%';
  }

  var img = document.createElement('img');
  var currentTime = new Date();
  var submitTime = currentTime.getTime();
  if (cornify_count == 15) submitTime = 0;
  img.setAttribute('src', cornify_url + 'getacorn.php?r=' + submitTime + '&url=' + document.location.href);
  var ease = "all .1s linear";
  div.style.WebkitTransition = ease;
  div.style.WebkitTransform = "rotate(1deg) scale(1.01,1.01)";
  div.style.transition = "all .1s linear";
  div.onmouseover = function () {
    var size = 1 + Math.round(Math.random() * 10) / 100;
    var angle = Math.round(Math.random() * 20 - 10);
    var result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
    this.style.transform = result;
    this.style.WebkitTransform = result;
  };
  div.onmouseout = function () {
    var size = .9 + Math.round(Math.random() * 10) / 100;
    var angle = Math.round(Math.random() * 6 - 3);
    var result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
    this.style.transform = result;
    this.style.WebkitTransform = result;
  };
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div);
  div.appendChild(img);

  // Add stylesheet.
  if (cornify_count == 5) {
    var cssExisting = document.getElementById('__cornify_css');
    if (!cssExisting) {
      var head = document.getElementsByTagName("head")[0];
      var css = document.createElement('link');
      css.id = '__cornify_css';
      css.type = 'text/css';
      css.rel = 'stylesheet';
      css.href = 'https://www.cornify.com/css/cornify.css';
      css.media = 'screen';
      head.appendChild(css);
    }
    cornify_replace();
  }

  cornify_updatecount();
};

var cornify_updatecount = function () {
  var p = document.getElementById('cornifycount');
  if (p == null) {
    var p = document.createElement('p');
    p.id = 'cornifycount';
    p.style.position = 'fixed';
    p.style.bottom = '5px';
    p.style.left = '0px';
    p.style.right = '0px';
    p.style.zIndex = '1000000000';
    p.style.color = '#ff00ff';
    p.style.textAlign = 'center';
    p.style.fontSize = '24px';
    p.style.fontFamily = "'Comic Sans MS', 'Comic Sans', 'Marker Felt', serif";
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(p);
  }
  if (cornify_count == 1) {
    p.innerHTML = cornify_count + ' UNICORN OR RAINBOW CREATED';
  } else {
    p.innerHTML = cornify_count + ' UNICORNS &AMP; RAINBOWS CREATED';
  }
  cornify_setcookie('cornify', cornify_count + '', 1000);
};

var cornify_setcookie = function (name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + value + "; " + expires;
};

var cornify_getcookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

cornify_count = parseInt(cornify_getcookie('cornify'));
if (isNaN(cornify_count)) {
  cornify_count = 0;
}

var cornify_replace = function () {
  // Replace text.
  var hc = 6;
  var hs;
  var h;
  var k;
  var words = ['Happy', 'Sparkly', 'Glittery', 'Fun', 'Magical', 'Lovely', 'Cute', 'Charming', 'Amazing',
               'Wonderful'
              ];
  while (hc >= 1) {
    hs = document.getElementsByTagName('h' + hc);
    for (k = 0; k < hs.length; k++) {
      h = hs[k];
      h.innerHTML = words[Math.floor(Math.random() * words.length)] + ' ' + h.innerHTML;
    }
    hc -= 1;
  }
};
