export default function prepareVideos() {
    document.querySelectorAll("video").forEach((video) => (video.volume = 0.4));
}
