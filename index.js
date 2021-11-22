let result = document.getElementById('result')
// Using array.from to convert collection to array
let buttons = Array.from(document.getElementsByClassName('btn'))

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      default:
        result.innerText += e.target.innerText
    }
  })
})

const clearCount = () => {
  result.innerHTML = '0'
}
