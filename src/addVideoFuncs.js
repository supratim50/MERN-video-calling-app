const addVideo = (video, stream, videoGrid) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

export { addVideo };
