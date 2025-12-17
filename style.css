let current = new Date();
let selectedKey = "";

function getTasks(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveTasks(key, tasks) {
    localStorage.setItem(key, JSON.stringify(tasks));
}

function renderCalendar() {
    const dates = document.getElementById("dates");
    const monthYear = document.getElementById("monthYear");

    const y = current.getFullYear();
    const m = current.getMonth();

    monthYear.textContent = `${y} оны ${m + 1}-р сар`;
    dates.innerHTML = "";

    const firstDay = new Date(y, m, 1).getDay();
    const lastDate = new Date(y, m + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += "<div></div>";
    }

    for (let d = 1; d <= lastDate; d++) {
        const div = document.createElement("div");
        div.textContent = d;

        const key = `${y}-${m + 1}-${d}`;
        const tasks = getTasks(key);
        const count = tasks.length;

        if (count === 1) div.classList.add("note-1");
        else if (count === 2) div.classList.add("note-2");
        else if (count >= 3) div.classList.add("note-3");

        div.onclick = () => openPopup(key, y, m + 1, d);
        dates.appendChild(div);
    }
}

function openPopup(key, y, m, d) {
    selectedKey = key;
    document.getElementById("popupDate").textContent =
        `${y}-${m}-${d} хийх ажлууд`;

    renderTaskList();
    document.getElementById("popup").style.display = "flex";
}

function renderTaskList() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    const tasks = getTasks(selectedKey);
    tasks.forEach((t, i) => {
        const li = document.createElement("li");
        li.textContent = t;
        li.onclick = () => removeTask(i);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (!input.value.trim()) return;

    const tasks = getTasks(selectedKey);
    tasks.push(input.value.trim());
    saveTasks(selectedKey, tasks);

    input.value = "";
    renderTaskList();
    renderCalendar();
}

function removeTask(index) {
    const tasks = getTasks(selectedKey);
    tasks.splice(index, 1);
    saveTasks(selectedKey, tasks);

    renderTaskList();
    renderCalendar();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function changeMonth(val) {
    current.setMonth(current.getMonth() + val);
    renderCalendar();
}

renderCalendar();
