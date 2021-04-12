'use strict';
let nAme=prompt('please enter your name','name');
alert('welcome '+nAme+' we are gona play alittel game so you can know me better, a simple yes or no question');
let study=prompt('do you think that I have studied IT before??','yes or no').toLowerCase();
if(study!=='yes'&&study!=='no'){
  alert('please answer with yes or no');
  study=prompt('do you think that I have studied IT before??','yes or no').toLowerCase();
}
if(study==='yes'){
  alert('actully no, my background is civil engineering');
}
if(study==='no'){
  alert('thats right, I didnt study IT. I studied civil engineering');
}
let age=prompt('do you think that im over 30 years old??','yes or no').toLowerCase();
console.log('age',age);
if(age!=='yes' && age!=='no'){
  alert('please answer with yes or no');
  age=prompt('do you think that im over 30 years old??','yes or no').toLowerCase();
}
if(age==='yes'){
  alert('actully no,Im 24 years old');
}
if(age==='no'){
  alert('thats right, Im 24 years old');
}
let exper=prompt('do you think that I have any working experienc in IT ?? ','yes or no').toLowerCase();
if(exper!=='yes'&&exper!=='no'){
  alert('please answer with yes or no');
  exper=prompt('do you think that I have any working experienc in IT ??','yes or no').toLowerCase();
}
if(exper==='yes'){
  alert('actully no,Im still studing');
}
if(exper==='no'){
  alert('thats right, Im still studing');
}
let past=prompt('do you think that I prefer web development over civil engineering??','yes or no').toLowerCase();
if(past!=='yes'&&past!=='no'){
  alert('please answer with yes or no');
  past=prompt('do you think that I prefer web development over civil engineering?? ??','yes or no').toLowerCase();
}
if(past==='yes'){
  alert('yes of course');
}
if(past==='no'){
  alert('actully I do');
}
let footBall=prompt('do you think that Im a barca fan ??','yes or no').toLowerCase();
if(footBall!=='yes'&&footBall!=='no'){
  alert('please answer with yes or no');
  footBall=prompt('do you think that Im a barca fan ??','yes or no').toLowerCase();
}
if(footBall==='yes'){
  alert('yes IM  CULE');
}
if(footBall==='no'){
  alert('actully Im a barca fan');

}
alert('thank you '+nAme+'. I think you have a good info about me, if you need more information, you can contact me via email at ferasezaldeen@gmail.com');
