const logout = async () => {
    console.log('hello')
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

document.getElementById('logoutBtn').addEventListener('click', logout);

const goHome = () => {
  document.location.replace('/')
}

document.getElementById('homeBtn').addEventListener('click', goHome)

