export class Elements {

    static titleElement(parent, type, title) {
        const element = document.createElement(type);
        element.append(title);
        parent.appendChild(element);
    }

    static async listElement(parent, type, list, key) {
        const element = document.createElement(type);
        list.forEach(item => {
            const listItem = document.createElement("li");
            listItem.append(item[key]);
            element.appendChild(listItem);
        });

        parent.appendChild(element);
    }

    static async contentElement(parent, contents, keys) {
        const element = document.createElement("div");
        contents.forEach(item => {
            keys.forEach(key => {
                const innerElement = document.createElement(key.type);
                innerElement.append(item[key.id]);
                element.appendChild(innerElement);
            });
        });

        parent.appendChild(element);
    }
}