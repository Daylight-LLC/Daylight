# ☀️ Daylight - Dev Team Performance Analyzer

**Daylight** is a powerful tool designed to help organizations effectively manage and evaluate development teams. With seamless GitHub integration and performance tracking, Daylight provides valuable insights to improve efficiency and collaboration across teams. 

## ✨ Features

- 🔗 **GitHub Integration**: Easily track issues, PRs, and team activity with GitHub integration.
- 🚀 **Performance Tracking**: Monitor developer and team efficiency with metrics like issue resolution time, PR activity, and more.
- 👥 **Team Management**: Manage multiple teams, assign tasks, and approve/reject PRs directly from the app.
- 🤖 **AI-Driven Insights**: Leverage AI to generate actionable insights that boost performance and collaboration.
- 🎯 **Score-based System**: Get detailed scoring for developers and teams based on their efficiency and productivity.

## 🛠️ Tech Stack

- 💻 **Frontend**: TypeScript, React, Tailwind CSS
- ⚙️ **Backend**: Node.js, Express.js, MongoDB
- 🛠️ **Build Tool**: Vite
- 🗄️ **Database**: MongoDB

## ⚙️ Installation

### Prerequisites

- 🟢 Node.js (>= 14.x)
- 🍃 MongoDB (>= 4.x)
- 🖥️ Git

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/Daylight-LLC/Daylight.git
    cd Daylight
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Set up environment variables:
   Create a `.env` file in both the `frontend` and `backend` directories with the following configuration:

   For `backend`:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   GITHUB_API_KEY=your_github_api_key

   
4. Start the development servers:

 - Frontend:
     ```bash
     cd frontend
     npm run dev
- Backend:
    ```bash
    cd backend
    npm run dev
    ```

5. Backend

   Open your browser and go to ```http://localhost:3000.```

## 💼 Usage

### Managing Projects and Teams

- 🔧 Create Projects: Users can create new projects and invite team members.
- 📝 Assign Issues: Assign issues to developers directly from the dashboard.
- ✅ PR Management: Review, approve, or reject pull requests from your team members.
- 📊 Performance Analytics: Gain insights into developer and team performance based on GitHub activity.
  
### 🔍 Developer Efficiency Tracking

- ⏳ Time taken to close issues.
- ✅ PR approval and rejection history.
- 🔄 Number of commits and changes per day.
  
## 🤝 Contributing

We welcome contributions! Please read our Contributing Guide before making a pull request.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any queries or support, feel free to reach out to us at [naeemmalikk@icloud.com].
