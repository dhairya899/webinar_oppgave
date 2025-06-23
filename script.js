
renderPage();
function renderPage(){
 document.body.innerHTML = /*HTML*/`
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

function createHeader(){
    return /*HTML*/`
        <section>
            <p>Velkommen!</p>
        </section>
    `;
}

function createMain(){
    return /*HTML*/`
        <section>
            <h1>Mitt navn er ____</h1>
            <h2>og velkommen til min nettside.</h2>
            <div class="profile-img">
                <img src="default_profile_img.jpg" alt="profilbildet">
            </div>

            <p>Her er litt info om meg!</p>
        </section>
    `;
}

function createFooter(){
    return /*HTML*/`
        <section>
            
        </section>
    `;
}
