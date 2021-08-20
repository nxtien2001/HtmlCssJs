function addRow() {
  var name = document.getElementById("name").value;
  var ip = document.getElementById("ip").value;

  if (name == "") {
    alert("Bạn chưa nhập tên");
  } else if (ip == "") {
    alert("Bạn chưa nhập IP");
  } else {
    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = "00:1B:44:11:3A:B7";
    cell3.innerHTML = ip;
    cell4.innerHTML = "2021-31-5";
    cell5.innerHTML = "50";
  }

  return false;
}
function chart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["TV", "Washer", "Refrigerator", "Selling Fan"],
      datasets: [
        {
          label: "My First Dataset",
          data: [30, 40, 50, 70],
          backgroundColor: ["#FF5F81", "#FF9F40", "#FFCD56", "#4BC0C0"],
          hoverOffset: 4,
        },
      ],
    },
  });
}
function obj() {
  var data = [
    {
      devices: "TV",
      mac: "00:1B:44:11:3A:B7",
      ip: "127.0.2",
      date: "2021-31-5",
      power: 50,
    },
    {
      devices: "Washer",
      mac: "00:1B:44:11:3A:B7",
      ip: "127.0.2",
      date: "2021-31-5",
      power: 60,
    },
    {
      devices: "Refrigerator",
      mac: "00:1B:44:11:3A:B7",
      ip: "127.0.2",
      date: "2021-31-5",
      power: 80,
    },
    {
      devices: "Selling Fan",
      mac: "00:1B:44:11:3A:B7",
      ip: "127.0.2",
      date: "2021-31-5",
      power: 100,
    },
  ];
  for (let i = 0; i < data.length; i++) {
    var trElement = document.createElement("tr");

    var tdElement1 = document.createElement("td");
    tdElement1.innerHTML = data[i].devices;
    var tdElement2 = document.createElement("td");
    tdElement2.innerHTML = data[i].mac;
    var tdElement3 = document.createElement("td");
    tdElement3.innerHTML = data[i].ip;
    var tdElement4 = document.createElement("td");
    tdElement4.innerHTML = data[i].date;
    var tdElement5 = document.createElement("td");
    tdElement5.innerHTML = data[i].power;

    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);
    trElement.appendChild(tdElement5);

    var tbody = document.getElementById("body-table");
    tbody.appendChild(trElement);
  }
}
