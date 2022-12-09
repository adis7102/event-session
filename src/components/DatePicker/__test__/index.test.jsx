import React from "react";
import DatePicker from '../index';

import { render } from "@testing-library/react";

it('should render Input correctly', () => {
    const { container } = render(<DatePicker />);
  
    expect(container).toMatchSnapshot();
});