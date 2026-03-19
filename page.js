export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <h1>🔥 Angelfreefi0YT 🔥</h1>
      <p>Gaming • Minecraft • Retos</p>

      <br />

      <a href="https://youtube.com/@Angelfreefi0" target="_blank">
        <button style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer"
        }}>
          SUSCRÍBETE
        </button>
      </a>

      <br /><br />

      <h2>🎥 Videos</h2>

      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowFullScreen
      ></iframe>

      <br /><br />

      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
        allowFullScreen
      ></iframe>

      <br /><br />

      <h2>🌐 Redes</h2>

      <p><a href="https://youtube.com/@Angelfreefi0" target="_blank">YouTube</a></p>
      <p><a href="#">TikTok</a></p>
      <p><a href="#">Discord</a></p>

    </div>
  );
}
