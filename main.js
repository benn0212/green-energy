// Load your images on page-load
function preloader() {

    const imagesList = [
           "./img/money.jpg",
           "./img/solar.jpg",
           "./img/tech.jpg",
        ];

    const images = []; //images = all of this...

    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);


/* Get all buttons in a NODE LIST of buttons (array like structure) */
// variables declared

//let btns, contents, container;

// resources
const btns = document.querySelectorAll(".buttons button");
const container = document.querySelector(".js-content");
const contents = {
    money: {
        headingContent: "Affordability",
        bodyText: "Renewable energy technologies are getting cheaper, through technological change and through the benefits of mass production and market competition.",
        imgUrl: "./img/money.jpg",
        imgAlt: "money"
    },
    tech: {
        headingContent: "Technology",
        bodyText: "Alternate renewable energy technologies are being explored for development (e.g. cellulosic ethanol, hot-dry-rock geothermal power, and marine energy). These technologies are not widely known and need time to attract attention, research, development, applicability testing and investment.",
        imgUrl: "./img/tech.jpg",
        imgAlt: "green-tech"
    },
    solar: {
        headingContent: "Capacity",
        bodyText: "Renewable energies are growing at a rapid pace both in availability and variations of sources.",
        imgUrl: "./img/solar.jpg",
        imgAlt: "solar-panels"
    }
};

function myFunction() {
    container.innerHTML =
        `<h1>${contents.money.headingContent}</h1>
        <div class="col-sm-6">
            <img src="${contents.money.imgUrl}" alt="${contents.money.imgAlt}">
        </div>
        <div class="col-sm-6">
            <p>${contents.money.bodyText}</p>
        </div>`;
}
myFunction();

/* 
   Start your handleSelection function here. */


function handleSelection(e) {
    
    
    /* Remove the id active-button from the element that contains it prior to the click-event.This will require the loop throught the NODE LIST of buttons. Inside the loop, use conditional and the element object method hasAttribute() to check if the current button in the loop containes the id.If it does, use element-object property removeAttribute()to remove the id.*/
    let eventTargetObject = e.target;
    
    console.log(eventTargetObject);
    
    for (let btn of btns) {
        if (btn.hasAttribute("id")) {
            btn.removeAttribute("id");

            /*Use the element-object method setAttribute() to set the id active-button to the currently clicked button. */
        } 
    }
    
    
    eventTargetObject.setAttribute("id", "active-btn");

    /* Use conditional and event-object to check which button is clicked and based on that, create HTML with the data inside the backticks:
            `<h1>${headingContent}</h1>
             <img src="${imgUrl}" alt="${imgAlt}">
             <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will be dynamically loaded (you already got the reference to 
    this container before you started the function handleSelection) */


    /* Use conditional and event-object to check which button is clicked
            and based on that, create HTML with the data inside the backticks:
            `<h1>${headingContent}</h1>
             <img src="${imgUrl}" alt="${imgAlt}">
             <p>${bodyText}</p>`
            Assign this content to to your HTML-container that will 
            be dynamically loaded (you already got the reference to 
            this container before you started the function handleSelection) */

    if (eventTargetObject.getAttribute("data-btn") == "1") {
        container.innerHTML = `<h1>${contents.money.headingContent}</h1>
                                <figure>
                                    <img src="${contents.money.imgUrl}" alt="${contents.money.imgAlt}">
                                </figure>
                                <p>${contents.money.bodyText}</p>`;
    } else if (eventTargetObject.getAttribute("data-btn") == "2") {
        container.innerHTML = `<h1>${contents.tech.headingContent}</h1>
                                    <figure>
                                        <img src="${contents.tech.imgUrl}" alt="${contents.money.imgAlt}">
                                    </figure>
                                    
                                        <p>${contents.tech.bodyText}</p>`;
    } else {
        container.innerHTML = `<h1>${contents.solar.headingContent}</h1>
                                    <figure>
                                        <img src="${contents.solar.imgUrl}" alt="${contents.money.imgAlt}">
                                    </figure>
                                        <p>${contents.solar.bodyText}</p>`;
    }
} /* Close your handleSelection function here. */


/* Register all buttons to click event The event-handler handleSelection will listen for this event to happen. */

for (let btn of btns) {

    btn.addEventListener("click", handleSelection);
}
