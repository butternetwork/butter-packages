"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const request = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        if (data.errno !== undefined && data.errno !== 0) {
            throw new Error(data.message);
        }
        return data;
    }
    catch (e) {
        throw e;
    }
};
exports.request = request;
//# sourceMappingURL=request.js.map