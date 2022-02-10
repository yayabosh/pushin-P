document.getElementById('convert').addEventListener('click', () => {
  const input = document.getElementById('content').value.split(' ')
  let output = ''
  const consonants = new Set([
    'B', 'b', 'C', 'c', 'D', 'd', 'G', 'g', 'K', 'k', 'P', 'p', 'Q', 'q', 'T', 't', 'X', 'x'
  ])
  for (const token of input) {
    if (token === 'P' || token === 'p') {
      output += ' 🅿️'
    } else if (token.length > 3) {
      let consonant = false
      for (let i = 0; i < token.length - 1 && !consonant; i++) {
        // Hard vs. soft C issue
        if (token[i] === 'C' || token[i] === 'c') {
          const next = token[i + 1].toUpperCase()
          if (next !== 'I' && next !== 'E' && next !== 'Y') {
            consonant = true
            output += ' ' + token.substring(0, i) + '🅿️' + token.substring(i + 1)
          }
        } else if (consonants.has(token[i])) {
          consonant = true
          output += ' ' + token.substring(0, i) + '🅿️' + token.substring(i + 1)
        }
      }
      if (!consonant) {
        output += ' ' + token
      }
    } else if (token.includes('p')) {
      const index = token.indexOf('p')
      output += ' ' + token.substring(0, index) + '🅿️' + token.substring(index + 1)
    } else {
      output += ' ' + token
    }
  }
  document.getElementById('output').textContent = output
})
