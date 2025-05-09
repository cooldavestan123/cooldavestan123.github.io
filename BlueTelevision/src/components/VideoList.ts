export class VideoList {
    private videos: Array<{ id: string; title: string; description: string; url: string }>;

    constructor(videos: Array<{ id: string; title: string; description: string; url: string }>) {
        this.videos = videos;
    }

    render(): void {
        const videoListContainer = document.createElement('div');
        videoListContainer.className = 'video-list';

        this.videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerText = video.title;
            videoItem.onclick = () => this.onVideoSelect(video.id);
            videoListContainer.appendChild(videoItem);
        });

        document.body.appendChild(videoListContainer);
    }

    onVideoSelect(videoId: string): void {
        console.log(`Video selected: ${videoId}`);
        // Additional logic for handling video selection can be added here
    }
}