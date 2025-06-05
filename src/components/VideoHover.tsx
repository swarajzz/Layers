// components/VideoHover.js
export default function VideoHover() {
    return (
        <video
            src="/assets/gif-incredible.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="pointer-events-none absolute bottom-full left-1/2 inline-block -translate-x-1/2 rounded-2xl opacity-0 shadow-xl transition duration-500 group-hover:opacity-100"
        />
    );
}
