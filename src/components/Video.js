import { AspectRatio } from "@chakra-ui/react";

const Video = ({ src }) => {
  if (!src) {
    return null; // If src is not provided, don't render the component
  }

  let videoId = "";
  if (src.includes("youtube.com/shorts/")) {
    // Handle YouTube shorts URLs
    videoId = src.split("/shorts/")[1];
  } else if (src.includes("youtube.com/embed/")) {
    // Handle YouTube embed URLs
    videoId = src.split("/embed/")[1];
  } else if (src.includes("youtube.com/watch?v=")) {
    // Handle regular YouTube video URLs
    videoId = src.split("v=")[1];
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=1`;

  return (
    <div className="video">
      <AspectRatio maxW={{ lg: "70%", sm: "80%" }} m="auto" ratio={38 / 18}>
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default Video;
