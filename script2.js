$(document).ready(function(){
    function closeElement(){
        if($(window).width()<= 820){
            $('.add2').height('400PX');
            $('.me').hide();
            $('.nav-toggle').click(function(){
                $('.me').toggle();
            });
        }
        else{
            $('.me').show();
        }
    }
    closeElement()
    $(window).resize(function(){
        closeElement();
    });
})


// OPINION BOX
var date = new Date();
var year = date.getFullYear()
let me = document.getElementById('me').innerHTML =year;

// Frame reload

// form 
document.addEventListener('DOMContentLoaded', (event) => {
    loadComplaints();
});

function submitComplaint() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const complaint = document.getElementById('complaint').value;

    if (name && title && complaint) {
        const complaintData = { name, title, complaint, id: new Date().getTime() };
        saveComplaint(complaintData);
        addComplaintToDOM(complaintData);

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('title').value = '';
        document.getElementById('complaint').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function saveComplaint(complaint) {
    let complaints = localStorage.getItem('complaints');
    if (complaints) {
        complaints = JSON.parse(complaints);
    } else {
        complaints = [];
    }
    complaints.push(complaint);
    localStorage.setItem('complaints', JSON.stringify(complaints));
}

function loadComplaints() {
    let complaints = localStorage.getItem('complaints');
    if (complaints) {
        complaints = JSON.parse(complaints);
        complaints.forEach(complaint => {
            addComplaintToDOM(complaint);
        });
    }
}

function addComplaintToDOM(complaint) {
    const complaintBox = document.createElement('div');
    complaintBox.className = 'complaint-box';
    complaintBox.innerHTML = `
        <h4>NAME  : ${complaint.name}  <br><br>TITLE  : ${complaint.title}</h4>
        
        <p><b class="complain">${complaint.complaint}</b></p>
        <button class="delete-btn" onclick="deleteComplaint(${complaint.id})">Delete</button>
    `;
    document.getElementById('complaints-list').appendChild(complaintBox);
}

function deleteComplaint(id) {
    let complaints = localStorage.getItem('complaints');
    if (complaints) {
        complaints = JSON.parse(complaints);
        complaints = complaints.filter(complaint => complaint.id !== id);
        localStorage.setItem('complaints', JSON.stringify(complaints));
        document.getElementById('complaints-list').innerHTML = '';
        loadComplaints();
    }
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click menu
});


