const fs = require("fs-extra");
const minify = require("minify");

const version = require("../package.json").version;
const files = {
  style: "./telegram-vanilla-dark.css",
  usercss: "./telegram-vanilla-dark.user.css",
  template: "./options/usercss-template.css",
  wideScreen: "./options/wide-screen.css",
  borderRadius: "./options/border-radius.css"
};

async function replaceVars(css) {
  function extractThemeName(css) {
    return css
      .substring(2, css.indexOf("*/"))
      .trim()
      .toLowerCase();
  }

  const themes = await fs.readdir("./options/themes/");
  const wideScreen = await fs.readFile(files.wideScreen, "utf8");
  const borderRadius = await fs.readFile(files.borderRadius, "utf8");

  const styles = await Promise.all(themes.map(theme => fs.readFile("./options/themes/" + theme, "utf8")));

  styles.forEach(style => {
    const name = extractThemeName(style);
    css = css.replace(`{{${name}}}`, minify.css(style));
  });

  css = css.replace("{{wide-screen}}", minify.css(wideScreen));
  css = css.replace("{{border-radius}}", minify.css(borderRadius));
  css = css.replace("{{version}}", version);

  return css;
}

function exit(err) {
  if (err) console.error(err);
  process.exit(err ? 1 : 0);
}

return fs.unlink(files.usercss).catch(() => { })
  .then(() => fs.readFile(files.template, "utf8"))
  .then(css => fs.readFile(files.style, "utf8").then(style => css + style))
  .then(async css => fs.writeFileSync(files.usercss, await replaceVars(css)))
  .then(() => console.log("Build finished"))
  .catch(exit);
