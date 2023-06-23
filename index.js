const fs = require('fs');

// Write data into the file

fs.writeFileSync('myfile.txt','Hello Sir, My name is Sourav Rajput');


// Read data into the file
// const readBufferData = fs.readFileSync('myfile.txt');

// const readOriginalData = readBufferData.toString();

// console.log(readOriginalData);

//Append more data to the file and remember previous written data should not be lost or overwritten.

fs.appendFileSync("myfile.txt"," Hello EveryOne");


// .Rename the file.

// fs.renameSync("myfile.txt","myfirstfile.txt");

// .Delete the file.

// fs.unlinkSync("delete.txt");




