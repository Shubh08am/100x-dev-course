//if this is an array of number with atleast 1 element return true else false

const zod = require('zod');

function validateInput(arr){
  const schema = zod.array(zod.number()) ; 
  const response = schema.safeParse(arr);
  console.log(response);
}
validateInput([1,2,3]); // {success : true data [1,2,3]} 
validateInput([1,'2',3]); // {success : false error } 


// zod schema for an object
/*{
    email: string => email format
    password : atleast 8 letters
    country : "IN" , "US"
}*/


const zod = require('zod');
function validateInput(obj){

  const schema=zod.object({
      email: zod.string().email(),
      password: zod.string().min(8),
      country: zod.literal("IN").or(zod.literal("US"))
  })
  const response = schema.safeParse(obj);
  console.log(response);
}
validateInput({
  email: "shubh08am@gmail.com",
  password: "123456789",
  country: "IN"
});