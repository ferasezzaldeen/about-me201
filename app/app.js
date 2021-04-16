'use strict';

let mark=0;
let nAme='';
function vName(){

  mark=0;
  nAme=prompt('please enter your name','name');
  alert('welcome '+nAme+' we are gona play alittel game so you can know me better, a simple yes or no question');
  console.log(nAme);
  console.log(mark);
}
vName();



function background(){
  let study=prompt('do you think that I have studied IT before??','yes or no').toLowerCase();
  while(study!=='yes'&&study!=='no'){
    alert('please answer with yes or no');
    study=prompt('do you think that I have studied IT before??','yes or no').toLowerCase();
  }
  if(study==='yes'){
    alert('actully no, my background is civil engineering');
  }
  if(study==='no'){
    alert('thats right, I didnt study IT. I studied civil engineering');
    mark++;
  }
  console.log(study);
  console.log(mark);
}
background();




function vAge(){
  let age=prompt('do you think that im over 30 years old??','yes or no').toLowerCase();
  console.log('age',age);
  while(age!=='yes' && age!=='no'){
    alert('please answer with yes or no');
    age=prompt('do you think that im over 30 years old??','yes or no').toLowerCase();
  }
  if(age==='yes'){
    alert('actully no,Im 24 years old');
  }
  if(age==='no'){
    alert('thats right, Im 24 years old');
    mark++;
  }
  console.log(age);
  console.log(mark);
}
vAge();

function experience(){
  let exper=prompt('do you think that I have any working experienc in web development ?? ','yes or no').toLowerCase();
  while(exper!=='yes'&&exper!=='no'){
    alert('please answer with yes or no');
    exper=prompt('do you think that I have any working experienc in development ??','yes or no').toLowerCase();
  }
  if(exper==='yes'){
    alert('actully no,Im still studing');
  }
  if(exper==='no'){
    alert('thats right, Im still studing');
    mark++;
  }
  console.log(exper);
  console.log(mark);
}
experience();
function prefer(){
  let past=prompt('do you think that I prefer web development over civil engineering??','yes or no').toLowerCase();
  while(past!=='yes'&&past!=='no'){
    alert('please answer with yes or no');
    past=prompt('do you think that I prefer web development over civil engineering?? ??','yes or no').toLowerCase();
  }
  if(past==='yes'){
    alert('yes of course');
    mark++;
  }
  if(past==='no'){
    alert('actully I do');
  }
  console.log(past);
  console.log(mark);
}
prefer();
function barcelona(){
  let footBall=prompt('do you think that Im a barca fan ??','yes or no').toLowerCase();
  while(footBall!=='yes'&&footBall!=='no'){
    alert('please answer with yes or no');
    footBall=prompt('do you think that Im a barca fan ??','yes or no').toLowerCase();
  }
  if(footBall==='yes'){
    alert('yes IM  CULE');
    mark++;
  }
  if(footBall==='no'){
    alert('actully Im a barca fan');

  }
  console.log(footBall);
  console.log(mark);
}
barcelona();
let i=0;
function birthday(){
  let year='';
  do{
    year=prompt('in which year I have been born??','in the 1990s').toLowerCase();
    if(year==='1996'){
      alert('yes that is correct');
      mark++;
    }
    if(i<3&&year!=='1996'){
      alert('try again');
    }
    i++;
  }
  while(i!==4&&year!=='1996');
  if(i===4){
    alert('the right answer is 1996');
  }
  console.log(year);
  console.log(mark);
}
birthday();
function favorite(){
  let fruit=['orange','banana','apple','avocado','cherries','clementina','figs'];
  i=0;
  let answ='';
  do{
    answ=prompt('can you gess one of my favorite fruits??').toLowerCase();
    if(answ===fruit[0]||answ===fruit[1]||answ===fruit[2]||answ===fruit[3]||answ===fruit[4]||answ===fruit[5]||answ===fruit[6]){
      alert('yes '+answ+' is one of my favarite fruits');
      mark++;
    }
    if(i<5&&answ!==fruit[0]&&answ!==fruit[1]&&answ!==fruit[2]&&answ!==fruit[3]&&answ!==fruit[4]&&answ!==fruit[5]&&answ!==fruit[6]){
      alert('not correct, try again');
    }
    if(i===5){
      alert('you lost your chances');
    }
    i++;
    console.log(answ);
    console.log(mark);
  }
  while(i!==6&&answ!==fruit[0]&&answ!==fruit[1]&&answ!==fruit[2]&&answ!==fruit[3]&&answ!==fruit[4]&&answ!==fruit[5]&&answ!==fruit[6]);
  if(i===6){
    alert('my favorits fruts are orange, banana, apple, avocado, cherries, clementina and figs');
  }}
favorite();
alert('after you finished these 7 question you have '+mark+' out of 7');

alert('thank you '+nAme+'. I think you have a good info about me, if you need more information, you can contact me via email at ferasezaldeen@gmail.com');

