export class Elements {

    static titleElement(parent, type, id, title) {
        const element = document.createElement(type);
        element.append(title);
        element.id = id;
        parent.appendChild(element);
    }

    static async listElement(parent, type, list, key, title) {
        const element = document.createElement(type);
        const titleElement = document.createElement("h3");
        titleElement.append(title);
        element.appendChild(titleElement);

        list.forEach(item => {
            const listItem = document.createElement("li");
            listItem.append(item[key]);
            element.appendChild(listItem);
        });

        parent.appendChild(element);
    }

    static async contentElement(parent, contents, keys, className, title) {
        const element = document.createElement("div");
        const titleElement = document.createElement("h3");
        titleElement.append(title);
        element.appendChild(titleElement);

        contents.forEach(item => {
            keys.forEach(key => {
                const innerElement = document.createElement(key.type);
                innerElement.append(item[key.id]);
                element.appendChild(innerElement);
            });
        });
        element.className = className;

        parent.appendChild(element);
    }
}