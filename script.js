
// ========================================
// SWYNEX SMART LEARNING & QUIZ APP
// ========================================

// COURSE LESSONS

const lessons = {
    html: {
        title: "HTML Basics",
        english: "HTML stands for HyperText Markup Language. It creates the structure of webpages using headings, paragraphs, images, links and forms.",
        tamil: "HTML என்பது webpage-ன் அடிப்படை அமைப்பை உருவாக்க பயன்படுகிறது. Headings, paragraphs, images, links மற்றும் forms உருவாக்கலாம்.",
        example: "<h1>Welcome</h1>\n<p>Hello World</p>"
    },

    css: {
        title: "CSS Basics",
        english: "CSS stands for Cascading Style Sheets. It is used to design webpages using colors, fonts, backgrounds and layouts.",
        tamil: "CSS என்பது webpage-ஐ அழகாக வடிவமைக்க பயன்படுகிறது. Colors, fonts, backgrounds மற்றும் layouts மாற்றலாம்.",
        example: "h1 {\n  color: blue;\n  font-size: 30px;\n}"
    },

    js: {
        title: "JavaScript Basics",
        english: "JavaScript is used to make webpages interactive. It handles button clicks, calculations and form validation.",
        tamil: "JavaScript என்பது webpage-ஐ interactive ஆக மாற்ற பயன்படுகிறது. Button clicks, calculations மற்றும் form validation செய்யலாம்.",
        example: "function greet() {\n  alert('Hello!');\n}"
    }
};


// OPEN LESSON

let selectedCourse = "";

function openLesson(subject) {
    selectedCourse = subject;

    const lesson = lessons[subject];

    document.getElementById("lessonTitle").textContent = lesson.title;

    document.getElementById("lessonContent").innerHTML = `
        <h3>English Explanation</h3>
        <p>${lesson.english}</p>

        <h3 style="margin-top:18px;">தமிழ் விளக்கம்</h3>
        <p>${lesson.tamil}</p>

        <h3 style="margin-top:18px;">Code Example</h3>
        <pre style="background:#24295f;color:white;padding:15px;border-radius:8px;overflow:auto;"><code>${lesson.example}</code></pre>
    `;

    document.getElementById("startCourseQuizBtn").hidden = false;

    document.getElementById("startQuizBtn").hidden = false;
    document.getElementById("startQuizBtn").textContent = "Start Quiz";

    document.getElementById("questionNumber").textContent = "Ready to learn?";
    document.getElementById("questionText").textContent =
        "Click Start Course Quiz to begin.";

    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("progress").style.width = "0%";
    document.getElementById("nextBtn").hidden = true;

    document.getElementById("lesson").scrollIntoView({
        behavior: "smooth"
    });
}


// HTML QUESTIONS - 10

const htmlQuestions = [
    ["What does HTML stand for?", ["HyperText Markup Language", "HighText Machine Language", "Hyper Tool Language", "Home Tool Language"], 0, "HTML means HyperText Markup Language."],
    ["Which tag creates a paragraph?", ["<h1>", "<p>", "<img>", "<br>"], 1, "The p tag creates a paragraph."],
    ["Which tag creates the largest heading?", ["<h6>", "<head>", "<h1>", "<title>"], 2, "The h1 tag creates the largest heading."],
    ["Which tag adds an image?", ["<image>", "<pic>", "<img>", "<src>"], 2, "The img tag displays an image."],
    ["Which tag creates a hyperlink?", ["<a>", "<link>", "<p>", "<h2>"], 0, "The a tag creates a hyperlink."],
    ["Which tag creates an ordered list?", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "The ol tag creates a numbered list."],
    ["Which tag creates a line break?", ["<break>", "<lb>", "<br>", "<line>"], 2, "The br tag creates a line break."],
    ["Which attribute describes an image?", ["src", "href", "alt", "title"], 2, "The alt attribute provides alternative text."],
    ["Which tag creates a table row?", ["<td>", "<tr>", "<table>", "<th>"], 1, "The tr tag creates a table row."],
    ["Which tag contains visible webpage content?", ["<head>", "<meta>", "<body>", "<title>"], 2, "The body tag contains visible webpage content."]
];


// CSS QUESTIONS - 10

const cssQuestions = [
    ["What does CSS stand for?", ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], 1, "CSS means Cascading Style Sheets."],
    ["Which symbol selects a class?", ["#", ".", "*", "&"], 1, "A dot selects a class."],
    ["Which symbol selects an ID?", [".", "#", "*", "!"], 1, "The # symbol selects an ID."],
    ["Which property changes text color?", ["font-size", "background", "color", "margin"], 2, "The color property changes text color."],
    ["Which property changes background color?", ["background-color", "font-family", "padding", "border"], 0, "background-color changes the background color."],
    ["Which property changes text size?", ["text-style", "font-size", "font-color", "text-align"], 1, "font-size changes text size."],
    ["Which property makes text bold?", ["font-weight", "font-style", "text-align", "color"], 0, "font-weight controls text thickness."],
    ["Which property adds space inside an element?", ["margin", "padding", "border", "outline"], 1, "Padding adds space inside an element."],
    ["Which property adds space outside an element?", ["padding", "color", "margin", "width"], 2, "Margin adds space outside an element."],
    ["Which layout system arranges items in a row or column?", ["Flexbox", "HTML", "SQL", "Alert"], 0, "Flexbox arranges items in a row or column."]
];


