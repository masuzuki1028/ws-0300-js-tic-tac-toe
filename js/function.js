// 状態
const context = {
  restartButtonElement: document.querySelector('.js-restart')
}

const STATUSES = {
  stating: 'starting...',
  win: '%name% win!!',
  draw: 'draw'
}


function subscribe() {
  // context.cellElements.forEach(item => {
  //   item.addEventListener('click', onClickCell)
  // })
  // context.restartButtonElement.addEventListener('click', () => location.reload())
  context.restartButtonElement.addEventListener('click', () => alert())
  // location.reload())
}

subscribe()
