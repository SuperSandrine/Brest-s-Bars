import React from 'react';
import Button from '../../components/Button/Button';

const Header = () => {
  return (
    <div className="flex justify-between p-5  bg-secondary">
      <h1 className="font-display text-6xl text-primary">
        Brest's <span className="text-accent ">Bars</span>
      </h1>
      <Button>Faire une demande</Button>
    </div>
  );
};

export default Header;
