let current = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const dates = document.getElementById("dates");

    const year = current.getFullYear();
    const month = current.getMonth();

    monthYear.textContent =
        current.toLocaleString("default", { month: "long" }) + " " + year;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    dates.innerHTML = "";

    // Blank cells
    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += "<div></div>";
    }

    // Dates
    for (let day = 1; day <= lastDate; day++) {
        const div = document.createElement("div");
        div.textContent = day;

        const key = `${year}-${month + 1}-${day}`;

        // ✅ Note байгаа эсэхийг шалгана
        if (localStorage.getItem(key)) {
            div.classList.add("has-note");
        }

        div.onclick = () => openNote(year, month, day);
        dates.appendChild(div);
    }
}


function changeMonth(val) {
    current.setMonth(current.getMonth() + val);
    renderCalendar();
}

function openNote(y, m, d) {
    const noteBox = document.getElementById("noteBox");
    const noteText = document.getElementById("noteText");
    const selectedDate = document.getElementById("selectedDate");

    const key = `${y}-${m + 1}-${d}`;

    selectedDate.textContent = `Notes for ${key}`;
    noteText.value = localStorage.getItem(key) || "";
    noteBox.style.display = "block";
    noteBox.setAttribute("data-key", key);
}

function saveNote() {
    const noteBox = document.getElementById("noteBox");
    const key = noteBox.getAttribute("data-key");
    const text = document.getElementById("noteText").value;

    if (text.trim() === "") {
        localStorage.removeItem(key); // note устгана
    } else {
        localStorage.setItem(key, text);
    }

    renderCalendar(); // 🔄 календар дахин зурна
    alert("Note saved!");
}


renderCalendar();
