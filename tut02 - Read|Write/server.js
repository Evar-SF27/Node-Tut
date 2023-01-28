const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async () => {
    try {
        // Read the file
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        // Delete the file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        // Writing a new file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        // Appending to a new file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet your')
        // Renaming a file
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'newPromise.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newPromise.txt'), 'utf-8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}

fileOps()

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err
//     console.log("Write complete")

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nNice to meet you too', (err) => {
//         if (err) throw err
//         console.log("Append complete")

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newFile.txt'), (err) => {
//             if (err) throw err
//             console.log("Rename complete")
//         })
//     })
// })

// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught exception ${err}`)
//     process.exit(1)
// })