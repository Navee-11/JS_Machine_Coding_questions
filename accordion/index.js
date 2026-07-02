const sections = [
  {
    title: "section1",
    content: "Content for section 1",
  },
  {
    title: "section2",
    content: "Content for section 2",
  },
  {
    title: "section3",
    content: "Content for section 4",
  },
];

document.addEventListener("DOMContentLoaded", (e) => {
  const accordionContainer = document.querySelector("#accordion");
  sections.forEach((section, index) => {
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("accordion-item");

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordion-header");
    sectionHeader.textContent = section.title;
    sectionItem.appendChild(sectionHeader);

    const sectionContent = document.createElement("div");
    sectionContent.classList.add("accordion-content");
    sectionContent.textContent = `${section.content}`;
    sectionItem.appendChild(sectionContent);
    accordionContainer.appendChild(sectionItem);
    if (index === 0) {
      sectionItem.classList.add("active");
      sectionContent.style.display = "block";
    }
  });

  accordionContainer.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".accordion-content");
    const isActive = sectionItem.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-content").style.display = "none";
    });
    if (!isActive) {
      sectionItem.classList.add("active");
      sectionItem.querySelector(".accordion-content").style.display = "block";
    }
  });
});
