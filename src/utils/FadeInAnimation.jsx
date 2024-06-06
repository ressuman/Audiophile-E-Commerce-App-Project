import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * FadeInSection component fades in its children when they scroll into view.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the component.
 * @returns {JSX.Element} The rendered component.
 */

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`fade-section ${isVisible ? "is-visible" : "is-hidden"}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
