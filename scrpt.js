const form = document.getElementById('meetingForm');
const requestList = document.getElementById('requestList');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const agenda = document.getElementById('agenda').value;
    const datetime = document.getElementById('datetime').value;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${title}</strong><br>Agenda: ${agenda}<br>Time: ${datetime}`;
    
    requestList.appendChild(listItem);

    form.reset();
});
