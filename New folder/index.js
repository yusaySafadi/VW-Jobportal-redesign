const jobList = document.querySelector(".job-list");
function createJob(job) {
  let jobContainer = document.createElement("div");
  jobContainer.className = "job-container";

  let jobContainerTop = document.createElement("div");
  jobContainerTop.className = "job-container-top";
  jobContainer.appendChild(jobContainerTop);

  let jobTopContainerWrapper = document.createElement("div");
  jobContainerTop.appendChild(jobTopContainerWrapper);

  let jobTitleContainer = document.createElement("div");
  jobTitleContainer.className = "job-title__container";

  let jobTitle = document.createElement("h5");
  jobTitle.innerHTML = job.title;
  jobTitle.className = "job-title";

  if (job.isNew) {
    let jobNewKeyword = document.createElement("span");
    jobNewKeyword.className = "new";
    jobNewKeyword.innerHTML = "NEU";

    jobTitleContainer.appendChild(jobNewKeyword);
  }
  jobTitleContainer.appendChild(jobTitle);
  jobTopContainerWrapper.appendChild(jobTitleContainer);

  let jobKeywordsContainer = document.createElement("div");
  jobKeywordsContainer.className = "job-keywords-container";
  jobTopContainerWrapper.appendChild(jobKeywordsContainer);

  let jobFieldElement = document.createElement("span");
  jobFieldElement.innerHTML = job.field;
  jobKeywordsContainer.appendChild(jobFieldElement);

  if (job.isTarif) {
    let jobTarifKeyword = document.createElement("span");

    jobTarifKeyword.innerHTML = "Tarif/Tarif Plus";

    jobKeywordsContainer.appendChild(jobTarifKeyword);
  }
  let jobInfoContainerElement = document.createElement("div");
  jobInfoContainerElement.className = "job-info-container";

  let jobInfoLocationElement = document.createElement("div");
  jobInfoLocationElement.className = "job-info-location";
  jobInfoLocationElement.innerHTML = job.location;
  jobInfoContainerElement.appendChild(jobInfoLocationElement);

  let jobInfoDateElement = document.createElement("div");
  jobInfoDateElement.className = "job-info-date";
  jobInfoDateElement.innerHTML = "Veröffentlicht am " + job.date;
  jobInfoContainerElement.appendChild(jobInfoDateElement);

  if (job.tasks.length > 0) {
    let jobTasksContainerElement = document.createElement("div");
    jobTasksContainerElement.className = "job-tasks";

    let jobTasksListElement = document.createElement("ul");
    jobTasksContainerElement.appendChild(jobTasksListElement);
    job.tasks.forEach((task) => {
      let taskElement = document.createElement("li");
      taskElement.textContent = task;
      jobTasksListElement.appendChild(taskElement);
    });

    jobContainer.appendChild(jobTasksContainerElement);
  }

  jobContainerTop.appendChild(jobInfoContainerElement);
  jobList.appendChild(jobContainer);
}
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((job) => {
      createJob(job);
    });
  });
