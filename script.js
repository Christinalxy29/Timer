// Timer
function startTimer() {
    const timerElement = document.getElementById("timer");
    let seconds = 0;
  
    setInterval(() => {
      seconds++;
      timerElement.innerText = formatTime(seconds);
    }, 1000);
  }
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    // adding a leading 0, if the value is less than 10 
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
  }
  
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
  
  startTimer();
  
  // Countdown
  function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");
  
    setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference <= 0) {
        countdownElement.innerText = "Countdown Complete!";
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      countdownElement.innerText = `${days}d ${padZero(hours)}h ${padZero(
        minutes
      )}m ${padZero(seconds)}s`;
    }, 1000);
  }
  
  // Set the target date for the countdown (Year, Month - 1, Day, Hour, Minute, Second)
  const targetDate = new Date(2023, 4, 31, 23, 59, 59);
  startCountdown(targetDate);
  
  // Calendar
  function renderCalendar() {
    const calendarElement = document.getElementById("calendar");
  
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    const calendarDays = getCalendarDays(currentYear, currentMonth);
  
    let calendarHTML = "";
    calendarHTML += `<h2>${getMonthName(currentMonth)} ${currentYear}</h2>`;
    calendarHTML += `<table>`;
    calendarHTML += `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`;
  
    let rowHTML = "<tr>";
    calendarDays.forEach((day, index) => {
      if (index > 0 && index % 7 === 0) {
        calendarHTML += rowHTML + "</tr>";
        rowHTML = "<tr>";
      }
  
      if (day === currentDate.getDate()) {
        rowHTML += `<td class="current-day">${day}</td>`;
      } else {
        rowHTML += `<td>${day}</td>`;
      }
    });
  
    // Fill in remaining empty cells
    while (rowHTML.split("<td>").length - 1 < 7) {
      rowHTML += "<td></td>";
    }
  
    calendarHTML += rowHTML + "</tr>";
    calendarHTML += "</table>";
  
    calendarElement.innerHTML = calendarHTML;
  }
  
  