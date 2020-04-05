const arrKeys = [
  [
    {
      textRus: 'ё', textRusShift: 'Ё', textEng: '`', textEngShift: '~', code: 'Backquote',
    },
    {
      textRus: '1', textRusShift: '!', textEng: '1', textEngShift: '!', code: 'Digit1',
    },
    {
      textRus: '2', textRusShift: '"', textEng: '2', textEngShift: '@', code: 'Digit2',
    },
    {
      textRus: '3', textRusShift: '№', textEng: '3', textEngShift: '#', code: 'Digit3',
    },
    {
      textRus: '4', textRusShift: ';', textEng: '4', textEngShift: '$', code: 'Digit4',
    },
    {
      textRus: '5', textRusShift: '%', textEng: '5', textEngShift: '%', code: 'Digit5',
    },
    {
      textRus: '6', textRusShift: ':', textEng: '6', textEngShift: '^', code: 'Digit6',
    },
    {
      textRus: '7', textRusShift: '?', textEng: '7', textEngShift: '&', code: 'Digit7',
    },
    {
      textRus: '8', textRusShift: '*', textEng: '8', textEngShift: '*', code: 'Digit8',
    },
    {
      textRus: '9', textRusShift: '(', textEng: '9', textEngShift: '(', code: 'Digit9',
    },
    {
      textRus: '0', textRusShift: ')', textEng: '0', textEngShift: ')', code: 'Digit0',
    },
    {
      textRus: '-', textRusShift: '_', textEng: '-', textEngShift: '_', code: 'Minus',
    },
    {
      textRus: '=', textRusShift: '+', textEng: '=', textEngShift: '+', code: 'Equal',
    },
    {
      textRus: 'Backspace', textRusShift: 'Backspace', textEng: 'Backspace', textEngShift: 'Backspace', code: 'Backspace',
    },
  ],
  [
    {
      textRus: 'Tab', textRusShift: 'Tab', textEng: 'Tab', textEngShift: 'Tab', code: 'Tab',
    },
    {
      textRus: 'й', textRusShift: 'Й', textEng: 'q', textEngShift: 'Q', code: 'KeyQ',
    },
    {
      textRus: 'ц', textRusShift: 'Ц', textEng: 'w', textEngShift: 'W', code: 'KeyW',
    },
    {
      textRus: 'у', textRusShift: 'У', textEng: 'e', textEngShift: 'E', code: 'KeyE',
    },
    {
      textRus: 'к', textRusShift: 'К', textEng: 'r', textEngShift: 'R', code: 'KeyR',
    },
    {
      textRus: 'е', textRusShift: 'Е', textEng: 't', textEngShift: 'T', code: 'KeyT',
    },
    {
      textRus: 'н', textRusShift: 'Н', textEng: 'y', textEngShift: 'Y', code: 'KeyY',
    },
    {
      textRus: 'г', textRusShift: 'Г', textEng: 'u', textEngShift: 'U', code: 'KeyU',
    },
    {
      textRus: 'ш', textRusShift: 'Ш', textEng: 'i', textEngShift: 'I', code: 'KeyI',
    },
    {
      textRus: 'щ', textRusShift: 'Щ', textEng: 'o', textEngShift: 'O', code: 'KeyO',
    },
    {
      textRus: 'з', textRusShift: 'З', textEng: 'p', textEngShift: 'P', code: 'KeyP',
    },
    {
      textRus: 'х', textRusShift: 'Х', textEng: '[', textEngShift: '{', code: 'BracketLeft',
    },
    {
      textRus: 'ъ', textRusShift: 'Ъ', textEng: ']', textEngShift: '}', code: 'BracketRight',
    },
    {
      textRus: '\\', textRusShift: '/', textEng: '\\', textEngShift: '|', code: 'Backslash',
    },
    {
      textRus: 'Delete', textRusShift: 'Delete', textEng: 'Delete', textEngShift: 'Delete', code: 'Delete',
    },
  ],
  [
    {
      textRus: 'CapsLock', textRusShift: 'CapsLock', textEng: 'CapsLock', textEngShift: 'CapsLock', code: 'CapsLock',
    },
    {
      textRus: 'ф', textRusShift: 'Ф', textEng: 'a', textEngShift: 'A', code: 'KeyA',
    },
    {
      textRus: 'ы', textRusShift: 'Ы', textEng: 's', textEngShift: 'S', code: 'KeyS',
    },
    {
      textRus: 'в', textRusShift: 'В', textEng: 'd', textEngShift: 'D', code: 'KeyD',
    },
    {
      textRus: 'а', textRusShift: 'А', textEng: 'f', textEngShift: 'F', code: 'KeyF',
    },
    {
      textRus: 'п', textRusShift: 'П', textEng: 'g', textEngShift: 'G', code: 'KeyG',
    },
    {
      textRus: 'р', textRusShift: 'Р', textEng: 'h', textEngShift: 'H', code: 'KeyH',
    },
    {
      textRus: 'о', textRusShift: 'О', textEng: 'j', textEngShift: 'J', code: 'KeyJ',
    },
    {
      textRus: 'л', textRusShift: 'Л', textEng: 'k', textEngShift: 'K', code: 'KeyK',
    },
    {
      textRus: 'д', textRusShift: 'Д', textEng: 'l', textEngShift: 'L', code: 'KeyL',
    },
    {
      textRus: 'ж', textRusShift: 'Ж', textEng: ';', textEngShift: ';', code: 'Semicolon',
    },
    {
      textRus: 'э', textRusShift: 'Э', textEng: '\'', textEngShift: '"', code: 'Quote',
    },
    {
      textRus: 'Enter', textRusShift: 'Enter', textEng: 'Enter', textEngShift: 'Enter', code: 'Enter',
    },
  ],
  [
    {
      textRus: 'Shift', textRusShift: 'Shift', textEng: 'Shift', textEngShift: 'Shift', code: 'ShiftLeft',
    },
    {
      textRus: 'я', textRusShift: 'Я', textEng: 'z', textEngShift: 'Z', code: 'KeyZ',
    },
    {
      textRus: 'ч', textRusShift: 'Ч', textEng: 'x', textEngShift: 'X', code: 'KeyX',
    },
    {
      textRus: 'с', textRusShift: 'С', textEng: 'c', textEngShift: 'C', code: 'KeyC',
    },
    {
      textRus: 'м', textRusShift: 'М', textEng: 'v', textEngShift: 'V', code: 'KeyV',
    },
    {
      textRus: 'и', textRusShift: 'И', textEng: 'b', textEngShift: 'B', code: 'KeyB',
    },
    {
      textRus: 'т', textRusShift: 'Т', textEng: 'n', textEngShift: 'N', code: 'KeyN',
    },
    {
      textRus: 'ь', textRusShift: 'Ь', textEng: 'm', textEngShift: 'M', code: 'KeyM',
    },
    {
      textRus: 'б', textRusShift: 'Б', textEng: ',', textEngShift: '<', code: 'Comma',
    },
    {
      textRus: 'ю', textRusShift: 'Ю', textEng: '.', textEngShift: '>', code: 'Period',
    },
    {
      textRus: '.', textRusShift: ',', textEng: '/', textEngShift: '?', code: 'Slash',
    },
    {
      textRus: '↑', textRusShift: '↑', textEng: '↑', textEngShift: '↑', code: 'ArrowUp',
    },
    {
      textRus: 'Shift', textRusShift: 'Shift', textEng: 'Shift', textEngShift: 'Shift', code: 'ShiftRight',
    },
  ],
  [
    {
      textRus: 'Ctrl', textRusShift: 'Ctrl', textEng: 'Ctrl', textEngShift: 'Ctrl', code: 'ControlLeft',
    },
    {
      textRus: 'Win', textRusShift: 'Win', textEng: 'Win', textEngShift: 'Win', code: 'MetaLeft',
    },
    {
      textRus: 'Alt', textRusShift: 'Alt', textEng: 'Alt', textEngShift: 'Alt', code: 'AltLeft',
    },
    {
      textRus: '', textRusShift: '', textEng: '', textEngShift: '', code: 'Space',
    },
    {
      textRus: 'Alt', textRusShift: 'Alt', textEng: 'Alt', textEngShift: 'Alt', code: 'AltRight',
    },
    {
      textRus: '←', textRusShift: '←', textEng: '←', textEngShift: '←', code: 'ArrowLeft',
    },
    {
      textRus: '↓', textRusShift: '↓', textEng: '↓', textEngShift: '↓', code: 'ArrowDown',
    },
    {
      textRus: '→', textRusShift: '→', textEng: '→', textEngShift: '→', code: 'ArrowRight',
    },
    {
      textRus: 'Ctrl', textRusShift: 'Ctrl', textEng: 'Ctrl', textEngShift: 'Ctrl', code: 'ControlRight',
    },
  ],
];

