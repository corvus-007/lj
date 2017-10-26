'use strict';

const sentences = [{
  subject: 'JavaScript',
  verb: 'js',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}];

// ES6: деструктуризация объекта
function say({subject, verb, object}) {
  // строки шаблона
  console.log(`${subject} ${verb} ${object}`);
}
// for..of
for (let s of sentences) {
  say(s);
}