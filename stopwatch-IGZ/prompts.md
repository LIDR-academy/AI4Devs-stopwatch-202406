# Mermind Diagram - Stopwatch Timer Project (generated with ChatGPT)

## 1. Project Overview
- **Project Name**: Stopwatch Timer
- **Purpose**: Create a stopwatch with start, pause, continue, and clear functionalities using HTML, CSS, and JavaScript.
- **Technologies**: 
  - HTML
  - CSS
  - JavaScript
- **Files**: 
  - `index.html`
  - `script.js`
  - `test.js`

## 2. Good Practices
- **Code Structure**:
  - Keep HTML semantic and organized.
  - Use CSS classes for styling and avoid inline styles.
  - Separate JavaScript logic from HTML.
- **Naming Conventions**:
  - Use descriptive IDs and class names.
  - Maintain consistent naming conventions (e.g., camelCase for JS, kebab-case for CSS).
- **Reusability**:
  - Use functions to encapsulate repeated logic (e.g., `formatTime`).
- **Readability**:
  - Comment code where necessary.
  - Format and indent code properly for readability.
- **Design Considerations**:
  - Ensure responsiveness and scalability.
  - Use clear and contrasting colors for buttons based on their state.
- **Testing**:
  - Include automated tests to verify functionality.
  - Use assertions to check expected outcomes in the code.

## 3. Development Process
- **Initial Setup**:
  - Create basic HTML structure (`index.html`).
  - Style the stopwatch interface with embedded CSS in the HTML file.
  - Implement basic JavaScript logic for the timer.
- **Prompt 1**:
  - **User Request**: "Create a timer and countdown that looks like the attached image."
  - **Action**: 
    - Create the HTML structure and style in `index.html`.
    - Create `script.js` to handle timer functionality.
- **Prompt 2**:
  - **User Request**: "Make it twice as big, swap the buttons, and change the color of the button to blue when it has the 'CONTINUE' text."
  - **Action**:
    - Increase the size of the stopwatch interface by adjusting CSS (container, text, and buttons).
    - Swap the positions of the start and clear buttons in the HTML structure.
    - Add a new CSS class for the "CONTINUE" state to change the button color to blue.
- **Prompt 3**:
  - **User Request**: "Create a test file to validate the functionality of the stopwatch."
  - **Action**:
    - Create a `test.js` file with automated tests to verify the stopwatch's start, pause, continue, and clear functionalities.
    - Use JavaScript assertions to check the correctness of each feature.

## 4. Prompts Used
- **Initial Prompt**: 
  - "Act as an expert frontend developer to create a timer and countdown that looks like the attached image."
  - **Tasks**:
    - Design HTML structure.
    - Implement CSS styling.
    - Develop JavaScript interactions.
- **Subsequent Prompts**:
  - "Make it twice as big, swap the buttons, and change the color of the button to blue when it has the 'CONTINUE' text."
  - **Tasks**:
    - Resize the stopwatch UI elements.
    - Swap button positions.
    - Implement color change for the "CONTINUE" state.
  - "Create a test file to validate the functionality of the stopwatch."
  - **Tasks**:
    - Develop a `test.js` file with assertions to automate testing.

## 5. Future Enhancements
- **Potential Features**:
  - Add laps functionality.
  - Implement a countdown feature.
  - Allow custom time input for countdown.
- **Optimization**:
  - Consider using external CSS and JavaScript files for larger projects.
  - Explore using localStorage to persist timer state.
- **Advanced Testing**:
  - Integrate a JavaScript testing framework like Jest or Mocha for more comprehensive testing.
  - Set up continuous integration (CI) for automated testing in a production environment.

-------------------------------------
# My Prompts
## Inés García Zapata
## Use ChatGPT 
- **1º Prompt literal**
- Act as an expert frontend developer to create a timer and countdown that looks like the attached image.
    You must create an index.html with the styles inside the style tag and a scrip.js with the events and interactions.
    The red button with the text CLEAR is to set the counter to 0 and the green one with the text STAR is to start the stopwatch. When the green button is activated it changes the text to pause and when pressed again it changes to blue and changes the text to continue
    The image is at the address: https://github.com/PetraZeta/AI4Devs-stopwatch/blob/main/res/stopwatch.png
- **2º Prompt literal**
- Create a Mermind diagram that explains the project with good practices and the promps used and you update it with each promp.
- **3º Prompt literal**
- It's almost perfect, but make it twice as big and change the buttons, the start button on the left and the clear button on the right. You also have to change the color of the button to blue when it has the continue text
- **4º Prompt literal**
- can you make a test file?
- **5º Prompt literal**
- update Mermind