var data = [
  {
    id: "1",
    name: "TV",
    action: "Turn on",
    date: "124689",
  },
  {
    id: "2",
    name: "Washer",
    action: "Slep",
    date: "14533",
  },
  {
    id: "3",
    name: "Selling Fan",
    action: "Turn off",
    date: "14518",
  },

  {
    id: "4",
    name: "TV",
    action: "Turn on",
    date: "124689",
  },
  {
    id: "5",
    name: "Washer",
    action: "Slep",
    date: "14533",
  },
  {
    id: "6",
    name: "Selling Fan",
    action: "Turn off",
    date: "14518",
  },

  {
    id: "7",
    name: "TV",
    action: "Turn on",
    date: "124689",
  },
  {
    id: "8",
    name: "Washer",
    action: "Slep",
    date: "14533",
  },
  {
    id: "9",
    name: "Selling Fan",
    action: "Turn off",
    date: "14518",
  },

  {
    id: "10",
    name: "TV",
    action: "Turn on",
    date: "124689",
  },
  {
    id: "11",
    name: "Washer",
    action: "Slep",
    date: "14533",
  },
  {
    id: "12",
    name: "Selling Fan",
    action: "Turn off",
    date: "14518",
  },

  {
    id: "13",
    name: "TV",
    action: "Turn on",
    date: "124689",
  },
  {
    id: "14",
    name: "Washer",
    action: "Slep",
    date: "14533",
  },
  {
    id: "15",
    name: "Selling Fan",
    action: "Turn off",
    date: "14518",
  },

  {
    id: "16",
    name: "TV",
    action: "Turn on",
    date: "124689",
  },
  {
    id: "17",
    name: "Washer",
    action: "Slep",
    date: "14533",
  },
  {
    id: "18",
    name: "Selling Fan",
    action: "Turn off",
    date: "14518",
  },
];
let perPage = 6;
let currentPage = 1;
let start = 0;
let end = perPage;
const btnNext = document.querySelector(".btn-next");

function renderData() {
  html = "";
  const content = data.map((item, index) => {
    if (index >= start && index < end) {
      html += '<tbody id="body-table">';
      html += "<tr>";
      html += "<td>" + data.id + "</td>";
      html += "<td>" + data.name + "</td>";
      html += "<td>" + data.action + "</td>";
      html += "<td>" + data.date + "</td>";
      html += "</tr>";
      html += "</tbody>";
      return html;
    }
  });
  document.getElementById("body-table").innerHTML = html;
}
btnNext.addEventListener("click", () => {
  currentPage++;
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
});

renderData();
