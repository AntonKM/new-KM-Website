export async function get() {
    const rssUrl = 'https://bsky.app/profile/did:plc:wanv52ef2iwub4r2m7yd5jae/rss';
    const response = await fetch(rssUrl);
    const text = await response.text();
    return new Response(text, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}