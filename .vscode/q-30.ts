var a = ('\nQ 30');
    console.log(a);

let username = ['ali', 'ahmed','arslan','usama','admin'];
for (let i = 0; i<username.length; i++){
if (username[i] == 'admin'){
  console.log('Hello admin would you like to see status report?');
}else {
console.log(`Hello ${username[i]}, thankyou for logging in again`);
}
 
}