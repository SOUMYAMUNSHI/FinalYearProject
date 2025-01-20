let port = window.location.port;
let host = window.location.hostname;

$("#student_login").click(function () {
  window.location.href = `http://${host}:${port}/student/student_home.html`;
});

$("#teacher_login").click(function () {
  window.location.href = `http://${host}:${port}/teacher/teacher_home.html`;
});
