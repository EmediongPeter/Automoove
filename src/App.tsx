import Images from "./images";
import ImagesSlider from "./ImagesSlider";

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImagesSlider images={Images} />
      <a href="/" style={{ fontSize: "2rem" }}>
        Link
      </a>
    </div>
  );
}

export default App;
