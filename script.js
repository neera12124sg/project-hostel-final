// Open modal based on request type (room change, accessories, rules, etc.)
function openModal(type) {
    const modal = document.getElementById('modal');
    const form = document.getElementById('request-form');
    const roomOptions = document.getElementById('room-options');
    const accessoriesOptions = document.getElementById('accessories-options');
    const rulesModal = document.getElementById('rules-modal');
    const announcementModal = document.getElementById('announcement-modal');

    // Hide all modals first
    modal.style.display = 'none';
    rulesModal.style.display = 'none';
    announcementModal.style.display = 'none';

    // Reset form and hide specific options
    form.reset();
    roomOptions.style.display = 'none';
    accessoriesOptions.style.display = 'none';

    // Show specific options based on box clicked
    if (type === 'roomChange') {
        modal.style.display = 'flex';
        roomOptions.style.display = 'block';
    } else if (type === 'accessories') {
        modal.style.display = 'flex';
        accessoriesOptions.style.display = 'block';
    } else if (type === 'rules') {
        rulesModal.style.display = 'flex';
    } else if (type === 'announcements') {
        announcementModal.style.display = 'flex';
    } else {
        modal.style.display = 'flex';
    }
}

// Close modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Close the modal if clicked outside the form
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// Track My Request functionality
document.getElementById("trackRequestBtn").addEventListener("click", function() {
    const statusDiv = document.getElementById("request-status");
    statusDiv.style.display = statusDiv.style.display === "none" ? "block" : "none"; // Toggle the visibility of request status
});

// Admin Login functionality
document.getElementById("admin-login-btn").addEventListener("click", function() {
    const password = document.getElementById("admin-password").value;
    const correctPassword = "admin123"; // You can set your own password here
    
    if(password === correctPassword) {
        // Show the admin control section
        document.getElementById("admin-controls").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
});

// Update Request Status functionality
document.getElementById("update-status-btn").addEventListener("click", function() {
    const selectedRequest = document.getElementById("request-select").value;
    const selectedStatus = document.getElementById("status-select").value;

    // Update the status on the page (you could also implement saving this in a backend or local storage)
    let statusText = "Pending";
    let statusIcon = "&#x2718;"; // Cross (pending icon)
    if (selectedStatus === "completed") {
        statusText = "Completed";
        statusIcon = "&#x2714;"; // Checkmark (completed icon)
    }

    // Update the status of the request
    const requestElement = document.querySelector(`#request-status p:nth-child(${selectedRequest})`);
    if(requestElement) {
        requestElement.innerHTML = `Request ${selectedRequest}: ${statusText} <span class="status-icon ${selectedStatus}">${statusIcon}</span>`;
    }
});
