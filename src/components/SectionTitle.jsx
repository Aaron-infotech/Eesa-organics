import { Link } from 'react-router-dom';

export default function SectionTitle({
  label,
  title,
  subtitle,
  linkText,
  linkTo,
  align = 'center',
  light = false,
}) {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}>
      {label && <span className="section-title__label">{label}</span>}
      {title && <h2 className="section-title__heading">{title}</h2>}
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
      {linkText && linkTo && (
        <Link to={linkTo} className="section-title__link">
          {linkText}
        </Link>
      )}
    </div>
  );
}
