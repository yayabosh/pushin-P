document.getElementById('convert').addEventListener('click', () => {
  const input = document.getElementById('content').value.split(' ')
  let output = ''
  const vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'])
  const consonants = new Set(['P', 'p'])
  for (const token of input) {
    if (token.length > 3) {
      let consonant = false
      for (let i = 0; i < token.length - 1; i++) {
        if (!vowels.has(token[i])) {
          output += ' ' + token.substring(0, i) + '🅿️' + token.substring(i + 1)
          consonant = true
          break;
        }
      }
      if (!consonant) {
        output += ' ' + token
      }
    } else {
      output += ' ' + token
    }
  }
  document.getElementById('output').textContent = output
})