const title = (title) => {
    return `
        <h1>
            ${title}
        </h1>
    `
}

const inputEl = (type, name, placeholder) => {
    return `
        <div class="${name}">
            <input type="${type}" name="${name}" placeholder="${placeholder}">
        </div>
    `
};
const textAreas = (type, name, placeholder) => {
    return `
        <div class="${name}">
            <input type="${type}" name="${name}" placeholder="${placeholder}">
        </div>
    `
};

const textAreaCb = (type, name, label, span) => {
    return `
        <div class="${name}">
            <input type="${type}">
            <label for="${name}">${label}<a href="#">${span}</a></label>
        </div>
    `
};

const rpgForm = `
    <form>
        ${title("Visszajelzés")}
        ${inputEl("text", "name", "Tárgy")}
        ${textAreas("text", "comment", "Megjegyzés")}
        ${textAreaCb("checkbox", "terms", "Elolvastam és elfogadom az ", "Adatkezelési Tájékoztatót.")}
        <button>Mentés</button>
    </form>
    `;

function loadEvent() {
{/* <h1>Visszajelzés</h1>
    <input type="text" placeholder="Tárgy">
    <textarea name="" id="" cols="30" rows="10" placeholder="Megjegyzés"></textarea>
    <textarea type="checkbox" name="" id="" cols="30" rows="10"></textarea>
    <button>MENTÉS</button> */}

    const root = document.querySelector('#root');
    root.insertAdjacentHTML("beforeend", rpgForm);
};



window.addEventListener("load", loadEvent);