import React, { useEffect } from 'react'

export default () => {
  useEffect(() => {
    window.addEventListener('camera-init', data => {
      console.log('camera-init', data)
    })

    window.addEventListener('camera-error', error => {
      console.log('camera-error', error)
    })

    AFRAME.registerComponent('registerevents', {
      init: function() {
        var marker = this.el

        marker.addEventListener('markerFound', function() {
          var markerId = marker.id
          console.log('markerFound', markerId)
          // TODO: Add your own code here to react to the marker being found.
        })

        marker.addEventListener('markerLost', function() {
          var markerId = marker.id
          console.log('markerLost', markerId)
          // TODO: Add your own code here to react to the marker being lost.
        })
      }
    })
  }, [])
  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; sourceWidth:1280; sourceHeight:720; displayWidth: 300; displayHeight: 300;"
    >
      <a-marker preset="hiro" id="marker-hiro" registerevents>
        <a-box
          position="0 0.5 0"
          material="opacity: 0.5; side: double;color:blue;"
        >
          <a-torus-knot
            radius="0.26"
            radius-tubular="0.05"
            animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
          ></a-torus-knot>
        </a-box>
      </a-marker>

      <a-marker type="barcode" value="5" id="marker-barcode-5">
        <a-box
          position="0 0.5 0"
          material="opacity: 0.5; side: double;color:red;"
        >
          <a-torus-knot
            radius="0.26"
            radius-tubular="0.05"
            animation="property: rotation; to:360 0 0; dur: 5000; easing: linear; loop: true"
          ></a-torus-knot>
        </a-box>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
  )
}
