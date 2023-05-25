import { AspectRatio } from "@chakra-ui/react";

const Video = () => {
  return (
    <div className="video">
      <AspectRatio maxW={{ lg: "70%", sm: "80%" }} m="auto" ratio={38 / 18}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pvEXAjHgdOs?controls=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
          HELLO
        </iframe>
      </AspectRatio>
    </div>
  );
};

export default Video;
