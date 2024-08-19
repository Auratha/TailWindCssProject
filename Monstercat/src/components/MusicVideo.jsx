const MusicVideo = () => {
  return (
    <>
      <div className="mt-12 px-6 md:w-[80%] md:mx-auto ">
        <h6 className="text-2xl">Music Video</h6>
        <iframe
          className="aspect-video w-[100%] lg:w-full  h-auto mx-auto mt-4"
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
