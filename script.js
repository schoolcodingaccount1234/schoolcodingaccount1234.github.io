var body = document.body,
  html = document.documentElement;
let root = document.querySelector(":root");
// addEventListener("resize",handleResize());
function handleResize() {
  const menu = document.getElementById("menu");
  var height = Math.max( //body.offsetHeight, 
    html.clientHeight, html.offsetHeight);
  const topMargin = parseFloat(getComputedStyle(document.getElementById("projects"))["margin-top"]) + parseFloat(getComputedStyle(document.getElementById("projects"))["margin-bottom"])
  const headerHeight = parseFloat(getComputedStyle(document.getElementById("projects"))["height"])
  const textHeight = parseFloat(getComputedStyle(document.getElementById("projects-text"))["height"])
  let bottomHeight = (Math.round(height - parseFloat(getComputedStyle(menu)["height"])
    - (textHeight + headerHeight + topMargin + 1)) + "px");
  root.style.setProperty("--documentHeight", height + "px");
  if(parseInt(bottomHeight) < 32){
    bottomHeight = "100px";
  }
  console.log(bottomHeight);
  root.style.setProperty("--bottomHeight",bottomHeight)
}
// function makeBig(e){
//   console.log(e);
//   e.style.setProperty("width","100%");
//   e.style.setProperty("height","100%");
// }
window.onresize = handleResize;
handleResize();
setTimeout(handleResize,300);
function jump(id) {
  const el = document.getElementById(id);
  const rect = el.getBoundingClientRect();
  const nav = document.getElementById("menu");
  const margin = parseInt(getComputedStyle(el)["margin-top"]);
  let navheight = nav.offsetHeight;
  if(window.matchMedia("(max-width:40rem)").matches){
    console.log("too small");
    navheight = 0;
  }
  scroll({top:rect.top+window.scrollY-navheight-margin,behavior:"smooth"});
}