# 📞 Phonebook App

This is a simple phonebook application built with React. It allows users to:

- Add new contacts with names and phone numbers
- Filter contacts by name
- Update an existing contact’s number
- Delete contacts from the list
- See success/error notifications

---

## 🚀 Features

- 📇 Contact management with real-time filtering
- ⚙️ Integration with backend (CRUD via REST API)
- 🧠 Controlled form inputs
- ✅ Optimistic UI updates
- 🔔 Success and error messages with auto-dismiss

---

## 💻 Tech Stack

- React + Hooks (`useState`, `useEffect`)
- Axios for HTTP requests
- Vite (or CRA if used)
- CSS (basic styles or custom)
- Backend service simulated via JSON Server or real API

---

## 📁 Project Structure

<pre>
<code>
📁 src/
├── App.jsx
├── components/
│   ├── Filter.jsx
│   ├── PersonForm.jsx
│   ├── Persons.jsx
│   ├── SuccessMessage.jsx
│   └── ErrorMessage.jsx
└── services/
    └── persons.js
</code>
</pre>

---

## 📦 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/ant-tur/phonebook-app.git
   cd phonebook-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. (Optional) Start mock backend (if using JSON Server):
   ```bash
   npx json-server --watch db.json --port 3001
   ```

---

## 🔗 Live Demo

[View Live on GitHub Pages](https://ant-tur.github.io/phonebook-app/)

---

## 📜 License

MIT — free to use, share, and modify.
