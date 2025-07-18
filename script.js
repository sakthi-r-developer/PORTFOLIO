function submitForm() {
  const name = document.getElementById("name").value;
  alert(`Thanks ${name}, your message has been sent! 🚀`);
  return false; // prevent actual form submission
}