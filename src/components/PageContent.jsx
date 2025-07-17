// components/PageContent.jsx
import React from 'react';

const PageContent = ({ currentPage }) => {
  const getPageContent = () => {
    switch(currentPage) {
      case 'home':
        return {
          title: 'Bienvenue',
          content: 'Découvrez l\'univers artistique de Nypo.'
        };
      case 'oeuvres':
        return {
          title: 'Mes Œuvres',
          content: 'Explorez ma collection d\'œuvres artistiques et créatives.'
        };
      case 'apropos':
        return {
          title: 'À Propos',
          content: 'Artiste passionné, je crée des œuvres qui touchent l\'âme.'
        };
      case 'contacts':
        return {
          title: 'Contacts',
          content: 'N\'hésitez pas à me contacter pour toute collaboration.'
        };
      default:
        return {
          title: 'Contenu du site',
          content: 'Ce contenu était caché sous l\'image de fond.'
        };
    }
  };

  const { title, content } = getPageContent();

  return (
    <div className="page-content">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default PageContent;