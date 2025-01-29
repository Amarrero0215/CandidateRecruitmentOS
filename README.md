# 🚀 Candidate Search & Management App

This project is a **React + TypeScript + Vite** application that allows users to search for candidates using the **GitHub API**, save potential candidates, and manage them in a structured dashboard.

Developed as part of a coding challenge, this project implements **React best practices** with **TypeScript, API integration, state management, and UI design**.

---

## 🌟 Features

✅ **Candidate Search** – Fetch random GitHub users and view details.  
✅ **Save Candidates** – Mark users as potential hires and store them in a separate list.  
✅ **Structured Dashboard** – Saved candidates are displayed in an organized, scrollable layout.  
✅ **Real-Time API Fetching** – Uses GitHub API for retrieving candidate data.  
✅ **Styled UI** – Clean, modern design with a responsive layout.  
✅ **404 Error Page** – Custom error page for invalid routes.

---

## 🛠 Installation & Setup

To set up the project locally, follow these steps:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Amarrero0215/CandidateRecruitmentOS.git
cd Develop/
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
1. Create a **`.env` file** inside the project root.
2. Add the following variable and insert your **GitHub API token**:
   ```sh
   VITE_GITHUB_TOKEN=your_personal_access_token
   ```

### **4️⃣ Run the Application**
```sh
npm run dev
```
The app will start at **`http://localhost:5173`** (or another port assigned by Vite).

---

## 🎮 Usage Instructions

### **1️⃣ Searching for Candidates**
- Navigate to the **Candidate Search** page.
- The app fetches random GitHub users.
- Click **"+"** to save a candidate or **"−"** to reject them.

### **2️⃣ Managing Saved Candidates**
- View all saved candidates in the **Saved Candidates** dashboard.
- Use the **"❌"** button to remove a candidate.
- Use the **"✅"** button (Future feature) for automatic interview invitations.

### **3️⃣ Error Handling**
- If an invalid page is accessed, a **custom 404 Error Page** is displayed.

---

## 🖼 Screenshots (Optional)

| **Candidate Search** | **Saved Candidates** |
|-----------------|----------------|
| ![Candidate Search Screenshot](./screenshots/candidate-search.png) | ![Saved Candidates Screenshot](./screenshots/saved-candidates.png) |

---

## 🏗 Tech Stack

- **Frontend:** React + TypeScript + Vite  
- **Styling:** CSS (custom styling)  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Routing:** React Router  
- **API:** GitHub REST API  

---

## 🤝 Feedback

I welcome feedback and suggestions to improve this project. If you have any thoughts or ideas, feel free to share them with me. However, this project is not open for contributions at the moment.

---

## 📜 License

This project is licensed under the **MIT License** – feel free to modify and use it!

---

## ✨ Designed By

This project was designed and developed by **[Your Name]**. You can find more of my work here:
- **GitHub:** [github.com/Amarrero0215](https://github.com/Amarrero0215)

---
