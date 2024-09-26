
// Open and close modal functions
function openMemberForm() {
  document.getElementById('member-modal').classList.remove('hidden');
}

function closeMemberForm() {
  document.getElementById('member-modal').classList.add('hidden');
}

function openExecutiveForm() {
  document.getElementById('executive-modal').classList.remove('hidden');
}

function closeExecutiveForm() {
  document.getElementById('executive-modal').classList.add('hidden');
}

// Function to add member to table
function addMember() {
  const name = document.getElementById('member-name').value;
  const email = document.getElementById('member-email').value;
  const phone = document.getElementById('member-phone').value;
  const address = document.getElementById('member-address').value;
  const movies = document.getElementById('member-movies').value;

  const table = document.getElementById('member-table');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="px-4 py-2 border-b">${name}</td>
    <td class="px-4 py-2 border-b">${email}</td>
    <td class="px-4 py-2 border-b">${phone}</td>
    <td class="px-4 py-2 border-b">${address}</td>
    <td class="px-4 py-2 border-b">${movies}</td>
    <td class="px-4 py-2 border-b">
      <button class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded" onclick="editMember(this)">Edit</button>
    </td>
  `;
  table.appendChild(row);
  closeMemberForm();
}

// Function to add executive to table
function addExecutive() {
  const image = document.getElementById('executive-image').value;
  const name = document.getElementById('executive-name').value;
  const role = document.getElementById('executive-role').value;

  const table = document.getElementById('executive-table');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="px-4 py-2 border-b"><img src="${image}" alt="${name}" class="w-10 h-10 rounded-full"></td>
    <td class="px-4 py-2 border-b">${name}</td>
    <td class="px-4 py-2 border-b">${role}</td>
    <td class="px-4 py-2 border-b">
      <button class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded" onclick="removeExecutive(this)">Delete</button>
    </td>
  `;
  table.appendChild(row);
  closeExecutiveForm();
}

// Dummy function for editing members
function editMember(button) {
  alert("Edit member details");
}

// Dummy function for removing executives
function removeExecutive(button) {
  const row = button.closest('tr');
  row.remove();
}

function handleLogout() {
    // Add your logout logic here, such as clearing session data
    alert('You have been logged out');
    // Optionally, redirect the user to the login page
    window.location.href = '/login.html';
  }

  // Toggle sidebar on mobile view
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
  });

  // Logout function
  function handleLogout() {
    alert('You have been logged out');
    window.location.href = '/admin.login.html';
  }