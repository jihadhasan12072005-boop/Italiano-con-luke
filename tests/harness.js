/* Loads the app's scripts into a Node VM with minimal browser stubs. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..') + '/';
module.exports = function (files) {
  const store = {};
  const ctx = { console, setTimeout, clearTimeout, setInterval, clearInterval, Date, Math, JSON,
    localStorage: { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } },
    navigator: {}, document: { addEventListener() {}, getElementById() { return null; } }, addEventListener() {}, matchMedia: () => ({ matches: false }) };
  ctx.window = ctx; vm.createContext(ctx);
  files.forEach(f => vm.runInContext(fs.readFileSync(ROOT + f, 'utf8'), ctx, { filename: f }));
  return ctx;
};
