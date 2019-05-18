import { readTextFile } from "./utils.js"
import { Elements } from "./elements.js"

async function app() {
    const json = await readTextFile("resume.json");
    const resume = JSON.parse(json);

    console.log(resume);
    const div = document.getElementById("resume");
    Elements.titleElement(div, "h2", resume.name);
    Elements.titleElement(div, "h3", resume.title);
    Elements.titleElement(div, "h4", "Language Skills:");
    Elements.listElement(div, "ul", resume.languages, "language");
    Elements.titleElement(div, "h4", "Interests:");
    Elements.listElement(div, "ul", resume.interests, "name");
    Elements.titleElement(div, "h4", "Programming Languages:");
    Elements.listElement(div, "ul", resume.programming.languages, "name");

    Elements.titleElement(div, "h2", "Work Experience:");
    const workKeys = [
        {"type": "h3", "id": "position"},
        {"type": "h4", "id": "period"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(div, resume.work, workKeys);

    Elements.titleElement(div, "h2", "Workshops and Seminars:");
    const workshopKeys = [
        {"type": "h3", "id": "date"},
        {"type": "h4", "id": "location"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(div, resume.workshops, workshopKeys);

    Elements.titleElement(div, "h2", "Volunteering:");
    const volunteeringKeys = [
        {"type": "h3", "id": "date"},
        {"type": "h4", "id": "location"},
        {"type": "h4", "id": "position"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(div, resume.volunteering, volunteeringKeys);

    Elements.titleElement(div, "h2", "Education:");
    const educationKeys = [
        {"type": "h3", "id": "period"},
        {"type": "h4", "id": "location"},
        {"type": "h4", "id": "title"},
        {"type": "h4", "id": "thesis"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(div, resume.education, educationKeys);

    Elements.titleElement(div, "h4", "Social:");
    Elements.listElement(div, "ul", resume.social, "name");
}

app();