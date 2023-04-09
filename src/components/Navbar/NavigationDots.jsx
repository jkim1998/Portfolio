import React from 'react';
import { ThemeColors } from '../../assets/theme';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: ThemeColors.accent } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;