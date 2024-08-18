const MusicVideo = () => {
  return (
    <>
      <div className="mt-8 px-6">
        <h6 className="text-2xl">Music Video</h6>
        <iframe
          className="aspect-video w-[100%] mx-auto mt-4"
          width="461"
          height="259"
          src="https://www.youtube.com/embed/7nObtWENgxA"
          title="Conro - Therapy [Monstercat Lyric Video]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default MusicVideo;
