console.log("Hello JS! :)");

const data = [
  { firstname: "John", lastname: "Doe", email: "john@example.se" },
  { firstname: "Mary", lastname: "Moe", email: "mary@example.se" },
  { firstname: "July", lastname: "Doe", email: "july@example.se" },
];

const showTable = () => {
  if (!document.getElementById("dynamicTable")) {
    const table = document.createElement("table"); // <table>
    table.id = "dynamicTable"; // <table id='dynamicTable' >
    table.classList.add("table", "table-striped"); // <table id='dynamicTable' class='table table-striped' >

    const thead = document.createElement("thead"); // <thead>
    const headerRow = document.createElement("tr"); // <tr>

    const headerTexts = ["Firstname", "Lastname", "Email"];
    headerTexts.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody"); // <tbody>

    data.forEach((person) => {
      const tr = document.createElement("tr"); // <tr>

      const td1 = document.createElement("td"); // <td>
      td1.textContent = person.firstname;
      tr.appendChild(td1);

      const td2 = document.createElement("td"); // <td>
      td2.textContent = person.lastname;
      tr.appendChild(td2);

      const td3 = document.createElement("td"); // <td>
      td3.textContent = person.email;
      tr.appendChild(td3);

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    const dataTableSection = document.getElementById("data-table");
    dataTableSection.appendChild(table);
  }
};

const hideTable = () => {
  console.log("hide functiuon has been executed!");
  const table = document.getElementById("dynamicTable");
  if (table) {
    table.remove();
  }
};

const validateAndSubmit = () => {
  const firstName = document.getElementById("firstName").value;
  const email = document.getElementById("email").value;

  if (!firstName) {
    document.getElementById("firstName").classList.add("is-invalid");
  } else {
    document.getElementById("firstName").classList.remove("is-invalid");
  }

  if (!isValidEmail(email)) {
    document.getElementById("email").classList.add("is-invalid");
  } else {
    document.getElementById("email").classList.remove("is-invalid");
  }
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
