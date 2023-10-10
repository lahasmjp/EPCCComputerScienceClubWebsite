class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <img id="clublogo" src="/images/epcccslogo.svg">
        <nav id="headernav">
            <li><a class="navlink" href="/index.html">Home</a></li>
            <!--<li><a class="navlink" href="/epoints.html">E-Points</a></li>-->
            <li><a class="navlink" href="/cabinet.html">Cabinet / Contacts</a></li>
            <li><a class="navlink" href="/currentnewsletter.html">Newsletter</a></li>
        </nav>
        </header>
        `
    }
}
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>El Paso County Community College District does not discriminate on the basis of race, color, national
                origin, religion, gender, age, disability, veteran status, sexual orientation, or gender identity.</p>
                <section>
                    <img class="medIcon" src="/images/epcc.png">
                    <img class="medIcon" src="/images/acm.png">
                </section>
        </footer>
        `
    }
}
class socialMedia extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="smNav">
                <h4>Visit our Social Medias!</h4>
                <a href="https://www.instagram.com/epcc_computer_science_club/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank" title="Follow us for pictures and updates on events!"><img src="/images/socialicons/insta.png" class="smIcon"></a>
                <a href="https://discord.gg/jjzkRn6x3q" target="_blank" title="Join our community and connect with fellow majors!"><img src="/images/socialicons/discord.png"
                        class="smIcon"></a>
            </nav>
        `
    }
}
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('socialmedia-plugs', socialMedia);

//Ticker Date Checker
const date = new Date(); // Creates Date Object
let ticker = document.getElementById("ticker"); // Selects the yellow ticker
let currentDay = date.getDate(); // Defines current day as int
let currentMonth = date.getMonth() + 1; // Defines current month as int + 1 (uses zero-based-numbering)
console.log("Hiya, here's some debug info for you sneaky peakers");
console.log("Today's Date: " + currentDay);
console.log("Current Month: " + currentMonth);

// Checks for certain month, then checks for certain day, then appends the String to ticker's text
if (currentMonth == 10) {
    if (currentDay <= 6) {
        ticker.append("General Meeting on October 6th, 2:00PM @ Valle Verde AST 307");
    }
    else if (currentDay <= 20) {
        ticker.append("Professional Development Pt. I on October 20th, 2:00PM @ Valle Verde AST 307");
    }
}
else if (currentMonth == 11) {
    if (currentDay <= 4) {
        ticker.append("General Development on November 4th, 2:00PM @ Valle Verde AST 307")
    }
    if (currentDay <= 17) {
        ticker.append("Professional Development Pt. II on November 17th, 2:00PM @ Valle Verde AST 307");
    }
    else {
        ticker.append("TBA");
    }
}
