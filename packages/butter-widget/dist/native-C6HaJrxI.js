function e() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof window.WebSocket < "u" || typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const t = e();
export {
  t as WebSocket
};
