const generator = require ("generate-password");

 const password = generator.generate({
   length: 10,
   strict: true,
 });
 console.log(password);