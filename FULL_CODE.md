oooooooooooooooo# COMPLETE CODE - My Private Photo Platform

## index.html (Login)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Media Platform - Login</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="logo">
                <i class="fas fa-camera-retro"></i>
                <h1>MyMedia</h1>
            </div>
            <form id="loginForm">
                <div class="input-group">
                    <i class="fas fa-user"></i>
                    <input type="text" id="username" placeholder="Username" required>
                </div>
                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" id="password" placeholder="Password" required>
                </div>
                <button type="submit">Login</button>
            </form>
            <p class="default-user">Default: admin / admin123</p>
            <button id="adminPanelBtn" class="admin-btn">Admin Panel</button>
            <p class="error" id="errorMsg"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## dashboard.html (Feed/Rooms)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - MyMedia</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="dashboard">
        <header class="header">
            <h2 id="roomName"><i class="fas fa-images"></i> Public Feed</h2>
            <div>
                <span><i class="fas fa-ghost"></i> Anonymous</span>
                <button id="logoutBtn" class="admin-btn"><i class="fas fa-sign-out-alt"></i> Logout</button>
            </div>
        </header>

        <div class="room-actions">
            <form id="createRoomForm" class="room-form">
                <input type="text" id="roomNameInput" placeholder="Room name">
                <input type="password" id="roomPwInput" placeholder="Room password">
                <button type="submit">Create Room</button>
            </form>
            <button id="joinRoomBtn" class="admin-btn">Join Room</button>
        </div>

        <form id="postForm" class="post-form">
            <textarea name="caption" placeholder="What's on your mind? Add a caption..." required></textarea>
            <input type="file" id="images" name="images" multiple accept="image/*" required>
            <div id="preview" class="preview-grid"></div>
            <button type="submit"><i class="fas fa-upload"></i> Post Photos</button>
        </form>

        <div class="feed" id="feed"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## admin.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - MyMedia</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="dashboard admin-panel">
        <header class="header">
            <h2><i class="fas fa-user-shield"></i> Admin Panel</h2>
            <button id="logoutBtn" class="admin-btn"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </header>

        <form id="addUserForm" class="post-form">
            <h3>Add New User</h3>
            <div class="input-group">
                <input type="text" id="newUsername" placeholder="Username" required>
            </div>
            <div class="input-group">
                <input type="password" id="newPassword" placeholder="Password" required>
            </div>
            <label><input type="checkbox" id="isAdmin"> Admin privileges</label>
            <button type="submit">Add User</button>
        </form>

        <div id="userList" class="user-list">
            <h3>Users</h3>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## script.js (Logic)
```
[Full JavaScript code with rooms, anon posts, etc - 300+ lines]
```
**Note:** Too long for here, check file or VSCode.

## style.css (CSS)
```
[Full 350+ lines CSS - dark red theme, responsive]

Files at `c:/Users/Dell/my_media_platform/`. Open index.html to run.
