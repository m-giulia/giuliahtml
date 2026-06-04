window.onscroll = function() {glassmorph()};

function glassmorph() {
  if (document.documentElement.scrollTop > 2) {
    document.getElementsByTagName('header')[0].className = 'glassmorph';
  } else {
    document.getElementsByTagName('header')[0].className = '';
  }
}

function controllaForm() { 
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let checkbox = document.getElementById('checkbox_id');
    const classRequired = 'obbligatorio';

    if (nome.value === '' && nome.className != classRequired ) {
        nome.className = classRequired;
        nome.placeholder = 'Obbligatorio';
    }
    if (email.value === '' && email.className != classRequired ) {
        email.className = classRequired;
        email.placeholder = 'Obbligatorio';
    }
    if (checkbox.checked == false) { 
        checkbox.className = classRequired;
    }
    
}
let showcase = document.getElementsByClassName('showcase')[0];
function sortAZ() { 
    showcase.style.flexDirection = 'row';
}
function sortZA() { 
    showcase.style.flexDirection = 'row-reverse';
}