let activeShift = false;
let activeCapsLock = false;
let downCapsLock = false;
let activeLang = localStorage.getItem('lang');
if (!activeLang) {
  activeLang = 'ru';
  localStorage.setItem('lang', activeLang);
}

function initKeys(shift = false, capslock = false) {
  arrKeys.forEach((arr) => {
    arr.forEach((item) => {
      let text = '';
      if (activeLang === 'ru') text = (shift) ? item.textRusShift : item.textRus;// русский
      if (activeLang === 'en') text = (shift) ? item.textEngShift : item.textEng;// английский

      if (capslock) {
        if (item.code.indexOf('Key') !== -1 || item.code === 'Backquote' || item.code === 'BracketLeft' || item.code === 'BracketRight' || item.code === 'Semicolon' || item.code === 'Quote' || item.code === 'Comma' || item.code === 'Period') text = (activeShift) ? text.toLowerCase() : text.toUpperCase();
      }

      document.querySelector(`.keyboard__key[key="${item.code}"]`).innerHTML = text;
    });
  });
}

function eventClick(key) {
  document.querySelector(`.keyboard__key[key="${key}"]`).classList.add('active');

  const textarea = document.getElementById('textarea');

  switch (key) {
    case 'Tab':
      textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'Backspace':
      if (textarea.selectionStart !== 0) textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'select');
      break;
    case 'Delete':
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'select');
      break;
    case 'Space':
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'Enter':
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
      break;
    case 'CapsLock':
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'MetaLeft':
      break;
    default:
      textarea.value += document.querySelector(`.keyboard__key[key="${key}"]`).innerText;
      break;
  }
}

