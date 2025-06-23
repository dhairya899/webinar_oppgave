
renderPage();
// Her kjører vi hovedoppsettet til nettsiden. I hver av HTML-taggene er det funksjoner som
// gir (returnerer) HTML-kode. 
function renderPage(){
 const app = document.getElementById('app');
    app.innerHTML = /*HTML*/`
    <header>
        ${createHeader()}
    </header>

    <main>
        ${createMain()}
    </main>

    <footer>
        ${createFooter()}
    </footer>
 `;
}

// Her genereres det som er på toppen av siden, også kjent som "header".
function createHeader(){
    return /*HTML*/`
        <section>
            <p>Velkommen!</p>
        </section>
    `;
}

// Her genereres hovedinnholdet på siden. 
function createMain(){
    return /*HTML*/`
        <section>
            <h1>Mitt navn er [ditt navn her]</h1>
            <h2>og velkommen til min nettside.</h2>

            <div class="profile-img">
                <img src="default_profile_img.jpg" alt="profilbildet">
            </div>

            <p>Her er litt info om meg!</p>
        </section>
    `;
}

// Her genereres det som er i bunn av siden, også kjent som en "footer".
function createFooter(){
    return /*HTML*/`
        <section>
            <p>Kontakt meg på: epost@eksempel.no</p>
        </section>
    `;
}

