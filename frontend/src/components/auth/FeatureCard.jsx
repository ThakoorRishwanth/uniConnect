import '../../styles/auth.css';

export const FeatureCard = ({ icon, title, desc, bgColor }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper" style={{ background: bgColor }}>{icon}</div>
      <div>
        <p className="feature-title">{title}</p>
        <p className="feature-desc">{desc}</p>
      </div>
    </div>
  );
};
