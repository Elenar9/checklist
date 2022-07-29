var item, resolutions, emojis;


let element_list = document.getElementById('list');
resolutions = ['Yoga Vinyasa', 'Pilates', 'Tibetan Bowls', 'Meditation', 'Tai Chi', 'Aromatherapy'];
emojis = ['🧘‍♀️', '🤸🏽‍♂️', '🥣', '🧎🏽‍♀️', '㊙️', '🪔'];

resolutions.forEach((item) => {
  while (!!resolutions.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_list2 = document.getElementById('list');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = resolutions.shift();

    new_li.appendChild(new_span);
    let new_span2 = document.createElement('span');
    new_span2.innerText = emojis.shift();

    new_li.appendChild(new_span2);
    let new_span3 = document.createElement('span');
    if (resolutions == true) {
      item = resolutions.shift();
    }

    new_li.appendChild(new_span3);

    element_list2.appendChild(new_li);
  }
});
