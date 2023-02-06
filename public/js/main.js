const logout = async () => {
    console.log('goodbye')
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out.');
    }
};

const goHome = () => {
  document.location.replace('/')
  console.log('go home')
}
  
  document.getElementById('logoutBtn').addEventListener('click', logout);
  document.getElementById('homeBtn').addEventListener('click', goHome);