import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import './FacialExpression.css'
import axios from 'axios'





export default function FacialExpression({setsongs}) {

const videoRef = useRef();
const loadModels = async () => {
const MODEL_URL = '/models';
await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
};

const startVideo = () => {
navigator.mediaDevices.getUserMedia({ video: true })
.then((stream) => {
videoRef.current.srcObject = stream;
})
.catch((err) => console.error("Error accessing webcam: ", err));
};
async function detectMood ()  {
const detections = await faceapi
.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
.withFaceExpressions();

let mostProbableExpression=0
let _expression=''

if(!detections || detections.length===0){
  console.log("face not detected properly");
  return;
  
}

for(const expression of Object.keys(detections[0].expressions)){
  if(detections[0].expressions[expression]>mostProbableExpression){
    mostProbableExpression=detections[0].expressions[expression]
    _expression=expression
  }
}
console.log(_expression);
 await axios.get(`http://localhost:3000/songs?mood=${_expression}`)
 .then(response=>{
  console.log(response.data.song[0]);
  setsongs(response.data.song)
  
 })
// console.log(data.song);
// setsongs(data.song)

}

useEffect(() => {
  



loadModels().then(startVideo);
}, []);

return (
<div>
  <div className='video-button-container'>
<video
ref={videoRef}
autoPlay
muted
className='video-container'
/>
<button onClick={detectMood}>detect mood</button>

</div>

</div>

);
}
