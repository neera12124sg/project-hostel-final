document.addEventListener('DOMContentLoaded', function() {
    // Mock Data for Requests
    const requests = [
        { id: 1, description: 'Cleanliness Request', status: 'completed' },
        { id: 2, description: 'Room Change Request', status: 'completed' },
        { id: 3, description: 'Leave Application', status: 'pending' }
    ];

    const requestList = document.getElementById('request-status-list');

    // Function to generate the list items
    requests.forEach(request => {
        const listItem = document.createElement('li');
        listItem.classList.add('request-item');
        
        let statusIcon = '';
        if (request.status === 'completed') {
            statusIcon = '✔️'; // Checkmark for completed
        } else if (request.status === 'pending') {
            statusIcon = '⏳'; // Pending icon
        }

        listItem.innerHTML = `${request.description}: <span class="status">${statusIcon}</span>`;
        requestList.appendChild(listItem);
    });
});
