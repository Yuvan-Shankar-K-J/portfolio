export default function Projects() {
  return (
    <section className="projects-section">

      <div className="card project-entry">
        <h2 className="project-title"><strong>Career Recommendation System</strong></h2>
        <p className="project-description">
          This is like a smart counselor. I built it to help students figure out what job or course suits them best based on their skills, interests, and background. I used <strong>Python</strong> and some AI tools like <strong>Flask</strong> and <strong>Scikit-Learn</strong>. It checks your profile and gives career suggestions. Around 200 students tried it — and most said it made choosing easier.
        </p>
        <a href="https://github.com/Yuvan-Shankar-K-J/Career-Recommendation-System" target="_blank" rel="noopener noreferrer" >
          View Project
        </a>
      </div>

      <div className="card project-entry">
        <h2 className="project-title"><strong>Real-Time Inventory Assistant</strong></h2>
        <p className="project-description">
          Imagine a shop that runs out of stuff or over-orders and wastes money. I built an app that predicts what items will be needed and when. It uses <strong>Flutter</strong> for the app design and <strong>Serverpod</strong> and machine learning for predictions. It helped cut waste by 20% and made stock planning 30% better.
        </p>
        <a href="https://github.com/Yuvan-Shankar-K-J/Inventory-Assistant" target="_blank" rel="noopener noreferrer" >
          View Project
        </a>
      </div>

      <div className="card project-entry">
        <h2 className="project-title"><strong>Hand Sign Detection System</strong></h2>
        <p className="project-description">
          This one's all about helping people who can’t speak. I made a system using <strong>OpenCV</strong> and <strong>TensorFlow</strong> that can read hand signs through a camera. It understands what sign you're making and responds. It's fast and accurate — 92% accurate in tests. Perfect for silent communication or even emergency alerts.
        </p>
        <a href="https://github.com/Yuvan-Shankar-K-J/Hand-Sign-Detection" target="_blank" rel="noopener noreferrer" >
          View Project
        </a>
      </div>

      <div className="card project-entry">
        <h2 className="project-title"><strong>Law Snap</strong></h2>
        <p className="project-description">
          Most people don’t understand their basic rights — especially in their own language. So I made a platform using <strong>Flask</strong> and <strong>Streamlit</strong> that explains Indian laws in 8 regional languages. Over 500 people tried it, and feedback showed it helped many understand legal stuff much better. Think of it as Google Translate but for law.
        </p>
        <a href="https://github.com/Yuvan-Shankar-K-J/LawSnap" target="_blank" rel="noopener noreferrer" >
          View Project
        </a>
      </div>

      <div className="card project-entry">
        <h2 className="project-title"><strong>Animal Intrusion Detection System</strong></h2>
        <p className="project-description">
          Farms sometimes get ruined by animals sneaking in. So I built a system using <strong>sensors</strong> and a <strong>NodeMCU chip</strong> that detects animals and alerts the farmer in real time. It’s like a smart scarecrow that can sense danger. Cheap to make and helps save crops.
        </p>
        <a href="https://github.com/Yuvan-Shankar-K-J/Animal-Intrusion-Detection" target="_blank" rel="noopener noreferrer" >
          View Project
        </a>
      </div>

      <div className="card project-entry">
        <h2 className="project-title"><strong>Pseudo Eye</strong></h2>
        <p className="project-description">
          I made this for people who are blind. It’s a small wearable device using <strong>ultrasonic sensors</strong> that feels the space ahead and sends tiny vibrations to let the person know if something is in the way. It’s powered by <strong>IoT</strong> and was made to be cheap, simple, and easy to use.
        </p>
        <a href="https://github.com/Yuvan-Shankar-K-J/Pseudo-Eye" target="_blank" rel="noopener noreferrer" >
          View Project
        </a>
      </div>
    </section>
  );
}