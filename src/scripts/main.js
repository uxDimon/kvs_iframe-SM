// Класс для активации
const activeClass = "active";

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
