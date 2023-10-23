export default (n, msg) => {
  let _context = "";
  switch (n) {
    case 0:
      _context = "SERVER";
      break;
    case 1:
      _context = "MODULE";
      break;
    default:
      _context = "*";
  }
  return console.log(`[${_context}]`, msg);
};
