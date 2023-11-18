
const path = require('path');

// Example 1: Joining file paths
const filePath1 = '/path/to';
const filePath2 = 'file.txt';
const joinedPath = path.join(filePath1, filePath2);
console.log(joinedPath); // Output: /path/to/file.txt

// Example 2: Resolving file paths
const resolvedPath = path.resolve('path-module.js');
console.log(resolvedPath); // Output: /d:/Node JS/Node JS Tutorial Fee Code Camp/path-module.js

// Example 3: Getting the file extension
const fileExtension = path.extname('file.txt');
console.log(fileExtension); // Output: .txt

// Example 4: Getting the directory name
const directoryName = path.dirname('/path/to/file.txt');
console.log(directoryName); // Output: /path/to

// Example 5: Getting the base name (file name with extension)
const baseName = path.basename('/path/to/file.txt');
console.log(baseName); // Output: file.txt
