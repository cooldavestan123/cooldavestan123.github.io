export const fetchVideos = async () => {
    const response = await fetch('/api/videos');
    if (!response.ok) {
        throw new Error('Failed to fetch videos');
    }
    return await response.json();
};

export const fetchVideoDetails = async (videoId) => {
    const response = await fetch(`/api/videos/${videoId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch video details');
    }
    return await response.json();
};