export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #220000, black)",
      color: "white",
      fontFamily: "Arial",
      padding: "20px"
    }}>

      {/* Animación CSS */}
      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px red; }
          50% { text-shadow: 0 0 20px red; }
          100% { text-shadow: 0 0 5px red; }
        }

        .glow {
          animation: glow 2s infinite;
        }

        .card {
          background: rgba(255,0,0,0.1);
          border: 1px solid red;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(255,0,0,0.5);
        }

        .btn {
          background: red;
          border: none;
          padding: 12px 25px;
          color: white;
          font-size: 18px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          background: darkred;
          transform: scale(1.1);
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <h1 className="glow" style={{ fontSize: "50px" }}>🔥 Angelfreefi0YT 🔥</h1>
        <p>Gaming • Minecraft • Retos • Edits</p>

        <a href="https://youtube.com/@Angelfreefi0" target="_blank">
          <button className="btn">🚀 SUSCRÍBETE</button>
        </a>
      </div>

      <br />

      {/* Videos */}
      <div className="card">
        <h2>🎥 Videos</h2>

        <iframe width="100%" height="250" src="https://www.youtube.com/embed/TU_VIDEO_1"></iframe>
        <br /><br />
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/TU_VIDEO_2"></iframe>
      </div>

      <br />

      {/* Shorts */}
      <div className="card">
        <h2>⚡ Shorts</h2>
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/TU_SHORT"></iframe>
      </div>

      <br />

      {/* Redes */}
      <div className="card">
        <h2>🌐 Redes</h2>
        <p><a href="https://youtube.com/@Angelfreefi0" target="_blank">YouTube</a></p>
        <p><a href="#">TikTok</a></p>
        <p><a href="#">Discord</a></p>
      </div>

      <br />

      {/* Sobre */}
      <div className="card">
        <h2>👤 Sobre el canal</h2>
        <p>
          Bienvenido a Angelfreefi0YT 🔥 Aquí encontrarás contenido gamer,
          Minecraft, retos y momentos épicos.
        </p>
      </div>

    </div>
  );
}
