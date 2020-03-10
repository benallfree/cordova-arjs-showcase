import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components/Root'

const e: HTMLScriptElement = document.createElement('script')
e.src = 'cordova.js'
e.async = false
document.body.appendChild(e)
document.addEventListener('deviceready', () => {
  if (cordova.platformId === 'ios') {
    cordova.plugins.iosrtc.registerGlobals()
  }

  ReactDOM.render(<Root />, document.getElementById('root'))
})
