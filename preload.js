// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  var d = new Date()
  var hour = d.getHours()

  if (hour >= 5 && hour <= 11)
    replaceText(`time`, "this morning")
  if (hour >= 12 && hour <= 17)
    replaceText(`time`, "this afternoon")
  if (hour >= 18 && hour <= 20)
    replaceText(`time`, "this evening")
  if (hour >= 21 || hour <= 4)
    replaceText(`time`, "tonight")
})