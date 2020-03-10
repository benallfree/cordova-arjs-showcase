import React, { useEffect, useState } from 'react'

export default () => {
  const video = React.createRef<HTMLVideoElement>()

  const handleClick = async () => {
    if (!video.current) return
    const constraints: { audio: any; video: any } = {
      audio: false,
      video: true
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      const videoTracks = stream.getVideoTracks()
      console.log('Got stream with constraints:', constraints)
      console.log(`Using video device: ${videoTracks[0].label}`)
      console.log(stream)
      video.current.srcObject = stream
    } catch (e) {
      if (e.name === 'ConstraintNotSatisfiedError') {
        const v = constraints.video
        console.error(
          `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
        )
      } else if (e.name === 'PermissionDeniedError') {
        console.error(
          'Permissions have not been granted to use your camera and ' +
            'microphone, you need to allow the page access to your devices in ' +
            'order for the demo to work.'
        )
      }
      console.error(`getUserMedia error: ${e.name}`, e)
    }
  }

  return (
    <div>
      <h1>getUserMedia</h1>

      <video id="gum-local" autoPlay playsInline ref={video}></video>
      <button id="showVideo" onClick={handleClick}>
        Open camera
      </button>
    </div>
  )
}
