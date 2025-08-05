var heading = document.createElement('h2');

heading.textContent='Heading two from javaScript';
heading.id='abc';

var newPara = document.createElement('p');

newPara.textContent='This paragraph from Javascript';
newPara.id='xyz';

document.body.appendChild(heading);
document.body.appendChild(newPara);
