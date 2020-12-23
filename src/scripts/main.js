// Класс для активации
const activeClass = "active";
const focusClass = "_focus";
const hideClass = "_hide";

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

// chat-message Скрыл в низ в окне чата
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

// switch переключения
const allSwitch = document.querySelectorAll(".switch");

if (allSwitch) {
	for (const switchItem of allSwitch) {
		const switchInput = switchItem.querySelector('input[type="checkbox"]');

		if (switchInput.checked) {
			switchItem.classList.add(activeClass);
		} else {
			switchItem.classList.remove(activeClass);
		}

		switchInput.addEventListener("change", () => {
			switchItem.classList.toggle(activeClass);
		});
	}
}

// tabs
const allTabControl = document.querySelectorAll("[data-tab-control]");

if (allTabControl) {
	for (const controlWrap of allTabControl) {
		const tabConteiner = document.querySelectorAll(`[data-tab-conteiner="${controlWrap.dataset.tabControl}"] > [data-tab-conteiner-item]`);
		const tabControl = document.querySelectorAll(`[data-tab-control="${controlWrap.dataset.tabControl}"] [data-tab-control-item]`);

		function controlClass(itme = tabControl[0]) {
			for (const control of tabControl) {
				control.classList.remove(activeClass);
			}
			itme.classList.add(activeClass);
		}

		function conteinerClass(itme = tabConteiner[0]) {
			for (const control of tabConteiner) {
				control.classList.add(hideClass);
			}
			itme.classList.remove(hideClass);
		}

		controlClass();
		conteinerClass();

		for (const contol of tabControl) {
			contol.addEventListener("click", () => {
				conteinerClass(document.querySelector(`[data-tab-conteiner="${controlWrap.dataset.tabControl}"] > [data-tab-conteiner-item="${contol.dataset.tabControlItem}"]`));
				controlClass(document.querySelector(`[data-tab-control="${controlWrap.dataset.tabControl}"] [data-tab-control-item="${contol.dataset.tabControlItem}"]`));
			});
		}
	}
}

// input
const inputWrapAll = document.querySelectorAll(".input");

if (inputWrapAll) {
	for (const inputWrap of inputWrapAll) {
		const input = inputWrap.querySelector("input, textarea");

		function inputF() {
			if (input.value == "") {
				inputWrap.classList.remove(activeClass);
			} else if (input.value != "") {
				inputWrap.classList.add(activeClass);
			}
		}

		inputF();

		input.addEventListener("change", () => {
			inputF();
		});
	}
}

// input file
function uploadFile(target) {
	target.parentElement.querySelector(".input__file").innerHTML = target.files[0].name;
}

// popups
const popupsControlAll = document.querySelectorAll("[data-popups-control]");

if (popupsControlAll) {
	for (const popupsControl of popupsControlAll) {
		const popupsContainer = document.querySelector(`[data-popups-container="${popupsControl.dataset.popupsControl}"]`);
		const popupsCloseAll = popupsContainer.querySelectorAll("[data-popups-close]");

		popupsControl.addEventListener("click", () => {
			popupsContainer.classList.add(activeClass);
		});

		for (const popupsClose of popupsCloseAll) {
			popupsClose.addEventListener("click", () => {
				popupsContainer.classList.remove(activeClass);
			});
		}
	}
}

// burger
const burgerButtonAll = document.querySelectorAll(".burger");

if (burgerButtonAll) {
	for (const burgerButton of burgerButtonAll) {
		burgerButton.querySelector(".burger__button").addEventListener("click", (event) => {
			burgerButton.classList.toggle(activeClass);
		});
	}
}

// name-control
const nameControl = document.querySelectorAll("[data-name-set]");
if (nameControl) {
	for (const nameSet of nameControl) {
		const maneControlList = document.querySelectorAll(`[data-name-control="${nameSet.dataset.nameSet}"]`);

		function remuveNameControl(maneControl) {
			const nameGet = maneControl.querySelector("[data-name-get]").textContent;
			nameSet.innerHTML = nameGet;
		}

		remuveNameControl(document.querySelector(`[data-name-control="${nameSet.dataset.nameSet}"]`));

		for (const maneControl of maneControlList) {
			maneControl.addEventListener("click", () => {
				remuveNameControl(maneControl);
				nameSet.click();
			});
		}
	}
}
