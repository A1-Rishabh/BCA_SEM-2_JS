const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");

function createEventCard(eventData) {
  const card = document.createElement("div");
  card.classList.add("event-card");

  card.innerHTML = `
        <h3>${eventData.title}</h3>
        <div>Date: ${eventData.date}</div>
        <div>Category: ${eventData.category}</div>
        <p>${eventData.description}</p>
    `;

  return card;
}

function addEvent(eventData) {
  const emptyState = document.querySelector(".empty-state");

  if (emptyState) {
    emptyState.remove();
  }

  const card = createEventCard(eventData);
  eventContainer.appendChild(card);
}

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: eventCategory.value,
    description: eventDescription.value,
  };

  addEvent(eventData);
  eventForm.reset();
});

clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML = `
        <div class="empty-state">No events yet. Add your first event!</div>
    `;
});

addSampleBtn.addEventListener("click", () => {
  const sampleEvents = [
    {
      title: "Tech Conference 2026",
      date: "2026-05-15",
      category: "Conference",
      description: "Annual technology conference with industry leaders.",
    },
    {
      title: "JavaScript Workshop",
      date: "2026-03-10",
      category: "Workshop",
      description: "Hands-on workshop to improve JS skills.",
    },
  ];

  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.remove();

  sampleEvents.forEach((event) => {
    eventContainer.appendChild(createEventCard(event));
  });
});
