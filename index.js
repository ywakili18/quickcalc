let result = document.getElementById('result')
// Using array.from to convert collection to array
let buttons = Array.from(document.getElementsByClassName('btn'))
// map through each button and perform calc using .eval()
buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        result.innerText = ' '
        break
      // takes the current display and does math operations
      case '=':
        try {
          result.innerText = eval(result.innerText)
        } catch {
          result.innerText = 'err'
        }
        break
      default:
        result.innerText += e.target.innerText
    }
  })
})
