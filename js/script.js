var FormButton = document.querySelector(".search-title");
var SearchForm = document.querySelector(".search-form");
var ArrivalDate = document.querySelector(".arrival-date");
var DepartureDate = document.querySelector(".departure-date");
var AdultPerson = document.querySelector(".adult-person");
var ChildrenPerson = document.querySelector(".children-person");

var isStorageSupport = true;
var AdultStorage = "";
var ChildStorage = "";

try {
  AdultStorage = localStorage.getItem("adult");
  ChildStorage = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
}

FormButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	SearchForm.classList.toggle("form-show");

	if (AdultStorage) {
    AdultPerson.value = AdultStorage;
 	} 
 	if (ChildStorage) {
 	ChildrenPerson.value = ChildStorage;	
 	}

	ArrivalDate.focus();
});

SearchForm.addEventListener("submit", function (evt) {
	if (!ArrivalDate.value || !DepartureDate.value || !AdultPerson.value || !ChildrenPerson.value) {
		evt.preventDefault();
		SearchForm.classList.remove("form-error");	
		SearchForm.offsetWidth = SearchForm.offsetWidth;
		SearchForm.classList.add("form-error");	
	} else {
		if (isStorageSupport) {
		localStorage.setItem("adult", AdultPerson.value);
		localStorage.setItem("child", ChildrenPerson.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (SearchForm.classList.contains("form-show")) {
			evt.preventDefault();
			SearchForm.classList.remove("form-show");
		}
	}
});