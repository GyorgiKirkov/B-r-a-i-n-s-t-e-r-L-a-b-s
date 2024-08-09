 // _________________START hamburger-menu_____________
 changeIcon = (icon) => icon.classList.toggle("x");
 // _________________END hamburger-menu_____________



 // _____________START for filter section namechange in js by id_______________
 let marketingfilter = document.querySelector("#filter-marketing");
 let codingfilter = document.querySelector("#filter-coding");
 let designfilter = document.querySelector("#filter-design");




 // _____________START for activeclass lisener by class_______________
 let codingActive = document.querySelector(".codingActive");
 let designActive = document.querySelector(".designActive");
 let marketingActive = document.querySelector(".marketingActive");
 let cards = document.querySelectorAll(".cards");





 // _____________START for function to show or hide carde_______________
 function hideCards() {
   for (let i = 0; i < cards.length; i++)
     cards[i].style.display = "none";
 }

 function showCards() {
   for (let i = 0; i < cards.length; i++)
     cards[i].style.display = "inline-block";
 }





 // _____________START for function to show or hide cards in MARKETING and add or remove active class_______________
 marketingfilter.addEventListener("change", MarketingCards);
 function MarketingCards() {
   codingfilter.checked = false; // line 43 to 46 if false (not checked) remove active class
   designfilter.checked = false;
   codingActive.classList.remove("active");
   designActive.classList.remove("active");
   if (marketingfilter.checked) {
     // line 49 to 54 if true (checked) add active class and show only cards with marketing class
     marketingActive.classList.add("active");
     hideCards();
     let marketingCards = document.querySelectorAll(".marketing");
     for (let i = 0; i < marketingCards.length; i++)
       marketingCards[i].style.display = "inline-block";
     loading.style.display = "none";
   } else {
     // line 57 to 58 if unchecked remove active class and show all cards with class cards not only marketing
     marketingActive.classList.remove("active");
     showCards();
   }
 }





 // _____________START for function to show or hide cards in CODING and add or remove active class_______________
 codingfilter.addEventListener("change", CodingCards);
 function CodingCards() {
   marketingfilter.checked = false;
   designfilter.checked = false;
   marketingActive.classList.remove("active");
   designActive.classList.remove("active");
   if (codingfilter.checked) {
     codingActive.classList.add("active");
     hideCards();
     let codingcards = document.querySelectorAll(".coding");
     for (let i = 0; i < codingcards.length; i++)
       codingcards[i].style.display = "inline-block";
     loading.style.display = "none";
   } else {
     codingActive.classList.remove("active");
     showCards();
   }
 }





 // _____________START for function to show or hide cards in DESIGN and add or remove active class_______________

 designfilter.addEventListener("change", DesignCards);
 function DesignCards() {
   marketingfilter.checked = false;
   codingfilter.checked = false;
   marketingActive.classList.remove("active");
   codingActive.classList.remove("active");
   if (designfilter.checked) {
     designActive.classList.add("active");
     hideCards();
     let designcards = document.querySelectorAll(".design");
     for (let i = 0; i < designcards.length; i++)
       designcards[i].style.display = "inline-block";
     loading.style.display = "none";
   } else {
     designActive.classList.remove("active");
     showCards();
   }
 }




 
 // ----------------morebtn-------------------

 let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 6;

loadMoreBtn.onclick = () => {
  let boxes = document.querySelectorAll(".container .cards");
  for (var i = currentItem; i < currentItem + 6; i++) {
    boxes[i]?.classList.add("d-inline-block");
  }
  currentItem += 6;

  const visiblecards =
    document.querySelectorAll(".container .cards.d-inline-block").length + 6;

  if (boxes.length <= visiblecards) {
    loadMoreBtn.classList.remove("d-block", "d-md-none");
    loadMoreBtn.classList.add("d-none");
  }
};



