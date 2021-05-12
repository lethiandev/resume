'use strict'

// Make document printable
const printButtons = document.querySelectorAll('.button-print')
const printBinder = btn =>
  btn.addEventListener('click', () => window.print(), false)

printButtons.forEach(printBinder)
