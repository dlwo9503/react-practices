'use strict'; // 블록 스코프 변수(ES6)

const users = [{
  no: 0,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 1,
  name: '둘리',
  email: 'dooly@gmail.com'
}]; // 객체분해(ES6)

function print({
  no,
  name,
  email
}) {
  // 탬플릿 문자열(ES6)
  console.log(`${no} : ${name} : ${email}`);
}

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  let user = _users[_i];
  print(user);
}
