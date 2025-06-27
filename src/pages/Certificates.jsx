export default function Certificates() {
  return (
    <section className="certificates-section">

      <div className="card certificate-entry">
        <h2 className="certificate-title">
          <strong>IoT Using Adafruit</strong>
        </h2>
        <p className="certificate-details">
          Vellore Institute of Technology | 2023
        </p>
        <p>
          Explored the world of Internet of Things using the <strong>Adafruit</strong> platform. Built circuits, connected sensors to cloud dashboards, and understood how embedded systems communicate through APIs.
        </p>
        <a
          href="src/assets/certficate/VIT.pdf" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>

      <div className="card certificate-entry">
        <h2>
          <strong>Data Structures Using C</strong>
        </h2>
        <p>
          Coimbatore Institute of Technology | 2024
        </p>
        <p>
          Hands-on implementation of <strong>linked lists</strong>, <strong>trees</strong>, <strong>stacks</strong>, and <strong>queues</strong> using C. Helped me build a solid understanding of low-level memory management and clean algorithm design.
        </p>
        <a
          href="src/assets/certficate/foss club.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>

      <div className="card certificate-entry">
        <h2>
          <strong>Drone Design</strong>
        </h2>
        <p>
          NITTTR, Chennai | 2025
        </p>
        <p>
          Learned about <strong>drone mechanics</strong>, <strong>ESCs</strong>, <strong>propellers</strong>, and <strong>open-source flight controllers</strong>. Built and tested simple drone prototypes, bridging theory with real-world flight.
        </p>
        <a
          href="src/assets/certficate/drone workshop.pdf" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="view-certificate-button"
        >
          View Certificate
        </a>
      </div>
    </section>
  );
}