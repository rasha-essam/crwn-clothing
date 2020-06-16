import React, { useState } from 'react';
import MenuItem from './../../components/menu-item/menu-item.component';
import './directory.styles.scss';
import { SECTIONS_DATA } from './../../constants';

const Directory = () => {
  const [sections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
