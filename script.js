
const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "PixelCraft Studio",
    type: "Internship",
    mode: "Remote",
    location: "Remote",
    skills: "HTML, CSS, JavaScript"
  },
  {
    id: 2,
    title: "Java Developer Trainee",
    company: "CodeSpring Labs",
    type: "Full-time",
    mode: "Hybrid",
    location: "Noida",
    skills: "Java, OOP, SQL"
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "InsightWorks",
    type: "Internship",
    mode: "Hybrid",
    location: "Noida",
    skills: "Excel, SQL, Python"
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    company: "Northstar Digital",
    type: "Internship",
    mode: "Remote",
    location: "Remote",
    skills: "Figma, UI Design"
  },
  {
    id: 5,
    title: "QA Testing Associate",
    company: "BrightByte Systems",
    type: "Full-time",
    mode: "On-site",
    location: "Noida",
    skills: "Testing, SQL"
  },
  {
    id: 6,
    title: "Cloud Support Intern",
    company: "Nimbus Tech",
    type: "Internship",
    mode: "On-site",
    location: "Noida",
    skills: "Linux, Cloud, Networking"
  }
];

const VALID_STATUSES = [
  "Interested",
  "Applied",
  "Interview",
  "Offer",
  "Rejected"
];

function readStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];

    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Unable to read ${key} from LocalStorage.`, error);
    return [];
  }
}

let savedJobs = [...new Set(
  readStoredArray("ccSavedJobs")
    .filter(id => Number.isInteger(id) && jobs.some(job => job.id === id))
)];

let applications = readStoredArray("ccApplications")
  .filter(app =>
    app &&
    Number.isInteger(app.id) &&
    jobs.some(job => job.id === app.id) &&
    VALID_STATUSES.includes(app.status) &&
    typeof app.date === "string"
  )
  .filter((app, index, list) =>
    list.findIndex(item => item.id === app.id) === index
  );

const jobList = document.getElementById("jobList");
const savedList = document.getElementById("savedList");
const applicationList = document.getElementById("applicationList");

function saveData() {
  try {
    localStorage.setItem("ccSavedJobs", JSON.stringify(savedJobs));
    localStorage.setItem("ccApplications", JSON.stringify(applications));
    return true;
  } catch (error) {
    console.error("Unable to save CareerConnect data.", error);
    alert("Your changes could not be saved. Please check browser storage settings and try again.");
    return false;
  }
}

function displayJobs() {
  const search = document.getElementById("searchInput")
    .value.toLowerCase().trim();

  const type = document.getElementById("typeFilter").value;
  const mode = document.getElementById("modeFilter").value;

  const filteredJobs = jobs.filter(job => {
    
    const text = `${job.title} ${job.company} ${job.skills} ${job.location}`
        .toLowerCase();

const matchesSearch = search === "" ||
  search.split(/\s+/).every(term =>
    new RegExp("\\b" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i")
      .test(text)
  );

return matchesSearch &&
  (type === "All" || job.type === type) &&
  (mode === "All" || job.mode === mode);

  });

  document.getElementById("emptyMessage")
    .classList.toggle("hidden", filteredJobs.length > 0);

  jobList.innerHTML = filteredJobs.map(job => `
    <article class="job-card">
      <h3>${job.title}</h3>
      <p class="company">${job.company}</p>
      <p class="job-details">
        ${job.type} · ${job.mode}<br>
        Location: ${job.location}
      </p>
      <p class="skills">${job.skills}</p>
      <button class="save-btn" data-save="${job.id}">
        ${savedJobs.includes(job.id) ? "♥ Saved" : "♡ Save"}
      </button>
      <button class="track-btn" data-track="${job.id}">
        ${applications.some(a => a.id === job.id)
          ? "View Tracker" : "Track Application"}
      </button>
    </article>
  `).join("");
}

function displaySaved() {
  const list = jobs.filter(job => savedJobs.includes(job.id));

  savedList.innerHTML = list.length
    ? list.map(job => `
      <article class="job-card">
        <h3>${job.title}</h3>
        <p class="company">${job.company}</p>
        <button class="remove-btn" data-remove-save="${job.id}">
          Remove Saved Job
        </button>
      </article>
    `).join("")
    : "<p>No saved jobs yet. Use the Save button above.</p>";
}

function displayApplications() {
  applicationList.innerHTML = applications.length
    ? applications.map(app => {
      const job = jobs.find(item => item.id === app.id);
      if (!job) return "";

      return `
        <div class="application-item">
          <div>
            <strong>${job.title}</strong>
            <p class="company">${job.company} · Added ${app.date}</p>
          </div>
          <select data-status="${job.id}" aria-label="Application status">
            ${["Interested", "Applied", "Interview", "Offer", "Rejected"]
              .map(status => `
                <option ${app.status === status ? "selected" : ""}>
                  ${status}
                </option>
              `).join("")}
          </select>
          <button class="remove-btn" data-remove-app="${job.id}">
            Remove
          </button>
        </div>
      `;
    }).join("")
    : "<p>No applications tracked yet.</p>";
}

function renderAll() {
  displayJobs();
  displaySaved();
  displayApplications();
}

jobList.addEventListener("click", event => {
  const saveId = event.target.dataset.save;
  const trackId = event.target.dataset.track;

  if (saveId) {
    const id = Number(saveId);

    savedJobs = savedJobs.includes(id)
      ? savedJobs.filter(jobId => jobId !== id)
      : [...savedJobs, id];

    saveData();
    renderAll();
  }

  if (trackId) {
    const id = Number(trackId);

    if (!applications.some(app => app.id === id)) {
      applications.push({
        id,
        status: "Interested",
        date: new Date().toLocaleDateString("en-IN")
      });
      saveData();
      renderAll();
    } else {
      document.getElementById("tracker")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
});

savedList.addEventListener("click", event => {
  const id = Number(event.target.dataset.removeSave);

  if (id) {
    savedJobs = savedJobs.filter(jobId => jobId !== id);
    saveData();
    renderAll();
  }
});

applicationList.addEventListener("change", event => {
  const id = Number(event.target.dataset.status);

  if (id) {
    const app = applications.find(item => item.id === id);
    if (app) {
      const newStatus = event.target.value;

if (!VALID_STATUSES.includes(newStatus)) {
  console.error("Invalid application status was rejected.");
  renderAll();
  return;
}

app.status = newStatus;
      saveData();
      displayApplications();
    }
  }
});

applicationList.addEventListener("click", event => {
  const id = Number(event.target.dataset.removeApp);

  if (id) {
    applications = applications.filter(app => app.id !== id);
    saveData();
    renderAll();
  }
});

document.getElementById("searchInput")
  .addEventListener("input", displayJobs);

document.getElementById("typeFilter")
  .addEventListener("change", displayJobs);

document.getElementById("modeFilter")
  .addEventListener("change", displayJobs);

renderAll();