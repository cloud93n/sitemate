"use strict";

class Modal {
  constructor(message) {
    this.message = message;
    this.acceptText = "Yes";
    this.cancelText = "No";

    this.parent = document.body;

    this.modal = undefined;
    this.acceptButton = undefined;
    this.cancelButton = undefined;

    this._createModal();
  }

  question() {
    return new Promise((resolve) => {
      this.acceptButton.focus();

      this.acceptButton.addEventListener("click", () => {
        resolve('Yes');
        this._destroyModal();
      });

      this.cancelButton.addEventListener("click", () => {
        resolve('No');
        this._destroyModal();
      });
    });
  }

  _createModal() {
    this.modal = document.createElement("dialog");
    this.modal.classList.add("modal-dialog");
    this.modal.show();

    const window = document.createElement("div");
    window.classList.add("modal-window");
    this.modal.appendChild(window);

    const text = document.createElement("span");
    text.classList.add("modal-text");
    text.textContent = this.message;
    window.appendChild(text);

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("modal-button-group");
    window.appendChild(buttonGroup);

    this.acceptButton = document.createElement("button");
    this.acceptButton.type = "button";
    this.acceptButton.classList.add("modal-button");
    this.acceptButton.textContent = this.acceptText;
    buttonGroup.appendChild(this.acceptButton);

    this.cancelButton = document.createElement('button');
    this.cancelButton.type = "button";
    this.cancelButton.classList.add('modal-button');
    this.cancelButton.textContent = this.cancelText;
    buttonGroup.appendChild(this.cancelButton);

    this.parent.appendChild(this.modal);
  }

  _destroyModal() {
    this.parent.removeChild(this.modal);
    delete this;
  }
}
