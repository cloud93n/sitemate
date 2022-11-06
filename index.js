async function openModal(message) {
  this.myModal = new Modal(message);
  const outputBox = document.querySelector("output");

  try {
    const modalResponse = await myModal.question();
    outputBox.value = `You just clicked ${modalResponse}`;
  } catch (err) {
    console.log(err);
  }
}
