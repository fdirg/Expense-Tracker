export function formateadorDinero(num) {
  let dinero = num.toFixed(2).split(".");
  return (
    "$" +
    (dinero[0].split("")[0] === "-" ? "-" : "") +
    dinero[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    dinero[1]
  );
}
