export class Video {
    id: string;
    title: string;
    description: string;
    url: string;

    constructor(id: string, title: string, description: string, url: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}