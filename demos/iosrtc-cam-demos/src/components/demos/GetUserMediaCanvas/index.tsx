import React, { useEffect, useState } from 'react'

export default () => {
  const video = React.createRef<HTMLVideoElement>()
  const canvas = React.createRef<HTMLCanvasElement>()

  const handleClick = async () => {
    if (!video.current) return
    if (!canvas.current) return
    const [v, c] = [video.current, canvas.current]

    c.width = v.videoWidth
    c.height = v.videoHeight
    c.getContext('2d')?.drawImage(v, 0, 0, c.width, c.height)
  }

  useEffect(() => {
    ;(async () => {
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
    })()
  }, [video.current])

  return (
    <div>
      <h1>getUserMedia Canvas</h1>

      <video autoPlay playsInline ref={video}></video>
      <button onClick={handleClick}>Snapshot to Canvas</button>
      <canvas
        ref={canvas}
        width={100}
        height={100}
        style={{ backgroundColor: 'red' }}
      ></canvas>
    </div>
  )
}
