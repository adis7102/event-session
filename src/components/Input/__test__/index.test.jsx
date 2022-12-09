import React from "react";
import Input from '../index';

import { render } from "@testing-library/react";

it('should render Input correctly', () => {
    const { container } = render(<Input />);
  
    expect(container).toMatchSnapshot();
});