const h1Intro = document.querySelector("#h1Intro");
const miniIntro = document.querySelector("#miniIntro");
const quickIntro = document.querySelector(".quickIntro");
const currentlyStudying = document.querySelector(".currentlyStudying");

// lang buttons

const deButton = document.querySelector("#deButton");
const enButton = document.querySelector("#enButton");

//german language switch
deButton.addEventListener("click", function(){
      h1Intro.textContent = "Hallo, mein Name ist Fiona";
      miniIntro.textContent = "Ich bin ein Frontend Entwickler aus Deutschland";
      quickIntro.textContent = "Ich bin eine 19 jährige Studentin und selbst gelernte Frontend Entwicklerin";
      currentlyStudying.textContent = "und studiere derzeitig Geschichte und Informatik an der Friedrich Schiller Universität";
})


// english language switch
enButton.addEventListener("click", function(){
      h1Intro.textContent = "Hello, My Name is Fiona";
      miniIntro.textContent = "Im a FrontEnd Developer based in Germany";
      quickIntro.textContent = "Im a 19 year old student and self-taught FrontEnd Developer";
      currentlyStudying.textContent = "currently studying History and Computer Science at the Friedrich Schiller University ";
})

console.log("Hello")