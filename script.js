//your JS code here. If required.
function updateOutput() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

updateOutput().then(text => {
  document.getElementById("output").textContent = text;
});
