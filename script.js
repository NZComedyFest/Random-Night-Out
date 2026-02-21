// Populate the day dropdown based on available shows
const daySelect = document.getElementById("daySelect");

// Get unique dates from shows
const uniqueDates = [...new Set(shows.map(s => s.date))].sort();
uniqueDates.forEach(date => {
  const option = document.createElement("option");
  option.value = date;
  option.text = date;
  daySelect.add(option);
});

// Generate random night for selected day
function generateNight() {
  const selectedDate = daySelect.value;
  const nightPlanDiv = document.getElementById("nightPlan");
  nightPlanDiv.innerHTML = ""; // Clear previous plan

  // Filter shows for selected date
  const showsForDay = shows.filter(s => s.date === selectedDate);
  if (showsForDay.length === 0) {
    nightPlanDiv.innerHTML = "<p>No shows scheduled for this day.</p>";
    return;
  }

  // Shuffle and pick 2–3 shows
  const shuffled = showsForDay.sort(() => 0.5 - Math.random());
  const numShows = Math.min(Math.floor(Math.random() * 2) + 2, showsForDay.length); // 2–3 or fewer if not enough
  const selectedShows = shuffled.slice(0, numShows);

  // Build HTML output
  let output = `<h2>🎉 Your Night Out for ${selectedDate}</h2>`;
  selectedShows.forEach(show => {
    output += `
      <div class="show-card">
        <div class="show-info">
          <b>${show.title}</b><br>
          ${show.time} — ${show.venue}
        </div>
      </div>
    `;
  });

  nightPlanDiv.innerHTML = output;
}
