// Changing Themes
function changeTheme() {
    document.getElementById("theme-style").href = document.getElementById("themeSelector").value;
}

// LIVE INPUT UPDATES
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const linkedinInput = document.getElementById("linkedinInput");
const githubInput = document.getElementById("githubInput");

nameInput.oninput = () => document.getElementById("previewName").innerText = nameInput.value;
emailInput.oninput = () => document.getElementById("previewEmail").innerText = emailInput.value;
phoneInput.oninput = () => document.getElementById("previewPhone").innerText = phoneInput.value;
linkedinInput.oninput = () => document.getElementById("previewLinkedin").innerText = linkedinInput.value;
githubInput.oninput = () => document.getElementById("previewGithub").innerText = githubInput.value;


// Photo upload
document.getElementById("photoInput").addEventListener("change", function () {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("previewPhoto").src = reader.result;
    }
    reader.readAsDataURL(this.files[0]);
});


// ------------------------------------------
// FEATURE 1 — ADD SECTION + MULTIPLE ITEMS
// ------------------------------------------

function addSection() {
    let div = document.createElement("div");
    div.classList.add("section-block");

    div.innerHTML = `
        <input type="text" class="section-title" placeholder="Section Title (e.g., Skills)" oninput="renderSections()">
        
        <div class="items"></div>

        <button class="add-item-btn" onclick="addItem(this)">+ Add Item</button>
        <button onclick="this.parentNode.remove(); renderSections()">Remove Section</button>
        <hr>
    `;

    document.getElementById("dynamicSections").appendChild(div);
}

function addItem(btn) {
    let itemsDiv = btn.previousElementSibling;

    let itemBox = document.createElement("div");
    itemBox.classList.add("item-box");

    itemBox.innerHTML = `
        <input type="text" class="section-item" placeholder="Enter item (HTML, CSS, B.Tech)" oninput="renderSections()">
        <button onclick="this.parentNode.remove(); renderSections()">x</button>
    `;

    itemsDiv.appendChild(itemBox);
}


// ------------------------------------------
// FEATURE 2 — AUTO PROFESSIONAL LINES
// ------------------------------------------

