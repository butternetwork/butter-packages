import fs from 'fs';
import path from 'path';

// 定义源目录和目标目录
const srcDir = path.join(path.resolve('src'));
const distDir =path.join(path.resolve('dist'));

function copyNonTsFiles(src, dest) {
    fs.readdir(src, { withFileTypes: true }, (err, files) => {
        if (err) {
            return console.error(`无法读取目录 ${src}: ${err}`);
        }

        files.forEach(file => {
            const srcPath = path.join(src, file.name);
            const destPath = path.join(dest, file.name);

            if (file.isDirectory()) {
                // 如果是目录，递归调用
                fs.mkdir(destPath, { recursive: true }, (err) => {
                    if (err) {
                        return console.error(`无法创建目录 ${destPath}: ${err}`);
                    }
                    copyNonTsFiles(srcPath, destPath); // 递归复制
                });
            } else if (file.isFile() && !file.name.endsWith('.ts') && !file.name.endsWith('.tsx')) {
                // 如果是非 TS/TSX 文件，复制到目标目录
                fs.copyFile(srcPath, destPath, (err) => {
                    if (err) {
                        return console.error(`无法复制文件 ${srcPath} 到 ${destPath}: ${err}`);
                    }
                    console.log(`已复制: ${srcPath} 到 ${destPath}`);
                });
            }
        });
    });
}

// 调用函数
copyNonTsFiles(srcDir, distDir);