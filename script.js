import newdp from "./datepicker-module.js";
(function main () {
  const dpElement = newdp(500);

  dpElement.style.position = "fixed";

  dpElement.style.left = "50%";
  dpElement.style.top = "50%";
  dpElement.style.transform = "translate(-50%, -150px)";

  dpElement.style.cursor = "pointer";

  document.body.append(dpElement);
})();

