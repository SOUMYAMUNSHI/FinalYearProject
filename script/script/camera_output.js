//to view camera output
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Start webcam
async function setupCamera() {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => resolve(video);
      })
      .catch((err) => reject(err));
  });
}

// Load BlazeFace model and start detection
async function runFaceDetection() {
  const model = await blazeface.load(); // Load BlazeFace model
  console.log("BlazeFace model loaded");
  video.play();

  setInterval(async () => {
    const predictions = await model.estimateFaces(video, false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (predictions.length > 0) {
      predictions.forEach((prediction) => {
        const start = prediction.topLeft;
        const end = prediction.bottomRight;
        const size = [end[0] - start[0], end[1] - start[1]];

        // Draw bounding box
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        ctx.strokeRect(start[0], start[1], size[0], size[1]);

        // Draw landmarks (optional)
        if (prediction.landmarks) {
          prediction.landmarks.forEach((landmark) => {
            ctx.fillStyle = "blue";
            ctx.fillRect(landmark[0] - 2, landmark[1] - 2, 4, 4);
          });
        }
      });
    }
  }, 100);
}

// Initialize webcam and model
setupCamera()
  .then(runFaceDetection)
  .catch((err) => console.error("Error:", err));
