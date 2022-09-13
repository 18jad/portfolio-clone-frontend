const tbody = document.querySelector('tbody');

const url = "/bootstrapform/backend/get-messages.php";

fetch(url)
    .then(response => response.json())
    .then(data => {
        let messages = data.messages;
        messages.forEach(message => {
            let email = message.email;
            let msg = message.message;
            // create a table row
            const tr = document.createElement('tr');
            // create table cell
            const tdEmail = document.createElement('td');
            // append email to cell
            tdEmail.textContent = email;
            // append cell to row
            tr.appendChild(tdEmail);

            const tdMessage = document.createElement('td');
            tdMessage.textContent = msg;
            tr.appendChild(tdMessage);
            // append row to table body
            tbody.appendChild(tr);
        })
    })