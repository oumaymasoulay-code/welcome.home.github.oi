// Client App JS - Auth, API, Sockets, UI

let currentUser = null;
let currentToken = null;
let socket = null;

// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Section toggle
function showSection(section) {
  document.querySelectorAll('section[id$="-section"]').forEach(s => s.style.display = 'none');
  document.getElementById(`${section}-section`).style.display = 'block';
  document.getElementById('dashboard').style.display = 'none';
}

// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    const data = await res.json();
    if (res.ok) {
      currentToken = data.token;
      currentUser = {email, is_admin: data.is_admin};
      showDashboard();
    } else {
      document.getElementById('login-error').textContent = data.error;
    }
  } catch (err) {
    document.getElementById('login-error').textContent = 'Error connecting';
  }
});

// Register
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    const data = await res.json();
    if (res.ok) {
      currentToken = data.token;
      currentUser = {email};
      showDashboard();
    } else {
      document.getElementById('reg-error').textContent = data.error;
    }
  } catch (err) {
    document.getElementById('reg-error').textContent = 'Error connecting';
  }
});

// Admin quick login
async function loginAdmin() {
  const email = 'admin@example.com';
  const password = 'admin123';
  // Same login logic
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  });
  const data = await res.json();
  if (res.ok) {
    currentToken = data.token;
    currentUser = {email, is_admin: true};
    window.location.href = '/admin/dashboard.html';
  }
}

// Show dashboard
function showDashboard() {
  document.getElementById('user-email').textContent = currentUser.email;
  document.getElementById('dashboard').style.display = 'block';
  document.querySelectorAll('section[id$="-section"]').forEach(s => s.style.display = 'none');
  socket = io();
  loadRooms();
}

// Load user rooms (simplified: search/join later)
async function loadRooms() {
  // For demo, list all? But private - use search or member list later
  const roomsList = document.getElementById('rooms-list');
  roomsList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Create or join a room to start!</p>';
}

// Create room (open form)
function showCreateRoom() {
  const name = prompt('Room name:');
  const password = prompt('Room password:');
  if (name && password) {
    createRoom(name, password);
  }
}

// Create room API
async function createRoom(name, password) {
  const res = await fetch('/api/rooms/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${currentToken}`
    },
    body: JSON.stringify({name, password})
  });
  if (res.ok) {
    alert('Room created!');
    loadRooms();
  } else {
    alert('Error creating room');
  }
}

// Join room
async function joinRoom() {
  const name = document.getElementById('room-search').value;
  const password = prompt('Room password:');
  // Find room by name
  // For simplicity, assume ID = hash or API get by name needed - add route later
  const roomId = 1; // Temp
  const res = await fetch(`/api/rooms/${roomId}/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${currentToken}`
    },
    body: JSON.stringify({password})
  });
  if (res.ok) {
    window.location.href = `/client/room.html?room=${roomId}`;
  } else {
    alert('Invalid room or password');
  }
}

// Logout
function logout() {
  currentUser = null;
  currentToken = null;
  location.reload();
}