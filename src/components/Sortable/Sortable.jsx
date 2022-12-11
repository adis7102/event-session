import React from 'react';
import {
  SortableContainer as sortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';

import Dots from '../../icons/Dots';
import './styles.scss';

export const DragHandle = SortableHandle(() => 
  <div className="drag-handler"><Dots type="vertical" /></div>);

export const SortableItem = SortableElement(({children}) => children);

export const SortableContainer = sortableContainer(({children, className, withoutWrapper}) => {
  if(withoutWrapper) {
    return children;
  }

  return (
    <div className={`sortable-container${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
});