let port = window.location.port;
let host = window.location.hostname;

document.getElementById("teacher_signup").addEventListener("click", () => {
  window.location.href = `http://${host}:${port}/components/teacher_registration.html`; //redirect to teacher sign up page
});

document.getElementById("student_signup").addEventListener("click", () => {
  window.location.href = `http://${host}:${port}/components/student_registration.html`; //redirect to student sign up page
});
