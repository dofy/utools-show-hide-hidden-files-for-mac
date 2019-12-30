const { exec } = require('child_process')

const yahaha = option => {
  exec(
    `defaults write com.apple.finder AppleShowAllFiles ${option.toUpperCase()} && killall Finder`,
  )
  utools.showNotification('😁 设置成功')
  utools.hideMainWindow()
  utools.outPlugin()
}

window.exports = {
  show: {
    mode: 'none',
    args: {
      enter() {
        yahaha('yes')
      },
    },
  },
  hide: {
    mode: 'none',
    args: {
      enter() {
        yahaha('no')
      },
    },
  },
}
