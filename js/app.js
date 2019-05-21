import { readTextFile } from "./utils.js"
import { Elements } from "./elements.js"

async function app() {
    const json = await readTextFile("resume.json");
    const resume = JSON.parse(json);

    console.log(resume);
    // const div = document.getElementById("resume");
    const main = document.getElementById("main");

    const sidebar = document.getElementById("sidebar");
    Elements.titleElement(main, "h1", "name", resume.name);
    Elements.titleElement(main, "h2", "title", resume.title);
    Elements.titleElement(sidebar, "h4", "contact", "Contact:");
    Elements.titleElement(sidebar, "h5", "phone", resume.contact.phone);
    Elements.titleElement(sidebar, "h5", "email", resume.contact.email);
    Elements.listElement(sidebar, "ul", resume.programming.languages, "name", "Programming Languages:");
    Elements.listElement(sidebar, "ul", resume.languages, "language", "Language Skills:");
    Elements.listElement(sidebar, "ul", resume.interests, "name", "Interests");

    const workKeys = [
        {"type": "p", "id": "position"},
        {"type": "p", "id": "period"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(main, resume.work, workKeys, "main", "Work Experience:");

    const workshopKeys = [
        {"type": "p", "id": "date"},
        {"type": "p", "id": "location"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(main, resume.workshops, workshopKeys, "main", "Workshops and Seminars:");

    const volunteeringKeys = [
        {"type": "p", "id": "date"},
        {"type": "p", "id": "location"},
        {"type": "p", "id": "position"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(main, resume.volunteering, volunteeringKeys, "main", "Volunteering:");

    const educationKeys = [
        {"type": "p", "id": "period"},
        {"type": "p", "id": "location"},
        {"type": "p", "id": "title"},
        {"type": "p", "id": "thesis"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(main, resume.education, educationKeys, "main", "Education:");

    Elements.listElement(sidebar, "ul", resume.social, "link", "Social:");
}

app();