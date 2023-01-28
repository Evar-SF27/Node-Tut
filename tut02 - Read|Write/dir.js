const fs = require('fs')

// Checking if a file exists
if (!fs.existsSync('./new')) {
    // Creating a new directory
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log("Directory created")
    })
}

if (fs.existsSync('./new')) {
    // Deleting or reomving a directory 
    fs.rmdir('./new', (err) => {
        if (err) throw err
        console.log("Directory removed")
    })
}