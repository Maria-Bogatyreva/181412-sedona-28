var FormButton = document.querySelector(".search-title");
var SearchForm = document.querySelector(".search-form");
var ArrivalDate = document.querySelector(".arrival-date");
var DepartureDate = document.querySelector(".departure-date");
var AdultPerson = document.querySelector(".adult-person");
var ChildrenPerson = document.querySelector(".children-person");

FormButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	SearchForm.classList.toggle("form-show");
	ArrivalDate.focus();
});

SearchForm.addEventListener("submit", function (evt) {
	if (!ArrivalDate.value || !DepartureDate.value || !AdultPerson.value || !ChildrenPerson.value) {
		evt.preventDefault();
		SearchForm.classList.remove("form-error");	
		SearchForm.offsetWidth = SearchForm.offsetWidth;
		SearchForm.classList.add("form-error");	
		
	}	
});