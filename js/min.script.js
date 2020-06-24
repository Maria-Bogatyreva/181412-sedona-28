var FormButton=document.querySelector(".search-title"),SearchForm=document.querySelector(".search-form"),ArrivalDate=document.querySelector(".arrival-date"),DepartureDate=document.querySelector(".departure-date"),AdultPerson=document.querySelector(".adult-person"),ChildrenPerson=document.querySelector(".children-person"),isStorageSupport=!0,AdultStorage="",ChildStorage="";try{AdultStorage=localStorage.getItem("adult"),ChildStorage=localStorage.getItem("child")}catch(e){isStorageSupport=!1}SearchForm.classList.add("form-invisible"),FormButton.addEventListener("click",function(e){e.preventDefault(),SearchForm.classList.toggle("form-invisible"),SearchForm.classList.toggle("form-show"),AdultStorage&&(AdultPerson.value=AdultStorage),ChildStorage&&(ChildrenPerson.value=ChildStorage),ArrivalDate.focus()}),SearchForm.addEventListener("submit",function(e){ArrivalDate.value&&DepartureDate.value&&AdultPerson.value&&ChildrenPerson.value?isStorageSupport&&(localStorage.setItem("adult",AdultPerson.value),localStorage.setItem("child",ChildrenPerson.value)):(e.preventDefault(),SearchForm.classList.remove("form-error"),SearchForm.offsetWidth,SearchForm.classList.add("form-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&SearchForm.classList.contains("form-show")&&(e.preventDefault(),SearchForm.classList.remove("form-show"))});