document.addEventListener("DOMContentLoaded", displayContacts);

function getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || [];
}

function saveContacts(contacts) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (!name || !phone || !email) {
        alert("Please fill all fields!");
        return;
    }

    let contacts = getContacts();

    let newContact = {
        id: Date.now(),
        name,
        phone,
        email
    };

    contacts.push(newContact);
    saveContacts(contacts);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    displayContacts();
}

function displayContacts(filteredContacts = null) {
    let contacts = filteredContacts || getContacts();
    let contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    contacts.forEach(contact => {
        let div = document.createElement("div");
        div.className = "contact";

        div.innerHTML = `
            <h3>${contact.name}</h3>
            <p>📱 ${contact.phone}</p>
            <p>📧 ${contact.email}</p>
            <button onclick="deleteContact(${contact.id})">Delete</button>
        `;

        contactList.appendChild(div);
    });
}

function deleteContact(id) {
    let contacts = getContacts();
    contacts = contacts.filter(contact => contact.id !== id);
    saveContacts(contacts);
    displayContacts();
}

function searchContact() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let contacts = getContacts();

    let filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue)
    );

    displayContacts(filtered);
}