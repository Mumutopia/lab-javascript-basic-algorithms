// Iteration 1: Names and Input
let hacker1 = "Consta";
console.log(hacker1);
let hacker2 = "Constan";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("the driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else { console.log("Wow, you both have equally long names, " + hacker1.length + " characters!") };

// Iteration 3: Loops

let newName = ""

for (let i = 0; i < hacker1.length; i++) {
    newName += (hacker1[i] + " ").toUpperCase();
}
console.log(newName);

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName);

//MANQUE LE 3.3 INCOMPLET

if (hacker1 === hacker2) {
    console.log("What you both have the same name ?");
}
// else if (hacker1.length > hacker2.length){
else {
    let smallerhacker =""
    if (hacker1.length > hacker2.length) {smallerhacker = hacker1}
    for (let i = 0; i < hacker1.length; i++) {
        if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)) {
            continue;
        }
        else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
            console.log('Yo, the navigator goes first definitely.');
            break;
        }
        else {
            console.log("The driver's name goes first.");
            break;
        }
    }
}


//BONUS 1

let loremVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lorem consectetur, pellentesque nunc sed, sodales nunc. Aenean congue varius ante vitae mattis. Phasellus tempus quam interdum, gravida elit at, viverra odio. Proin quis egestas justo. Nam purus ipsum, auctor vitae cursus vel, vehicula sed orci. Aenean a nisi vel lacus auctor pharetra at sit amet orci. Pellentesque aliquam, sapien eget pellentesque ullamcorper, quam leo tristique purus, non tristique orci elit quis nunc.Nunc tempus tortor in libero ultricies suscipit.Duis cursus varius tincidunt.Phasellus ac lorem sit amet velit iaculis posuere.Nunc feugiat risus lorem, pharetra fermentum tellus malesuada ac.Aliquam erat volutpat.Sed nisi nibh, finibus a fringilla vitae, eleifend eget lectus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Praesent et maximus turpis.Nam rutrum nunc eget consequat aliquet.Donec et tortor augue.Proin condimentum rhoncus quam, ut dapibus risus interdum non.Donec dignissim convallis lacus sit amet ultricies.Phasellus non lorem purus.Sed tristique justo et cursus vulputate.Duis rhoncus erat vitae risus aliquet, venenatis accumsan dolor consequat.Sed aliquet posuere augue non luctus.Etiam nisl nibh, commodo mollis commodo ut, posuere id est.Pellentesque lacinia blandit orci sit amet pellentesque.Mauris erat neque, volutpat quis ex venenatis, accumsan eleifend purus.Morbi blandit augue quis nisl consequat, id semper lacus dictum.Vivamus scelerisque cursus est, vel scelerisque elit posuere sit amet.Proin posuere quis arcu ut interdum.Nullam venenatis, erat eget cursus commodo, nunc purus semper nisl, eu dignissim dui massa et leo.Aenean eu malesuada leo.Nunc at lectus pulvinar, semper arcu a, molestie purus.Pellentesque ac tortor dui.`;


const myArr = loremVar.split(" ");
console.log(myArr.length);

let myArr2 = loremVar.split(" et ");
console.log(myArr2.length - 1); 

//BONUS 2

//TO BE CONTINUED
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
let newPhrase = "";

let phraseToCheck = "A man, a plan, a canal, Panama!";
for (let i=0; i >phraseToCheck.length; i ++) {
   if (phraseToCheck[i].toLowerCase() != phraseToCheck[i].toUpperCase()){
       newPhrase += phraseToCheck[i]
   } 
}
console.log(newPhrase);

