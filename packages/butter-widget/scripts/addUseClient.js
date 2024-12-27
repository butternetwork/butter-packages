// scripts/addUseClient.js
import fs from 'fs';
import path from 'path';

// Define the directory to check
const srcDir = path.join(path.resolve('src')); // Adjusted to point to the src directory

// Function to check and add "use client"; directive
function addUseClientDirective(filePath) {
    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`无法读取文件 ${filePath}: ${err}`);
            return;
        }

        // Check if the file already contains "use client";
        if (!data.includes('"use client";')) {
            // Add "use client"; at the top of the file
            const updatedData = `"use client";\n${data}`;

            // Write the updated content back to the file
            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error(`无法写入文件 ${filePath}: ${err}`);
                } else {
                    console.log(`已更新: ${filePath}`);
                }
            });
        }
    });
}

// Function to recursively check all files in the directory
function checkFilesInDirectory(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`无法读取目录 ${dir}: ${err}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file.name);

            if (file.isDirectory()) {
                // If it's a directory, recursively check it
                checkFilesInDirectory(filePath);
            } else if (file.isFile() && (file.name.endsWith('.js') || file.name.endsWith('.ts') || file.name.endsWith('.tsx'))) {
                // If it's a JS/TS/TSX file, check for "use client";
                addUseClientDirective(filePath);
            }
        });
    });
}

// Start checking files in the src directory
checkFilesInDirectory(srcDir);