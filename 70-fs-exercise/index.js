/**
 * Exercise 1
 *
 * create a function {createJsonFileWithContent} that will take
 * {data} and {fileName} as arguments, stringify {data}
 * and store it in the json file {./data/[fileName].json}
 * synchronously.
 *
 * NOTES:
 * 1. if {filename} not provided, log an error "File name is missing"
 * 2. if path is incorrect, log an error "No such file or directory"
 */
const fs = require("fs");
const createJsonFileWithContent = (data, fileName) => {
  if (fileName) {
    const dataToJSON = JSON.stringify(data);
    if (!fs.existsSync(`./data`)) {
      console.log("Directory not found");
      fs.mkdirSync("./data");
      console.log("Directory created");
    }
    return fs.writeFileSync(`./data/${fileName}.json`, dataToJSON);
  }
  console.log("File name is missing");
};

/**
 * Exercise 2
 *
 * create a function {readJsonFile} that will take a {fileName} that
 * exist in {./data/} as an argument,
 * read, parse it and return file content as an object synchronously.
 * If file does not exist, return
 *
 * NOTES:
 * 1. if path is incorrect, log an error "No such file or directory"
 */

const readJsonFile = (fileName) => {
  if (!fs.existsSync(`./data/${fileName}.json`)) {
    console.error("No such file or directory");
    return null;
  } else {
    const data = JSON.parse(fs.readFileSync(`./data/${fileName}.json`));
    console.log(data);

    return data;
  }
};

/**
 * Exercise 3
 *
 * create a function {updateFileWithContent} that will take
 * {data} that need to be added/modified and {fileName} as arguments,
 * and add it the file {./data/[fileName].json} synchronously.
 */

const updateFileWithContent = (data, fileName) => {
  const dataFromFileName = readJsonFile(fileName);
  const addingData = JSON.stringify({ ...dataFromFileName, ...data });
  fs.writeFileSync(`./data/${fileName}.json`, addingData);
  const dataAfter = readJsonFile(fileName);
  console.log("Data after add", dataAfter);
};

/**
 * Exercise 4
 *
 * create a function {getFileSize} that will take {fileName} as argument and return
 * file size in bytes.
 */

const getFileSize = (fileName) => {
  const fileStats = fs.statSync(`./data/${fileName}.json`);
  return fileStats.size;
};

getFileSize("SammyFile");

/**
 * Exercise 5
 *
 * create a function {cloneJsonFile} which will take a {src} and {destination}
 * as arguments and create a clone file.
 *
 * NOTE:
 *
 * if you get an error, log error message
 */

const cloneJsonFile = (source, destination) => {
  if (fs.existsSync(`./data/${source}.json`) && destination) {
    const sourceData = JSON.parse(fs.readFileSync(`./data/${source}.json`));
    const destinationData = JSON.stringify(sourceData);
    fs.writeFileSync(`./data/${destination}.json`, destinationData);
  } else {
    console.error("Source destination not found or destination not given");
  }
};

cloneJsonFile("SammyFile");

/**
 * Exercise 6
 *
 * create a function {deleteFile} which will take a {src}
 * as an argument and delete a file.
 *
 * NOTE:
 *
 * if you get an error, log error message
 */

const deleteFile = (fileToDelete) => {
  try {
    fs.unlinkSync(fileToDelete);
    //file removed
  } catch (err) {
    console.error(err);
  }
};
