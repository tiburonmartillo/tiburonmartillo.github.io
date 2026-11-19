const ts = require("typescript"),
  fs = require("node:fs");
const file = process.argv[2],
  src = fs.readFileSync(file, "utf8");
const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function textOf(n) {
  let out = "";
  function walk(x) {
    if (ts.isJsxText(x)) out += " " + x.getText(sf);
    else if (ts.isStringLiteral(x) || ts.isNoSubstitutionTemplateLiteral(x)) out += " " + x.text;
    else if (ts.isJsxExpression(x) && x.expression) walk(x.expression);
    else ts.forEachChild(x, walk);
  }
  walk(n);
  return out.replace(/\s+/g, " ").trim();
}
function visit(n) {
  if (ts.isJsxElement(n)) {
    const tag = n.openingElement.tagName.getText(sf);
    if (["p", "h1", "h2", "h3", "h4", "li", "a"].includes(tag)) {
      const t = textOf(n);
      if (t.length > 2) console.log(`${tag}: ${t}`);
    }
  }
  ts.forEachChild(n, visit);
}
visit(sf);