// JAVASCRIPT QUESTIONS - 10

const jsQuestions = [
    ["Which language makes webpages interactive?", ["HTML", "CSS", "JavaScript", "SQL"], 2, "JavaScript makes webpages interactive."],
    ["Which keyword can declare a variable?", ["var", "style", "html", "design"], 0, "var is a JavaScript variable keyword."],
    ["Which function displays an alert box?", ["show()", "alert()", "display()", "message()"], 1, "alert() displays a message box."],
    ["Which symbol checks strict equality?", ["=", "==", "===", "!="], 2, "=== checks value and data type."],
    ["Which method selects an element by ID?", ["getElementById()", "getClass()", "selectTag()", "findElement()"], 0, "getElementById() selects an element by ID."],
    ["Which keyword declares a block-scoped variable?", ["let", "style", "body", "href"], 0, "let declares a block-scoped variable."],
    ["Which symbol performs addition?", ["-", "+", "*", "/"], 1, "The + symbol performs addition."],
    ["Which method writes output to the console?", ["console.log()", "alert()", "printPage()", "writeCSS()"], 0, "console.log() displays output in the console."],
    ["Which keyword defines a function?", ["function", "create", "method", "define"], 0, "The function keyword defines a function."],
    ["Which event happens when a button is clicked?", ["onload", "onchange", "onclick", "onmove"], 2, "onclick runs when an element is clicked."]
];


// QUIZ STATE

let currentQuestions = [];
let currentQuestion = 0;
let totalScore = 0;
let answered = false;


// START SELECTED COURSE QUIZ

function startCourseQuiz() {
    if (!selectedCourse) {
        alert("Please select a course first!");
        return;
    }

    if (selectedCourse === "html") {
        currentQuestions = htmlQuestions;
    } else if (selectedCourse === "css") {
        currentQuestions = cssQuestions;
    } else {
        currentQuestions = jsQuestions;
    }

    currentQuestion = 0;
    totalScore = 0;
    answered = false;

    document.getElementById("startQuizBtn").hidden = true;
    document.getElementById("startCourseQuizBtn").hidden = true;

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });

    showQuestion();
}


// DISPLAY QUESTION

function showQuestion() {
    answered = false;

    const question = currentQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        selectedCourse.toUpperCase() + " | Question " +
        (currentQuestion + 1) + "/10";

    document.getElementById("questionText").textContent = question[0];

    document.getElementById("progress").style.width =
        (currentQuestion / currentQuestions.length * 100) + "%";

    document.getElementById("feedback").textContent = "";
    document.getElementById("nextBtn").hidden = true;

    document.getElementById("score").textContent =
        "Score: " + totalScore;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question[1].forEach(function(option, index) {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option-btn";

        button.addEventListener("click", function() {
            checkAnswer(index);
        });

        optionsContainer.appendChild(button);
    });
}


// CHECK ANSWER

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const question = currentQuestions[currentQuestion];

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(button, index) {
        button.disabled = true;

        if (index === question[2]) {
            button.style.background = "#d9f8e5";
            button.style.borderColor = "#39a96b";
        }

        if (index === selectedIndex && index !== question[2]) {
            button.style.background = "#ffe1e1";
            button.style.borderColor = "#d34b4b";
        }
    });

    const feedback = document.getElementById("feedback");

    if (selectedIndex === question[2]) {
        totalScore++;

        feedback.textContent = "Correct! " + question[3];
        feedback.style.color = "#23864c";
    } else {
        feedback.textContent = "Wrong answer. " + question[3];
        feedback.style.color = "#d34b4b";
    }

    document.getElementById("score").textContent =
        "Score: " + totalScore;

    document.getElementById("nextBtn").hidden = false;

    document.getElementById("nextBtn").textContent =
        currentQuestion === currentQuestions.length - 1
        ? "View Result"
        : "Next Question";
}


// NEXT QUESTION

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


// FINAL RESULT

function showResult() {
    const total = currentQuestions.length;
    const percentage = Math.round(totalScore / total * 100);
    const courseName = selectedCourse.toUpperCase();

    document.getElementById("questionNumber").textContent =
        courseName + " Quiz Completed!";

    document.getElementById("questionText").textContent =
        "Your Score: " + totalScore + " / " + total;

    document.getElementById("progress").style.width = "100%";
    document.getElementById("options").innerHTML = "";

    const feedback = document.getElementById("feedback");

    if (percentage >= 80) {
        feedback.textContent = "Excellent! You did a great job!";
    } else if (percentage >= 50) {
        feedback.textContent = "Good work! Keep practicing!";
    } else {
        feedback.textContent = "Keep learning! Try again!";
    }

    feedback.style.color = "#5146d8";

    const storageKey = "swynexBest_" + selectedCourse;

    const oldBest = Number(localStorage.getItem(storageKey)) || 0;

    const bestScore = Math.max(oldBest, totalScore);

    localStorage.setItem(storageKey, bestScore);

    feedback.textContent +=
        " Percentage: " + percentage + "%." +
        " Best Score: " + bestScore + "/" + total + ".";

    document.getElementById("nextBtn").hidden = true;
    document.getElementById("startQuizBtn").hidden = false;

    document.getElementById("startQuizBtn").textContent =
        "Try Again";
}

