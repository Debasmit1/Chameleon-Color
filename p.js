let main = document.body;

for(let i = 1;i <= 16;i++){
  const myDiv = document.createElement('div');

  main.appendChild(myDiv);
}

function random(nos){
  return Math.floor(Math.random() * (nos+1));
}

bgChange = () => {
  const rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  return rndColor;
}

const divs = document.querySelectorAll('div');

for(let i = 0;i < divs.length; i++){
  divs[i].onclick = e => {
    e.target.style.backgroundColor = bgChange();
  }
}