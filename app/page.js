export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #220000, black)",
      color: "white",
      fontFamily: "Arial",
      padding: "20px"
    }}>

      <style>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px red; }
          50% { text-shadow: 0 0 20px red; }
          100% { text-shadow: 0 0 5px red; }
        }

        .glow { animation: glow 2s infinite; }

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

        .social {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .icon {
          width: 60px;
          height: 60px;
          transition: 0.3s;
        }

        .icon:hover {
          transform: scale(1.2);
        }
      `}</style>

      <div style={{ textAlign: "center" }}>
        <h1 className="glow" style={{ fontSize: "50px" }}>
          🔥 Angelfreefi0YT 🔥
        </h1>
        <p>Gaming • Minecraft • Retos • Edits</p>

        <a href="https://youtube.com/@Angelfreefi0" target="_blank">
          <button className="btn">🚀 SUSCRÍBETE</button>
        </a>
      </div>

      <br />

      <div className="card">
        <h2>🎥 Videos</h2>

        <iframe width="100%" height="250" src="https://www.youtube.com/embed/3XUbDuSGsPo"></iframe>
        <br /><br />
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/FNaKHkvm7y4"></iframe>
      </div>

      <br />

      <div className="card">
        <h2>⚡ Shorts</h2>
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/xs1gjRk_-7k"></iframe>
      </div>

      <br />

      <div className="card">
        <h2>🌐 Redes</h2>
        <div className="social">
          <a href="https://youtube.com/@Angelfreefi0" target="_blank">
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
          </a>

          <a href="https://discord.gg/7Svef3hB" target="_blank">
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" />
          </a>
        </div>
      </div>

      <br />

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
