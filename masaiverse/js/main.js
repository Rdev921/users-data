function goToUserSection(){
    location.href="user.html"
}
function goToAdminSection(){
    location.href="admin/login.html"
}

document.getElementById('userBtn').addEventListener('click',goToUserSection);
document.getElementById('adminBtn').addEventListener('click',goToAdminSection);

