export const ImageList = () => {
  let arr = [
    "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
    "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
    "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
    "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    "https://cdn.myanimelist.net/images/anime/1918/96303.jpg",
    "https://cdn.myanimelist.net/images/anime/7/81992.jpg",
  ];

  return (
    <div className="h-100-vh w-100-vw flex flex-wrap justify-center align-center">
      {arr.map((imgLink) => {
        return (
          <img
            src={`${imgLink}`}
            className="image-no-radius h-48-vh w-48-vh"
            style={{ backgroundSize: "contain" }}
          />
        );
      })}
    </div>
  );
};
