import fs from "fs";

export  const writeFile = (file, content)=>{
    fs.writeFileSync(file,content);
}
