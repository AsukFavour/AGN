// Function to toggle between viewing profile and editing profile
function toggleEditProfile() {
    const profileView = document.getElementById('profileViewSection');
    const editForm = document.getElementById('editProfileForm');

    // Show/Hide the profile details and edit form
    profileView.classList.toggle('hidden');
    editForm.classList.toggle('hidden');
  }

  // Pre-fill form data with current profile details
  function populateForm() {
    document.getElementById("editName").value = document.getElementById("displayName").textContent;
    document.getElementById("editEmail").value = document.getElementById("displayEmail").textContent;
    document.getElementById("editPhone").value = document.getElementById("displayPhone").textContent;
    document.getElementById("editAddress").value = document.getElementById("displayAddress").textContent;
  }

  // Handle form submission
  function handleEditSubmit() {
    // Get values from the form
    const name = document.getElementById("editName").value;
    const email = document.getElementById("editEmail").value;
    const phone = document.getElementById("editPhone").value;
    const address = document.getElementById("editAddress").value;
    const profileImage = document.getElementById("editProfileImage").files[0];

    // Update the profile view section with the new data
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayAddress").textContent = address;

    // Update profile image if a new one is uploaded
    if (profileImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("displayImage").src = e.target.result;
      };
      reader.readAsDataURL(profileImage);
    }

    // Hide the edit form and show profile view
    toggleEditProfile();

    // Prevent actual form submission (since it's handled in JavaScript)
    return false;
  }
