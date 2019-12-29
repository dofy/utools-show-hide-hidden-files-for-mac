const { exec } = require('child_process')

utools.onPluginEnter(({ code }) => {
  switch (code) {
    case 'show':
      exec(
        'defaults write com.apple.finder AppleShowAllFiles YES && killall Finder',
      )
      break
    case 'hide':
    default:
      exec(
        'defaults write com.apple.finder AppleShowAllFiles NO && killall Finder',
      )
      break
  }
  utools.hideMainWindow()
})
