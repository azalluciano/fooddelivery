import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Commandez vos plats préférés ici</h2>
        <p>
          Retrouvez en quelques clics vos plats préférés directement depuis
          notre plateforme. Que vous ayez envie d’un repas rapide, d’une
          spécialité gourmande ou d’un menu complet, nous mettons tout en œuvre
          pour vous offrir la meilleure expérience de commande. Commandez
          facilement, profitez d’un large choix et laissez-vous livrer vos
          saveurs favorites sans effort.
        </p>
        <button>Voir Menu</button>
      </div>
    </div>
  );
};

export default Header;
