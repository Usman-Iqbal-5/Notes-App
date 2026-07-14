# React Notes App 📝

A fully interactive notes management application built with React.

The application allows users to create, edit, delete, filter, and export notes while supporting light and dark themes.

The project demonstrates practical React development using reusable components, component composition, props, state management, React hooks, and browser APIs to create a maintainable front-end application.

---

## 🚀 Live Demo

Add your deployed application link:

```
https://your-demo-link.com
```

---

## 📸 Screenshots

Add screenshots of the application here.

Example:

### Light Mode

![Light Mode](./screenshots/light-mode.png)

### Dark Mode

![Dark Mode](./screenshots/dark-mode.png)

### Notes Filtering

![Notes Filtering](./screenshots/filtering.png)

---

# ✨ Features

## 📝 Notes Management

Users can:

- Create new notes
- Edit existing notes
- Delete notes
- View full note content
- Select note colours

Available note colours:

- 🟡 Yellow
- 🟠 Orange
- 🟢 Green

Notes are automatically saved and restored between sessions using browser localStorage.

---

## 🔍 Filtering

Users can filter notes by colour:

- All notes
- Yellow notes
- Orange notes
- Green notes

---

## 🌙 Light & Dark Mode

Includes a theme toggle allowing users to switch between light and dark modes.

The selected theme preference is stored using localStorage, allowing the application to remember the user's preference when they return.

---

## 📄 PDF Export

Users can download their notes as a PDF document.

---

# 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- JSX
- CSS
- Create React App
- Browser localStorage API

---

# ⚛️ Technical Highlights

## Component Architecture

The application is built using reusable React components with clear responsibilities.

Examples include:

- Note components
- Forms
- Modal components
- Filters
- Theme controls
- Layout components

Components are designed to be reusable and maintainable rather than containing duplicated logic.

---

## 🧩 Component Composition

A key focus of this project was using composition patterns to create flexible components.

The reusable modal component uses the `children` prop to allow different content to be rendered inside the same modal structure.

The same modal component is reused for multiple purposes:

- Creating a new note
- Editing an existing note
- Viewing full note details

Example:

```jsx
<Modal>
  <AddNoteForm />
</Modal>
```

```jsx
<Modal>
  <EditNoteForm />
</Modal>
```

```jsx
<Modal>
  <ViewNote />
</Modal>
```

This approach reduces duplication and keeps components flexible.

---

## 🔗 Props & Component Communication

Components communicate through props and callback functions.

Examples:

- Passing note data into reusable components
- Passing event handlers for editing and deleting notes
- Configuring reusable UI components

This keeps components independent and improves reusability.

---

## 🔄 State Management

React state is used to manage application behaviour and user interactions.

State is used for:

- Notes data
- Selected notes
- Modal visibility
- Active filters
- Theme selection
- Form inputs

The application separates UI state from component presentation by keeping state management within the appropriate components.

---

## 🪝 React Hooks

The project uses React hooks including:

### useState

Used for managing:

- Notes
- Form values
- Modal state
- Filters
- Theme state
- User interactions

### useEffect

Used for handling side effects including:

- Loading saved notes from localStorage
- Saving notes when data changes
- Persisting theme preferences
- Synchronising React state with browser storage

---

## 💾 Client-Side Data Persistence

The application uses the browser `localStorage` API to persist user data without requiring a backend.

Stored data includes:

- User-created notes
- Note colours
- Light/dark mode preference

This allows users to:

- Refresh the page without losing notes
- Close and reopen the application while keeping their data
- Maintain their preferred theme

This demonstrates handling browser APIs, managing persistent client-side data, and synchronising external data sources with React state.

---

# 📂 Project Structure

Example structure:

```
src/
│
├── components/
│   ├── Modal/
│   ├── Notes/
│   ├── Forms/
│   ├── Filters/
│   └── ThemeToggle/
│
├── assets/
│
├── styles/
│
├── App.jsx
└── index.js
```

The application follows a component-based structure where each component has a focused responsibility.

---

# 💻 Installation & Setup

## Clone the repository

```bash
git clone <repository-url>
```

## Navigate into the project

```bash
cd react-notes-app
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

# 🔮 Future Improvements

Possible future improvements:

- Add note searching
- Add note categories/tags
- Add drag-and-drop note ordering
- Add backend integration
- Add user authentication
- Store notes in a database
- Add automated tests
- Improve accessibility features

---

# 🎯 What This Project Demonstrates

This project demonstrates the ability to:

- Build a complete React front-end application
- Create reusable and maintainable components
- Design component composition patterns
- Manage application state
- Use React hooks effectively
- Persist application data using browser APIs
- Synchronise React state with localStorage
- Handle forms and user interactions
- Implement CRUD functionality
- Create flexible reusable UI components
- Structure a professional front-end project

---

# 👨‍💻 Author

Your Name: Usman Iqbal

GitHub: https://github.com/Usman-Iqbal-5
