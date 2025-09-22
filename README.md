# Neumorphic Calculator 🔢

A stylish, neumorphic-style calculator built with **vanilla JavaScript, HTML, and Tailwind CSS**. This project focuses on creating a visually appealing, tactile user interface with realistic button-press effects and a functional calculation engine that supports complex expressions.

[![Calculator Preview](https://i.postimg.cc/Sxz39FWg/Screenshot-2025-09-22-131912.png)](https://postimg.cc/cv0Fqzk3)

## ✨ What is This?

This project is a modern take on the classic calculator, designed with the "neumorphic" aesthetic in mind. Neumorphism (or neo-skeuomorphism) is a UI style that uses soft shadows and highlights to make elements look like they are extruding from or pressed into the background, creating a tactile, physical feel.

The calculator was built entirely with vanilla JavaScript to handle the logic, demonstrating strong foundational skills in DOM manipulation and algorithm implementation. It includes a custom math expression parser that respects the order of operations.

### Core Features

* **🔢 Advanced Calculation Logic:** The calculator's engine, written in vanilla JavaScript, correctly handles the order of operations (PEMDAS/BODMAS), including parentheses and exponents.
* **🎨 Neumorphic Design:** The UI is crafted with extensive use of `box-shadow` to create a soft, plastic-like, and tactile interface where buttons appear to be physically pressed.
* **🌓 Dark/Light Mode:** A theme switcher that toggles between a light and dark mode. The user's preference is saved to `localStorage`.
* **📇 Calculation History:** A slide-out panel that stores and displays a history of previous calculations. Users can click a history item to load it back into the calculator.
* **⌨️ Full Keyboard Support:** Users can perform all calculations using their physical keyboard, including numbers, operators, backspace, and the enter key to calculate.
* **📱 Fully Responsive:** The layout and button sizes are responsive, ensuring a great user experience on both mobile and desktop devices.

---

## 🔧 Tech Stack & Architecture

This project was built from scratch with a focus on core web technologies and a clean, modern aesthetic.

* **Core Technologies:**
    * **HTML5**
    * **CSS3**
    * **Vanilla JavaScript (ES6+)**
* **Styling:** **Tailwind CSS** with a custom configuration in `main.css` to define component styles.
* **Icons:** Font Awesome

### Architectural Highlights

1.  **Custom Math Expression Parser (`index.js`)**
    The core of the calculator is a custom parser written in vanilla JavaScript. When the user submits an expression, the script first tokenizes the input string into an array of numbers and operators. It then iteratively solves the expression by processing operators in the correct mathematical order (parentheses, exponents, multiplication/division, then addition/subtraction). This is achieved by repeatedly finding an operator in the array, performing the calculation on its adjacent numbers, and replacing the three elements (e.g., `[2, '+', 2]`) with the single result (`[4]`).

2.  **Neumorphic Styling with Tailwind CSS (`main.css`)**
    The neumorphic effect is achieved using multiple layered `box-shadow` properties defined as a custom component (`.btn`) in the Tailwind CSS configuration. The "pressed" state is a different set of inset shadows that creates the illusion of depth. The dark mode theme applies an inverted shadow logic to maintain the effect on a dark background.

3.  **Dynamic DOM Generation**
    Instead of hardcoding every button in the HTML, the JavaScript dynamically generates the calculator buttons from an `operators` array and a numeric loop. This makes the code cleaner and easier to manage.

4.  **State Management with DOM and `localStorage`**
    The application state (current equation, result, history) is managed directly in JavaScript variables. The UI is updated by manipulating DOM element properties like `innerText` and `value`. The user's theme preference is persisted across sessions using `localStorage`.

---

## 🏃‍♂️ How to Run

This is a static website built with vanilla HTML, CSS, and JavaScript, but it uses Tailwind CSS for styling.

**Option 1: Simple (No Tailwind Re-compiling)**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YasaminAlizadeh/neumorphic-calculator.git
    cd neumorphic-calculator
    ```

2.  **Open `index.html`:**
    * The pre-compiled `styles/styles.css` file is included. You can open the `index.html` file directly in your web browser. Using a live server extension in your code editor is recommended.

**Option 2: With Tailwind CSS (for development)**

1.  **Follow steps 1 & 2 above.**

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Tailwind CLI:**
    * To re-compile the CSS after making changes to the `styles/main.css` file or HTML class names, run the following command from the root `calculator` directory:
    ```bash
    npx tailwindcss -i ./styles/main.css -o ./styles/styles.css --watch
    ```