/*------------------------------------------------------------------------------------------------*/

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && !activeShift) { // нажали shift
    activeShift = true;
    initKeys(activeShift, activeCapsLock);
  }

  if (event.key === 'CapsLock') { // нажали capslock
    if (!downCapsLock) {
      downCapsLock = true;
      document.querySelector('.keyboard__key[key="CapsLock"]').classList.toggle('active');
      activeCapsLock = !(activeCapsLock);
      initKeys(activeShift, activeCapsLock);
    }
  }

  if (document.querySelector(`.keyboard__key[key="${event.code}"]`) && event.key !== 'CapsLock') { // событие ввода
    event.preventDefault();
    eventClick(event.code);
  }
});

document.addEventListener('keyup', (event) => {
  if (!event.shiftKey && activeShift) { // отпустили shift
    activeShift = false;
    initKeys(activeShift, activeCapsLock);
  }

  if (event.key === 'CapsLock') { // отпустили capslock
    downCapsLock = false;
  }

  if ((event.key === 'Alt' && event.shiftKey) || (event.key === 'Shift' && event.altKey)) { // смена языка
    activeLang = (activeLang === 'ru') ? 'en' : 'ru';
    localStorage.setItem('lang', activeLang);
    initKeys();
  }

  if (document.querySelector(`.keyboard__key[key="${event.code}"]`) && event.key !== 'CapsLock') { // выкл активность
    event.preventDefault();
    document.querySelector(`.keyboard__key[key="${event.code}"]`).classList.remove('active');
  }
});

/*------------------------------------------------------------------------------------------------*/

let mouseClick = false;
let mouseKey = false;

document.addEventListener('mousedown', (event) => {
  mouseClick = event.toElement;
  mouseKey = mouseClick.getAttribute('key');

  if ((mouseKey === 'ShiftLeft' && !activeShift) || (mouseKey === 'ShiftRight' && !activeShift)) { // нажали shift
    activeShift = true;
    initKeys(activeShift, activeCapsLock);
  }

  if (mouseKey === 'CapsLock') { // нажали capslock
    if (!downCapsLock) {
      downCapsLock = true;
      document.querySelector('.keyboard__key[key="CapsLock"]').classList.toggle('active');
      activeCapsLock = !(activeCapsLock);
      initKeys(activeShift, activeCapsLock);
    }
  }

  if (document.querySelector(`.keyboard__key[key="${mouseKey}"]`) && mouseKey !== 'CapsLock') { // событие ввода
    event.preventDefault();
    eventClick(mouseKey);
  }
});

document.addEventListener('mouseup', (event) => {
  if ((mouseKey === 'ShiftLeft' && activeShift) || (mouseKey === 'ShiftRight' && activeShift)) { // отпустили shift
    activeShift = false;
    initKeys(activeShift, activeCapsLock);
  }

  if (mouseKey === 'CapsLock') { // отпустили capslock
    downCapsLock = false;
  }

  if (mouseClick && mouseKey !== 'CapsLock') {
    event.preventDefault();
    mouseClick.classList.remove('active');
    mouseClick = false;
    mouseKey = false;
  }
});

/*------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
  let keyboardData = '<div id="keyboard" class="keyboard">';
  keyboardData += '<textarea id="textarea" class="textarea" rows="5"></textarea>';

  keyboardData += '<div class="keyboard__keys">';
  arrKeys.forEach((arr) => {
    keyboardData += '<div class="keyboard__row">';
    arr.forEach((item) => {
      keyboardData += `<div class="keyboard__key" key="${item.code}"></div>`;
    });
    keyboardData += '</div>';
  });
  keyboardData += '</div>';

  keyboardData += '</div>';

  keyboardData += '<p>Клавиатура создана в операционной системе Windows</p>';
  keyboardData += '<p>Для переключения языка комбинация: левыe shift + alt</p>';
  document.body.innerHTML = keyboardData;

  initKeys();
});
