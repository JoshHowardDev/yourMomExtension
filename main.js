function onLoad() {
  replaceText();
  rickRoll();
  darkDays();
  popVote();
}
onLoad();

function replaceText() {
  const commonTags = ['p', 'span', 'strong', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  for (let i = 0; i < commonTags.length; i++) {
    const relativeElements = document.querySelectorAll(commonTags[i]);
    for (let j = 0; j < relativeElements.length; j++) {
      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('can', 'cannot');
      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('Can', 'Cannot');

      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('will', 'won\'t');
      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('Will', 'won\'t');

      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('Should', 'Shouldn\'t');
      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('should', 'shouldn\'t');

      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('Would', 'Wouldn\'t');
      relativeElements[j].innerText = relativeElements[j].innerText.replaceAll('would', 'wouldn\'t');
     
      const overlyEarnestQuotes = ["Live, laugh, love.", "You have to look through the rain to see the rainbow.", "Dance like nobody is watching.", "Keep calm and carry on.", "You have to kiss a lot of frogs before you find your prince.", "Everything happens for a reason.", "If life gives you lemons, make lemonade.", "You'll find love when you stop looking.", "You miss 100% of the shots you don't take."]
      const startString = '"'
      const startStringIndex = relativeElements[j].innerText.indexOf(startString)
      const endString = '" said'
      const endStringIndex = relativeElements[j].innerText.indexOf(endString)
      //If innerText includes both the start string and the end string
      if (startStringIndex >= 0 && endStringIndex >= 0) {
        //Create string between the start and end string
        const stringToReplace = relativeElements[j].innerText.slice(startStringIndex, endStringIndex + endString.length)
        
        const quote = '"' + overlyEarnestQuotes[Math.floor(Math.random() * (overlyEarnestQuotes.length + 1))] + '" said'
        
        relativeElements[j].innerText = relativeElements[j].innerText.replace(stringToReplace, quote);
      }


    }
  }
}

function rickRoll() {
  let keyspressed = "12345"
  window.addEventListener("keydown", (event) => {
    console.log(event.code)
    keyspressed = keyspressed.slice(1) + event.code.slice(-1)
    if (keyspressed === 'NEVER') {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=43s', '_blank');
    }
  })
}




function darkDays() {
  function changeOpacity(num) {
    const body = document.querySelector('body');
    body.style.opacity = num;
  }

  let scrollHeight = document.querySelector('body').scrollHeight;
  let lastKnownScrollPosition = 0;

  document.addEventListener('scroll', (e) => {
    lastKnownScrollPosition = window.scrollY;
    changeOpacity(((scrollHeight - lastKnownScrollPosition) / scrollHeight) * 1.8);
  });
}

function popVote() {
  
  const newDiv = document.createElement('div');
  newDiv.innerText = 'VOTE FOR KSENIA AND JOSH\n\nBEST EXTENSION';
  newDiv.setAttribute('id', 'voteDiv86971869891')
  newDiv.style.opacity = 0.9;
  newDiv.style.width = '100vw';
  newDiv.style.height = '100vh';
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  newDiv.style.alignItems = 'center';
  newDiv.style.fontSize = '5rem';
  newDiv.style.color = 'red';
  newDiv.style.textAlign = 'center';
  newDiv.style.position = 'fixed';
  newDiv.style.fontWeight = 'bold';
  newDiv.style.left = '0';
  newDiv.style.top = '0';
  newDiv.style.zIndex = '200';
  // newDiv.style.WebkitTextStroke = '1px red'
  newDiv.style.visibility = 'hidden';
  document.querySelector('body').prepend(newDiv);
  


  const images = document.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('mouseover', showVote);
  })
}

// h1 {
//   -webkit-text-stroke: 2px black; /* width and color */

//   font-family: sans; color: yellow;
// }

function showVote() {

  console.log('show vote got here')

  document.querySelector('#voteDiv86971869891').style.visibility = 'visible';

  setTimeout(() => {
    document.querySelector('#voteDiv86971869891').style.visibility = 'hidden';
  }, 500);
}