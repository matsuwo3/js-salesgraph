var count = 0

document.getElementById("countup").onclick = function () {
  count += 1
  document.getElementById("result").innerText = count
}

const paragraph = document.querySelectorAll("p")
alert(paragraph[1])

window.onload = function () {
  // create a couple of elements in an otherwise empty HTML page
  const heading = document.createElement("h1")
  const heading_text = document.createTextNode("Big Head!")
  heading.appendChild(heading_text)
  document.body.appendChild(heading)
}

addEventListener
