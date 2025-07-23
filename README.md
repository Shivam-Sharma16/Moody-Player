# 🎧 Moody Player

> "What if your playlist could read your face and understand your emotions?"  
Moody Player makes that a reality — blending AI and music into one fun, intelligent experience.  

This is a **full-stack facial expression-based music player** that detects your mood and serves personalized song playlists based on real-time emotion analysis.

---

## 🚀 Features

- 🎭 Real-time **Facial Expression Detection** (Happy, Sad, Neutral, Surprised, etc.)
- 🎵 Dynamic **mood-based music playlist recommendation**
- ☁️ Cloud media upload and optimization with **ImageKit**
- ⚙️ Built completely from scratch using the **MERN stack**
- 💾 Fast and optimized **MongoDB queries** for fetching music
- 🔐 Secure REST APIs and real-time backend handling

---

## 🛠 Tech Stack

| Frontend    | Backend       | Database | Cloud    | Tooling        |
|-------------|---------------|----------|----------|----------------|
| React       | Node.js       | MongoDB  | ImageKit | Vite, Tailwind |
| TailwindCSS | Express.js    |          |          | FaceAPI.js     |

---

## 🗂 Folder Structure

### 🔹 `backend/`
backend/
├── node_modules/
├── src/
│ ├── db/
│ │ └── db.js
│ ├── model/
│ │ └── song.model.js
│ ├── routes/
│ │ └── song.route.js
│ ├── Services/
│ │ └── storage.service.js
│ └── app.js
├── .env
├── server.js
├── package.json


### 🔹 `frontend/`
frontend/
├── node_modules/
├── public/
│ └── models/
│ ├── face_expression_model-shard1
│ ├── face_expression_model-weights_manifest.json
│ ├── tiny_face_detector_model-shard1
│ └── tiny_face_detector_model-weights_manifest.json
├── src/
│ └── components/
│ ├── FacialExpression.jsx
│ ├── FacialExpression.css
│ ├── MoodSongs.jsx
│ ├── MoodSongs.css
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
├── .env
├── vite.config.js
├── index.html
├── package.json


---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Shivam-Sharma16/Moody-Player.git
cd Moody-Player



start the server
cd backend
npm install
node server.js

frontend setup
cd frontend
npm install
npm run dev

The app should now be running at: http://localhost:5173/

🙌 Acknowledgments
Huge thanks to my mentors and peers for their constant support. This fun project helped me gain deep insights into:

Full-stack development from scratch

Media and cloud optimization

Frontend + ML integration

Real-world debugging and deployment

📬 Connect with Me
📧 Email: shivamsharma.it27@gmail.com

🌐 GitHub: Shivam-Sharma16

💼 LinkedIn: www.linkedin.com/in/shivamsharma220380