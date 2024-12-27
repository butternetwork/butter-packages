import fs from 'fs';
import path from 'path';

// Define the directory to search for .js files
const directoryPath = path.join(path.resolve('src'));

function deleteJsFiles(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            return console.error(`无法扫描目录: ${err}`);
        }

        files.forEach(file => {
            const filePath = path.join(dir, file.name);
            if (file.isDirectory()) {
                // 如果是目录，递归调用
                deleteJsFiles(filePath);
            } else if (file.isFile() && path.extname(file.name) === '.js') {
                // 如果是文件且扩展名为 .js，删除文件
                fs.unlink(filePath, (err) => {
                    if (err) {
                        return console.error(`无法删除文件: ${err}`);
                    }
                    console.log(`已删除: ${filePath}`);
                });
            }
        });
    });
}

// 调用函数
deleteJsFiles(directoryPath);