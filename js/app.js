import { readTextFile } from "./utils.js"
import { Elements } from "./elements.js"

async function app() {
    const json = await readTextFile("resume.json");
    const resume = JSON.parse(json);

    console.log(resume);
    const main = document.getElementById("container");

    Elements.titleElement(container, "h1", "name", resume.name.toLowerCase());
    Elements.titleElement(container, "h1", "title", resume.title.toLowerCase());
    Elements.titleElement(container, "h3", "contact", "contact:");
    Elements.titleElement(container, "p", "phone", resume.contact.phone);
    Elements.titleElement(container, "p", "email", resume.contact.email);
    Elements.listElement(container, "ul", resume.social, "link", "Social:", true);

    const workKeys = [
        {"type": "h3", "id": "position"},
        {"type": "h5", "id": "period"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(container, resume.work, workKeys, "main", "work experience:");

    const volunteeringKeys = [
        {"type": "h3", "id": "date"},
        {"type": "h5", "id": "location"},
        {"type": "h5", "id": "position"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(container, resume.volunteering, volunteeringKeys, "main", "volunteering:");

    const workshopKeys = [
        {"type": "h3", "id": "date"},
        {"type": "h5", "id": "location"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(container, resume.workshops, workshopKeys, "main", "hackathons and workshops:");

    const educationKeys = [
        {"type": "h3", "id": "period"},
        {"type": "h3", "id": "location"},
        {"type": "h5", "id": "title"},
        {"type": "h5", "id": "thesis"},
    ];
    Elements.contentElement(container, resume.education, educationKeys, "main", "education:");

    Elements.listElement(container, "ul", resume.programming.languages, "name", "programming languages:");
    Elements.listElement(container, "ul", resume.languages, "language", "language skills:");
    Elements.listElement(container, "ul", resume.interests, "name", "interests");
}

app();