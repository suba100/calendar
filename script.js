let current = new Date();
let selectedKey = "";

function renderCalendar() {
    const dates = document.getElementById("dates");
    const monthYear = document.getElementById("monthYear");

    const year = current.getFullYear();
    const month = current.getMonth();

    monthYear.textContent =
        `${year} оны ${month + 1}-р сар`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    dates.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += "<div></div>";
    }

    for (let day = 1; day <= lastDate; day++) {
        const div = document.createElement("div");
        div.textContent = day;

        const key = `${year}-${month + 1}-${day}`;

        if (localStorage.getItem(key)) {
            div.classList.add("has-note");
        }

        div.onclick = () => openPopup(key, year, month + 1, day);
        dates.appendChild(div);
    }
}

function changeMonth(val) {
    current.setMonth(current.getMonth() + val);
    renderCalendar();
}

function openPopup(key, y, m, d) {
    selectedKey = key;
    document.getElementById("popupDate").textContent =
        `${y}-${m}-${d} хийх ажил`;
    document.getElementById("popupText").value =
        localStorage.getItem(key) || "";
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function saveNote() {
    const text = document.getElementById("popupText").value.trim();

    if (text === "") {
        localStorage.removeItem(selectedKey);
    } else {
        localStorage.setItem(selectedKey, text);
    }

    closePopup();
    renderCalendar();
}

renderCalendar();
