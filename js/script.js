// Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  }
  
  // Toggle Dropdown for Profile
  function toggleDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.classList.toggle('hidden');
  }
  
  // Logic to display logout if user is logged in (you'll replace this with actual auth logic)
  const isLoggedIn = false; // Change this based on login status
  const logout = document.getElementById('logout');
  
  if (isLoggedIn) {
    logout.classList.remove('hidden');
  }

  
  