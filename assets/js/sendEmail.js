function sendMail(contactForm) {
  emailjs
    .send("gmail", "bottle_and_baby", {
      from_name: contactForm.contactName.value,
      from_email: contactForm.contactEmail.value,
      message: contactForm.message.value,
    })
    .then(alert("Thank you! Your message has been sent. We will get back to you as soon as we can."));

  $("#contact-form").text();
}