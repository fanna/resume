import { readTextFile } from "./utils.js"
import { Elements } from "./elements.js"

async function app() {
    const json = await readTextFile("resume.json");
    const resume = JSON.parse(json);

    console.log(resume);
    // const div = document.getElementById("resume");
    const main = document.getElementById("main");

    const sidebar = document.getElementById("sidebar");
    Elements.titleElement(main, "h2", "name", resume.name);
    Elements.titleElement(main, "h3", "title", resume.title);
    Elements.titleElement(sidebar, "h4", "contact", "Contact:");
    Elements.titleElement(sidebar, "h5", "phone", resume.contact.phone);
    Elements.titleElement(sidebar, "h5", "email", resume.contact.email);
    Elements.titleElement(sidebar, "h4", "programming", "Programming Languages:");
    Elements.listElement(sidebar, "ul", resume.programming.languages, "name");
    Elements.titleElement(sidebar, "h4", "languages", "Language Skills:");
    Elements.listElement(sidebar, "ul", resume.languages, "language");
    Elements.titleElement(sidebar, "h4", "interests", "Interests:");
    Elements.listElement(sidebar, "ul", resume.interests, "name");

    Elements.titleElement(main, "h3", "work", "Work Experience:");
    const workKeys = [
        {"type": "h3", "id": "position"},
        {"type": "h4", "id": "period"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(main, resume.work, workKeys, "work");

    Elements.titleElement(main, "h3", "workshops", "Workshops and Seminars:");
    const workshopKeys = [
        {"type": "h3", "id": "date"},
        {"type": "h4", "id": "location"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(main, resume.workshops, workshopKeys, "workshops");

    Elements.titleElement(main, "h3", "volunteering", "Volunteering:");
    const volunteeringKeys = [
        {"type": "h3", "id": "date"},
        {"type": "h4", "id": "location"},
        {"type": "h4", "id": "position"},
        {"type": "h5", "id": "description"}
    ];
    Elements.contentElement(main, resume.volunteering, volunteeringKeys, "volunteering");

    Elements.titleElement(main, "h3", "education", "Education:");
    const educationKeys = [
        {"type": "h4", "id": "period"},
        {"type": "h4", "id": "location"},
        {"type": "h5", "id": "title"},
        {"type": "h5", "id": "thesis"},
        {"type": "p", "id": "description"}
    ];
    Elements.contentElement(main, resume.education, educationKeys, "education");

    Elements.titleElement(sidebar, "h4", "social", "Social:");
    Elements.listElement(sidebar, "ul", resume.social, "link");
}

app();