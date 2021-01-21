export function getBase64Image(img: HTMLImageElement) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export function fetchimage() {
    const dataImage = localStorage.getItem('imgData');
    return "data:image/png;base64," + dataImage;
}

export function setBase64Image(key: string, img: string) {
    localStorage.setItem(key, img);
}
