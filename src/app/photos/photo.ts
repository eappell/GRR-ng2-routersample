export class Photo {
    photoId: string;
    caption: string;
    filename: string;

    constructor(filename: string, caption?: string) {
        this.filename = filename;

        if (caption) {
            this.caption = caption;
        }
    }
}
