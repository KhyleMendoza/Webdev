import fs from 'fs'

const folderName = ["img", "document", "video"]

try {
    for(var i=0; i < folderName.length; i++) {
        if(!fs.existsSync(folderName[i])) {
        fs.mkdirSync(folderName[i]);
    }
    }
} catch (err) {
    console.error(err);
}

// fs.renameSync("random/a.img", "img/a.txt")
// fs.renameSync("random/b.docx", "document/b.txt")
// fs.renameSync("random/c.txt", "video/c.txt")

const files = fs.readdirSync("random");
// console.log(files)
let filepath = ["document", "img", "video"]

for (var i = 0; i < files.length - 1; i++) {
    if (!fs.existsSync(`${filepath[i]}/${files[i]}`)) {
        fs.renameSync(`random/${files[i]}`, `${filepath[i]}/${files[i]}`)
        console.log(`done file ${i}`)
    } else {
        console.log("file not existing")
    }
}