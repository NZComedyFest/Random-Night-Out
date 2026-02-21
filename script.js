function generateNight() {
  const nightPlanDiv = document.getElementById("nightPlan");
  nightPlanDiv.innerHTML = ""; // Clear previous plan

  // Shuffle shows array
  const shuffled = shows.sort(() => 0.5 - Math.random());

  // Pick 2–3 random shows
  const numShows = Math.floor(Math.random() * 2) + 2; // 2 or 3 shows
  const selected = shuffled.slice(0, numShows);

  // Build HTML output
  let output = "<h2>🎉 Your Night Out!</h2>";
  selected.forEach(show => {
    output += `
      <div class="show-card">
        <div class="show-info">
          <b>${show.title}</b><br>
          ${show.date} at ${show.time} — ${show.venue}
        </div>
      </div>
    `;
  });

  nightPlanDiv.innerHTML = output;
}
