export class Elements {

    static titleElement(parent, type, id, title) {
        const element = document.createElement(type);
        element.append(title);
        element.id = id;
        parent.appendChild(element);
    }

    static async listElement(parent, type, list, key, title, isLink = false) {
        const element = document.createElement(type);
        const titleElement = document.createElement("h3");
        titleElement.append(title);
        element.appendChild(titleElement);

        list.forEach(item => {
            const listItem = document.createElement("li");
            if (isLink) {
                const link = document.createElement("a");
                link.href = item[key];
                link.target = "_blank"
                link.append(item[key]);
                listItem.append(link);
            } else {
                listItem.append(item[key].toLowerCase());
            }
            element.appendChild(listItem);
        });

        parent.appendChild(element);
    }

    static async contentElement(parent, contents, keys, className, title) {
        const element = document.createElement("div");
        const titleElement = document.createElement("h2");
        titleElement.append(title);
        element.appendChild(titleElement);

        contents.forEach(item => {
            keys.forEach(key => {
                const innerElement = document.createElement(key.type);
                if (key.id === "thesis") {
                    innerElement.append(`Thesis title: ${item[key.id]}`);
                } else {
                    innerElement.append(item[key.id]);
                }
                element.appendChild(innerElement);
            });
        });
        element.className = className;

        parent.appendChild(element);
    }
}