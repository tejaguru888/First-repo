const fs = require('fs/promises')
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile("filename.txt", "Hello", (err) => {
		console.log(err);
	})
}
myFileWriter();
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile("filename.txt", { encoding: "utf8" }, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	})
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile("filename.txt", "\n World ", (data) => {
		console.log(data);
	})
}
const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink("filename.txt", (err) => {
		console.log(err);
	})
}
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }