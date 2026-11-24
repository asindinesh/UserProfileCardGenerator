from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "User Profile Card Generator API is running!"
    })


@app.route("/api/profile", methods=["POST"])
def create_profile():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "No data received"
        }), 400

    name = data.get("name", "").strip()
    bio = data.get("bio", "").strip()
    image_url = data.get("image_url", "").strip()

    if not name or not bio or not image_url:
        return jsonify({
            "success": False,
            "message": "All fields are required"
        }), 400

    profile = {
        "name": name,
        "bio": bio,
        "image_url": image_url
    }

    return jsonify({
        "success": True,
        "message": "Profile created successfully!",
        "profile": profile
    }), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)
