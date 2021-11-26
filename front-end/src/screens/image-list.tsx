export const ImageList = () => {
  let arr = [
    "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
  ];

  return (
    <div className="h-100-vh w-100-vw flex flex-wrap">
      {arr.map((imgLink) => {
        return (
          <img
            src={`${imgLink}`}
            className="image h-41-vh w-41-vh ma-10"
            style={{ backgroundSize: "contain" }}
          />
        );
      })}
    </div>
  );
};
