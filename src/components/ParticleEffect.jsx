import React from "react";

// Composant pour l'effet de particules
const ParticleEffect = ({ isAnimating }) => {
    if (!isAnimating) return null;
    
    return (
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                React.createElement('div', {
                    key: i,
                    className: "absolute w-2 h-2 bg-white rounded-full particle",
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${0.5 + Math.random() * 1}s`
                    }
                })
            ))}
        </div>
    );
};

// Export du composant (pour la compatibilité)
export default ParticleEffect;