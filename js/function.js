// 状態
const context = {
  cellElements: document.querySelectorAll('.js-cell'),
  restartButtonElement: document.querySelector('.js-restart')
}

const STATUSES = {
  stating: 'starting...',
  win: '%name% win!!',
  draw: 'draw'
}

const ACTIVE_CLASSNAME = 'active'
const CHARACTERS = {
  circle: '○',
  cross: '×'
}

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



function subscribe() {
  context.cellElements.forEach(item => {
    item.addEventListener('click', onClickCell)
  })
  // context.restartButtonElement.addEventListener('click', () => location.reload())
  context.restartButtonElement.addEventListener('click', () => alert())
  // location.reload())
}

subscribe()
