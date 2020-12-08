// Класс для активации
const activeClass = "active";
const focusClass = "_focus";

// menu-primary аккардион меню
const menuDropControl = document.querySelectorAll("[data-drop-control]");

if (menuDropControl) {
	for (const control of menuDropControl) {
		const container = document.querySelector(`[data-drop-container="${control.dataset.dropControl}"]`);

		if (container.dataset.dropActive === "true") {
			container.style.height = container.scrollHeight + "px";
			container.classList.add(activeClass);
			control.classList.add(activeClass);
		} else if (container.dataset.dropActive === "false") {
			container.style.height = "0px";
			container.classList.remove(activeClass);
			control.classList.remove(activeClass);
		}

		control.addEventListener("click", () => {
			if (container.dataset.dropActive === "true") {
				container.style.height = "0px";
				container.dataset.dropActive = "false";
			} else if (container.dataset.dropActive === "false") {
				container.style.height = container.scrollHeight + "px";
				container.dataset.dropActive = "true";
			}
			container.classList.toggle(activeClass);
			control.classList.toggle(activeClass);
		});
	}
}

// chat-message
const chatMessageWrap = document.querySelectorAll(".chat-body");

for (const messageWrap of chatMessageWrap) {
	const message = messageWrap.querySelector(".chat-message");
	messageWrap.scrollTo(0, message.scrollHeight);
}

// chat-footer__input-text
const chatInput = document.querySelectorAll("[data-chat-message]");

for (const input of chatInput) {
	const inputParent = input.parentElement;

	input.addEventListener("input", () => {
		if (input.scrollHeight >= 50) {
			inputParent.style.display = "block";
		} else {
			inputParent.style.display = "flex";
		}
		input.style.height = "";
		input.style.height = input.scrollHeight + "px";
	});

	input.addEventListener("focus", () => {
		inputParent.parentElement.classList.add(focusClass);
	});

	input.addEventListener("blur", () => {
		inputParent.parentElement.classList.remove(focusClass);
	});
}
