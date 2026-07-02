const tabsData = [
  {
    id: "tab1",
    title: "Tab 1",
    content: "This is a content for Tab 1",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content: "This is a content for Tab 2",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content: "This is a content for Tab 3",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let activeTab = tabsData[0].id;
  const renderTabs = () => {
    const tabContainer = document.querySelector("#tabContainer");
    const tabContentContainer = document.querySelector("#tabContentContainer");

    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.setAttribute("data-tab", tab.id);
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.appendChild(tabContent);
    });

    tabContainer.addEventListener("click", (e) => {
      if (e.target.matches(".tabLinks")) {
        console.log(e);
        const tabId = e.target.getAttribute("data-tab");
        //Below logic is to avoid re-rendering the same tab if it is already active
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
      //   e.target.matches equivalient to if (e.target.classList.contains("tabLinks"))
    });
    const openTab = (tabId) => {
      const tabContents = document.querySelectorAll(".tabContent");
      const tabLinks = document.querySelectorAll(".tabLinks");

      tabContents.forEach((tab) => tab.classList.remove("active"));
      tabLinks.forEach((tab) => tab.classList.remove("active"));

      document.getElementById(tabId).classList.add("active");
      document
        .querySelector(`button[data-tab="${tabId}"]`)
        .classList.add("active");
    };
  };

  renderTabs();
  document.getElementById(activeTab).classList.add("active");
  document
    .querySelector(`button[data-tab="${activeTab}"]`)
    .classList.add("active");
});
