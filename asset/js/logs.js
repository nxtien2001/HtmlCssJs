function obj() {
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
  for (let i = 0; i < data.length; i++) {
    var trElement = document.createElement("tr");

    var tdElement1 = document.createElement("td");
    tdElement1.innerHTML = data[i].id;
    var tdElement2 = document.createElement("td");
    tdElement2.innerHTML = data[i].name;
    var tdElement3 = document.createElement("td");
    tdElement3.innerHTML = data[i].action;
    var tdElement4 = document.createElement("td");
    tdElement4.innerHTML = data[i].date;

    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement3);
    trElement.appendChild(tdElement4);

    var tbody = document.getElementById("body-table");
    tbody.appendChild(trElement);
  }
}
function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

