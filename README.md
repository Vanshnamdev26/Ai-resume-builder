# AI Resume Builder 🚀

An AI-powered resume builder that helps users create professional, customizable resumes with ease. Built using React, Tailwind CSS, Node.js, Express.js, and MongoDB, this application allows users to manage resume details, customize templates, and enhance professional summaries using AI.

## ✨ Features

- **AI-Powered Summary Enhancement:** Improve your professional summary using AI.
- **User Authentication:** Secure user registration and login.
- **Resume Creation:** Create and manage multiple resumes.
- **Customizable Templates:** Choose resume templates and customize accent colors.
- **Resume Editing:** Update personal information, education, experience, projects, and skills.
- **Resume Preview:** Preview resumes before sharing or downloading.
- **Public Resume Sharing:** Make resumes publicly accessible where supported.
- **Responsive UI:** Use the application across desktop and mobile screen sizes.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- Tailwind CSS
- React Router
- Redux Toolkit

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)

**AI Integration**
- AI API integration for professional summary enhancement

## 📁 Project Structure

```text
Ai-resume-builder/
├── backend/
│   ├── configs/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

*Note: The folder structure may vary depending on your local project setup.*

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js and npm
- MongoDB or a MongoDB Atlas database
- Git
- An API key for your configured AI provider

### 1. Clone the Repository

```bash
git clone https://github.com/Vanshnamdev26/Ai-resume-builder.git
cd Ai-resume-builder
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory and configure the environment variables required by your backend.

Example:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_ai_provider_api_key
```

Use the actual variable names expected by your backend configuration. If your application uses a different AI provider or additional variables, configure those accordingly.

Start the backend:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend directory if required.

For a Vite frontend, the API base URL may look like this:

```env
VITE_BASE_URL=http://localhost:3000
```

Make sure this matches the API URL and configuration used by your application.

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 🔐 Environment Variables

Keep API keys, database credentials, JWT secrets, and other sensitive information in local `.env` files.

- Never commit `.env` files to GitHub.
- Keep `.env` listed in `.gitignore`.
- Provide placeholder values only in `.env.example`.
- Rotate any API key that has accidentally been exposed.

## 🚀 Future Improvements

- More resume templates
- PDF export and improved print formatting
- Additional AI-powered resume suggestions
- Resume scoring and ATS optimization
- More customization options
- Deployment and performance improvements

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a pull request.

## 📄 License

This project is available for learning and portfolio purposes. Add a license file if you want to specify the terms under which others may use, modify, or distribute the code.

## 👨‍💻 Author

**Vansh**

GitHub: [@Vanshnamdev26](https://github.com/Vanshnamdev26)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub!
