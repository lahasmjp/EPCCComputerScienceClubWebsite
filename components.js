class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <img id="clublogo" src="/images/epcccslogo.svg">
        <nav id="headernav">
            <li><a class="navlink" href="/index.html">Home</a></li>
            <!--<li><a class="navlink" href="/epoints.html">E-Points</a></li>-->
            <li><a class="navlink" href="/officer.html">Officers / Contacts</a></li>
        </nav>
        </header>
        `;
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