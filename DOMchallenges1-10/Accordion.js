const header = document.querySelectorAll('.accordion-header');
const content = document.querySelectorAll('.accordion-content');

header.forEach(head => {
    head.addEventListener('click', function (event) {
         const accordionItem = event.target.closest('.accordion-item');
         const content = accordionItem.querySelector(".accordion-content");

         content.forEach(item => {
            if (item !== content){
                item.style.display = "none";
            }
         });
         content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