function autoLine(text) {
    // Clean input
    text = text.toLowerCase().trim();
    const cleanText = text.replace(/[.+]/g, "").trim(); // remove '.' and '+' for matching

    const map = {
        // PROGRAMMING LANGUAGES
        "html": "Strong understanding of HTML for clean and structured web content.",
        "css": "Skilled in CSS for creating responsive and modern UI designs.",
        "javascript": "Proficient in JavaScript for building dynamic and interactive web applications.",
        "js": "Proficient in JavaScript for building dynamic and interactive web applications.",
        "typescript": "Experience with TypeScript for writing scalable and type-safe applications.",
        "python": "Comfortable with Python for scripting, automation, and application development.",
        "java": "Ability to write efficient and structured Java-based programs.",
        "c": "Good understanding of C programming, memory concepts, and logic building.",
        "c++": "Knowledge of object-oriented programming using C++.",
        "cpp": "Knowledge of object-oriented programming using C++.",
        "c#": "Experience with C# and .NET for application development.",
        "php": "Basic understanding of PHP for backend development.",
        "sql": "Skilled in SQL for querying, managing, and analysing databases.",
        "mongodb": "Experience working with MongoDB NoSQL databases.",

        // FRONTEND
        "react": "Knowledge of React for building fast and scalable user interfaces.",
        "nextjs": "Experience with Next.js for server-side rendered and static web apps.",
        "next": "Experience with Next.js for server-side rendered and static web apps.",
        "vue": "Familiar with Vue.js for reactive and component-driven frontends.",
        "tailwind": "Experience using Tailwind CSS for fast and responsive styling.",
        "bootstrap": "Good understanding of Bootstrap for rapid UI development.",

        // BACKEND
        "node": "Practical experience using Node.js for backend development.",
        "nodejs": "Practical experience using Node.js for backend development.",
        "express": "Knowledge of Express.js for building REST APIs.",
        "django": "Understanding of Django for scalable Python web applications.",
        "flask": "Experience with Flask for lightweight backend development.",
        "firebase": "Experience using Firebase for realtime database and authentication.",

        // AI / ML
        "machine learning": "Keen interest in Machine Learning with ability to build simple ML models.",
        "ml": "Comfortable with ML fundamentals and model creation.",
        "ai": "Passionate about AI and constantly exploring intelligent automation.",
        "deep learning": "Basic understanding of Deep Learning concepts and neural networks.",
        "opencv": "Experience using OpenCV for image processing and computer vision tasks.",
        "yolo": "Hands-on experience with YOLO for real-time object detection.",
        "tensorflow": "Basic understanding of TensorFlow for neural network development.",
        "pytorch": "Comfortable working with PyTorch for AI model training.",

        // TOOLS
        "git": "Skilled in using Git for version control and team collaboration.",
        "github": "Strong familiarity with GitHub for project hosting and workflows.",
        "linux": "Capable of handling Linux commands and system navigation.",
        "docker": "Basic knowledge of Docker for containerized applications.",
        "aws": "Understanding of AWS cloud services and deployment basics.",

        // EDUCATION
        "b.tech": "Pursuing B.Tech with dedication and strong conceptual understanding.",
        "btech": "Pursuing B.Tech with dedication and strong conceptual understanding.",
        "degree": "Committed towards completing academic journey with consistency.",
        "engineering": "Focused on developing strong engineering problem-solving skills.",

        // PROJECTS
        "project": "Successfully completed meaningful and practical project work.",
        "website": "Capable of designing and developing working websites.",
        "portfolio": "Developed a personal portfolio showcasing skills and achievements.",
        "app": "Ability to build functional and user-friendly applications.",

        // SOFT SKILLS
        "communication": "Strong communication skills with clarity and professionalism.",
        "leadership": "Ability to lead teams and take responsibility for outcomes.",
        "teamwork": "Good team player with a collaborative working mindset.",
        "problem solving": "Excellent problem-solving mindset with analytical thinking.",
        "creativity": "Highly creative and passionate about new ideas and innovation.",
        "adaptability": "Quick learner and adaptable to new technologies.",

        // ACHIEVEMENTS
        "certificate": "Earned certifications demonstrating knowledge and commitment.",
        "award": "Received recognition for performance and hard work.",
        "rank": "Achieved a strong academic or competitive rank.",
        "competition": "Participated actively in competitions and challenges.",

        // GENERAL TERMS
        "learning": "Always learning and improving skills with dedication.",
        "passion": "Deeply passionate about continuous growth and development.",
        "technology": "Keen interest in upcoming technologies and modern innovations.",

        "git": "Proficient in Git for version control and collaborative development.",
"github": "Active experience using GitHub for repositories, workflows, and project hosting.",
"docker": "Basic knowledge of Docker for containerized application development.",
"aws": "Understanding of AWS cloud services including EC2, S3, and Lambda.",
"azure": "Basic familiarity with Microsoft Azure cloud platform.",
"gcp": "Knowledge of Google Cloud Platform services.",
"devops": "Understanding of DevOps culture including automation and CI/CD.",
"jenkins": "Basic understanding of Jenkins pipelines for automation.",
"linux": "Comfortable using Linux commands for development and server tasks.",


"android": "Basic experience with Android development.",
"kotlin": "Knowledge of Kotlin for modern Android applications.",
"swift": "Beginner understanding of Swift for iOS apps.",
"flutter": "Experience building cross-platform apps using Flutter.",
"react native": "Knowledge of React Native for mobile app development.",


"project": "Successfully completed hands-on projects demonstrating practical skills.",
"projects": "Worked on multiple projects showcasing strong problem-solving.",
"website": "Experienced in designing and developing functional websites.",
"portfolio": "Built a professional portfolio to showcase work and achievements.",
"app": "Experience creating user-friendly applications.",
"hackathon": "Actively participated in hackathons with strong performance.",


"communication": "Strong communication skills with clarity and confidence.",
"leadership": "Proven leadership ability to guide teams effectively.",
"teamwork": "Works well within teams with positive collaboration.",
"creativity": "Highly creative with innovation-oriented thinking.",
"adaptability": "Adaptable to new technologies and fast-paced environments.",
"problem solving": "Excellent problem-solving and analytical thinking.",
"time management": "Strong time management and planning ability.",
"critical thinking": "Critical thinker focused on logical decision-making.",
"presentation": "Good presentation skills for explaining complex topics.",


"certificate": "Earned relevant certifications demonstrating continuous learning.",
"certification": "Certified in key technical skill areas.",
"award": "Recognized with awards for outstanding performance.",
"rank": "Achieved notable rank in academic or competitive fields.",
"competition": "Active participant in competitions and technical events.",
"internship": "Completed internship gaining real-world development experience.",


"technology": "Strong passion for modern technology and innovation.",
"learning": "Committed to continuous learning and self-improvement.",
"passion": "Highly passionate about technology and creativity.",
"self learning": "Self-learner with a growth mindset.",
"logical thinking": "Strong logical and analytical thinking abilities.",

    };

    // First match exact words
    for (let key in map) {
        if (text.includes(key) || cleanText.includes(key)) {
            return map[key];
        }
    }

    // Default fallback
    return "I am passionate about " + text + " and always aim to grow in this field.";
}




// ------------------------------------------
// Render sections into preview
// ------------------------------------------

function renderSections() {
    let sections = document.querySelectorAll(".section-block");
    let output = "";

    sections.forEach(sec => {
        let title = sec.querySelector(".section-title").value;
        if (!title) return;

        let items = sec.querySelectorAll(".section-item");
        let lines = "";

        items.forEach(item => {
            if (item.value.trim() !== "") {
                lines += `<li>${autoLine(item.value.trim())}</li>`;
            }
        });

        output += `
            <h3>${title}</h3>
            <ul>${lines}</ul>
        `;
    });

    document.getElementById("previewSections").innerHTML = output;
}


// ------------------------------------------
// PDF DOWNLOAD
// ------------------------------------------

document.getElementById("downloadPDF").addEventListener("click", function () {
    const resume = document.getElementById("resumePreview");

    html2canvas(resume, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf.jsPDF('p', 'mm', 'a4');

        let pdfWidth = pdf.internal.pageSize.getWidth();
        let pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    });
});
