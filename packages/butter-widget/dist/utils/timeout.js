"use client";
export async function sleep(ms) {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}
