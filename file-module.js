const { log } = require('console');
const file = require('fs');

//syncronous
file.writeFileSync('./content.txt',"hello world");
file.appendFileSync('./content.txt'," hello world");  

const read = file.readFileSync('./content.txt','utf-8');
console.log(read);

//asyncronous
file.readFile('./content.txt','utf-8',(err,data)=>{
    console.log(data);
});