const fs = require("fs");

// Create a file
function createFile() {
  fs.writeFile("myFile.txt", "This is the content of the file.", (err) => {
    if (err) {
      console.error("Error creating the file:", err);
    } else {
      console.log("File created successfully.");
    }
  });
}

// Read the data from the file
function readFromFile() {
  fs.readFile("myFile.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
    } else {
      console.log("File content:", data);
    }
  });
}

// Write data to the file
function writeToFile() {
  const newData = "tomorrow is another day.";
  fs.writeFile("myFile.txt", newData, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("File updated successfully.");
    }
  });
}

function appendDataToFile() {
  const newData = "\nThis is the new appended data.";
  fs.appendFile("myFile.txt", newData, (err) => {
    if (err) {
      console.error("Error appending data to the file:", err);
    } else {
      console.log("Data appended to the file successfully.");
    }
  });
}

// Rename the file
function renameFile() {
  fs.rename("myFile.txt", "renamedFile.txt", (err) => {
    if (err) {
      console.error("Error renaming the file:", err);
    } else {
      console.log("File renamed successfully.");
    }
  });
}

// Delete the file
function deleteFile() {
  fs.unlink("renamedFile.txt", (err) => {
    if (err) {
      console.error("Error deleting the file:", err);
    } else {
      console.log("File deleted successfully.");
    }
  });
}

var buf = new Buffer.alloc(1024);

function openFile() {
  fs.open("myFile.txt", "r+", (err, fd) => {
    if (err) {
      console.error("Error opening the file:", err);
    } else {
      console.log("File opened successfully.");
      console.log("Going to read the file");
      fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
          console.log(err);
        }
        console.log(bytes + " bytes read");
        // Print only read bytes to avoid junk.
        if (bytes > 0) {
          console.log(buf.slice(0, bytes).toString());
        }
      });
    }
  });
}

openFile();
