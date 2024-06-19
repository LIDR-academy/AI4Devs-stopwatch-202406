# Prompts

I used chatGPT 4o and upload images in pay version.

## Prompt 1

Act as an expert web developer where you implement solution with the best practices in the industry, include always a view holistic of the problem given.

I need to create a stopwatch and countdown web page similar to this https://www.online-stopwatch.com/ (go to the web page and analyze the functionalities)

Based on the following seeds

index.html -> https://github.com/andermev/AI4Devs-stopwatch/blob/main/template/index.html

scripts.js -> https://github.com/andermev/AI4Devs-stopwatch/blob/main/template/script.js

Requirements

    Kickoff
    1.1. Based on link https://www.online-stopwatch.com/ to copy the generate functionalities and styles.
    Structure
    2.1. As mentioned above point based on the seeds index.html and scripts.js to build the solution
    2.2. Create a styles.css where put all styles of the application.
    2.3. Create an archive where exist the documentation of the development
    Main Functionalities
    3.1. Build a stopwatch functionality when a user click on it, it slide a new html into the same div or container with the chronometer digits and options similar to images uploaded into prompt. (see folder prompt-images) 
    3.1.1. There are three options start, clear and back
    3.1.1.1 Start button begins the counter in hours:min:sec
    3.1.1.2 Clear button begins the counter in 0 like that 00:00:00:000
    3.1.1.3 Back button go back to main page (show stopwatch option and countdown option)
    3.2. Build a countdown functionality when a user click on it, it slide a new html into the same div or container with the chronometer digits and options similar to images uploaded into prompt. (see folder prompt-images) 
    3.1.1. There are three options set, clear and back
    3.1.1.1 Set button configure the value for the countdown, the user can configure value as hour:min:sec
    3.1.1.1.1 After the configuration the value is transformed in respective unit like if the user put 60 seconds it will show 1 min in the countdown.
    3.1.1.1.2 In this point the page shows two options Start and Clear buttons
    3.1.1.2 Start button counts down the time.
    3.1.1.3 Clear button begins the counter in 0.
    3.1.1.2 Clear button begins the counter in 0 like that 00:00:00:000
    3.1.1.3 Back button go back to main page (show stopwatch option and countdown option)
    Second functionalities.
    4.1. There is a option called add to my page, it shows a html/javascript that allows embedding in other web page
    4.2. There is a option called go full-screen, and resize the page in full screen and responsive according the device.
    No functionalities.
    5.1. Be friendly with the UI and the user, thinks in the accessibility feature and best/good practices to any kind of people.
    5.2. Enforce the accessibility based on colors, icons, modern and kindle design that combine them and look fresh and easy to use.
    5.3. Always oriented in good development practices in layer responsibilities, loose coupling and tight cohesion.
    5.4. Always oriented in good development practices in web developer and create solution easy to scale and maintain.
    5.5. Use as input the images uploaded into prompt. (see folder prompt-images) 
    5.6. Add a file with documentation in markdown for end user to facilitate the understanding of application.
    5.7. Add a file with documentation in markdown for technical user to facilitate the understanding of application code.
    5.8. Implement unit testing to verify the main functionalities.
    5.9. Add key comments into the code in one line and resume indicating the objective of the code.

## Prompt 2

As a senior and expert web developer.

And the first solution should be enhanced.

IMPROVEMENTS

    The main page only has the buttons stopwatch and countwatch, but each one could be with a image of a watch to arrow in right direction if the option is stopwatch, and watch with arrow in left direction if the option is countdown.
    Implement functionality add to my page commented in the previous prompt.
    Implement functionality go full screen commented in the previous prompt.
    Implement code in the unit test file since the testing functions are empty.
    Based on the images upload to see how is the transition between actions and look the appearance and style of the buttons, colors, texts, etc.