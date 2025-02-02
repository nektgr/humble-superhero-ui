# 🦸 Humble Superheroes 🦸‍♀️

**Humble Superheroes** is a fun and interactive React-based frontend application that lets you create and manage your own superheroes! Add superheroes with their name, superpower, and a "humility score" (a rating out of 10), and watch them appear in a list sorted by their humility. The app includes cool features like dark/light mode, animations, sound effects, and responsive design. 🎉

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🚀 Installation](#-installation)
- [🏃 Running the Application](#-running-the-application)
- [🧪 Running Tests](#-running-tests)
- [🤝 Collaboration & Future Improvements](#-collaboration--future-improvements)
- [🛠️ Technologies Used](#-technologies-used)
- [📜 License](#-license)
- [📧 Contact](#-contact)

---

## ✨ Features

- **🦸 Add Superhero:** Submit new superheroes with their name, superpower, and humility score.
- **📜 Superhero List:** Displays superheroes sorted by their humility score (highest to lowest).
- **🎬 Animations:** Smooth and eye-catching animations powered by **Framer Motion**.
- **🌓 Theme Toggle:** Switch between light and dark modes with a single click.
- **✅ Form Validation:** Ensures all required fields are filled before submission.
- **🎶 Audio Feedback:** Plays a cool sound effect when a superhero is successfully added.
- **📱 Responsive Design:** Works seamlessly on all devices, from desktops to mobiles.
- **🧪 Testing:** Comprehensive tests written with **Jest** and **React Testing Library**.

---

## 📂 Project Structure

Here’s how the project is organized:
```
humble-superheroes/
├── public
│   ├── whoosh.mp3           # Sound effect for form submission.
│   └── superheroes/         # Folder for superhero images.
├── src
│   ├── api
│   │   └── superheroes.js   # API functions for fetching and adding superheroes.
│   ├── components
│   │   ├── Form
│   │   │   └── SuperheroForm.jsx # Form to add superheroes.
│   │   ├── Superhero
│   │   │   ├── SuperheroCard.jsx # Displays individual superhero details.
│   │   │   └── SuperheroList.jsx # Lists superhero cards with animations.
│   │   ├── Theme
│   │   │   ├── ThemeContext.jsx # Provides theme context for dark/light mode.
│   │   │   └── ThemeToggle.jsx  # Button to toggle theme.
│   ├── hooks
│   │   └── useSuperheroes.js  # Custom hook to manage superhero state and API calls.
│   ├── styles
│   │   └── theme.css         # CSS for theming.
│   ├── utils
│   │   └── superheroImages.js # Utility to manage random superhero image selection.
│   ├── tests                 # Contains all test files.
│   ├── App.jsx               # Main App component.
│   ├── index.js              # Application entry point.
│   └── setupTests.js         # Jest setup file for global test configuration.
├── package.json
└── README.md
```

---

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nektgr/humble-superhero-ui.git
   cd humble-superhero-ui
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```


---

## 🏃 Running the Application

To start the app locally, run:
```bash
npm start
```
Then, open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🧪 Running Tests

The project includes tests for form validation, list rendering, theme toggling, and more. To run the tests:
```bash
npm test
```
For debugging, you can also check for open handles:
```bash
npm test -- --detectOpenHandles
```

---

## 🤝 Collaboration & Future Improvements

### Collaboration Notes
- **Code Reviews & Pair Programming:** Regular reviews and pair programming to ensure high-quality code.
- **CI/CD Integration:** Set up automated testing and deployment pipelines.
- **Component Library:** Create a shared component library for consistent UI across projects.

### If I Had More Time... ⏳
- **ErrorBoundary Implementation:** Add a robust error boundary for better error handling.
- **More Extensive Testing:** Increase test coverage for edge cases and async behaviors.
- **TypeScript Migration:** Convert the project to TypeScript for static type checking.
- **Backend Enhancements:** Integrate with a database for persistent data storage.
- **Accessibility Improvements:** Add ARIA roles, focus management, and other accessibility features.

---

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces.
- **Framer Motion** - For smooth animations.
- **rc-slider** - For the humility score slider.
- **Jest & React Testing Library** - For comprehensive testing.
- **CSS** - For styling and theming.

---

## 📜 License

This project is provided for interview purposes and does not include a license.

---

## 📧 Contact

For questions or feedback, feel free to reach out:

- **Email:** [npapakwn@hotmail.com]
- **GitHub Issues:** Open an issue in the repository.

