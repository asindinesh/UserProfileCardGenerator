# 👤 User Profile Card Generator

A full-stack web application that allows users to create personalized profile cards by entering their name, bio, and profile image URL.

The application uses **React.js** for the frontend and **Python Flask** for the backend. It demonstrates how frontend forms communicate with backend APIs using HTTP POST requests and JSON data.

## ✨ Features

- 📝 User-friendly profile creation form
- 👤 Enter name and personal biography
- 🖼️ Add profile image using an image URL
- ⚡ Generate dynamic profile cards
- 🔗 React and Flask API integration
- 📡 Handle HTTP POST requests
- 📱 Responsive user interface
- ✅ Basic form validation
- 🔄 JSON-based data exchange

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Frontend build tool |
| Python | Backend programming |
| Flask | REST API development |
| Flask-CORS | Cross-origin communication |
| HTML & CSS | User interface design |
| JSON | Data exchange |

## 📂 Project Structure

```text
UserProfileCardGenerator/
│
├── backend/
│   ├── venv/
│   ├── app.py
│   └── requirements.txt
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── index.html
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/UserProfileCardGenerator.git
```

```bash
cd UserProfileCardGenerator
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the Flask server:

```bash
python app.py
```

Backend URL:

`http://127.0.0.1:5000`

### 3. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Frontend URL:

`http://localhost:5173`

## 🔌 API Documentation

### Create Profile

**Endpoint:**

```http
POST /api/profile
```

**Base URL:**

```text
http://127.0.0.1:5000
```

**Request Body:**

```json
{
  "name": "Asin",
  "bio": "Computer Science Student",
  "image_url": "https://example.com/profile.jpg"
}
```

**Successful Response:**

```json
{
  "success": true,
  "message": "Profile created successfully!",
  "profile": {
    "name": "Asin",
    "bio": "Computer Science Student",
    "image_url": "https://example.com/profile.jpg"
  }
}
```

**HTTP Status Code:** `201 Created`

## 🔄 Application Workflow

1. User enters their profile details in the React form.
2. React collects the input data.
3. The frontend sends a POST request to the Flask backend.
4. Flask receives and validates the JSON data.
5. The backend returns a JSON response.
6. React displays the generated profile card.

## 🚀 Future Improvements

- Upload profile images directly from the device.
- Add profile editing and deletion.
- Store profiles in a database.
- Add user authentication.
- Generate downloadable profile cards.
- Add social media links.

## 🎯 Learning Objectives

This project demonstrates:

- Building React components.
- Managing form inputs using React Hooks.
- Developing REST APIs using Flask.
- Handling HTTP POST requests.
- Sending and receiving JSON data.
- Integrating frontend and backend applications.
- Implementing basic input validation.

## 👨‍💻 Author

**Asin**

Computer Science Student | Aspiring Full-Stack Developer

---

⭐ If you find this project useful, consider giving it a star!
