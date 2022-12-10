import React from "react";

const Sortable = (props) => {
  const { children, listData, index, dragItem, dragOverItem, onChange } = props;

  const handleSort = () => {
    //duplicate items
    let cloneContent = [...JSON.parse(JSON.stringify(listData))];

    //remove and save the dragged item content
    const draggedItemContent = cloneContent.splice(dragItem.current, 1)[0];

    //switch the position
    cloneContent.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    onChange(cloneContent);
  };

  return (
    <div
      className="sortable"
      draggable
      onDragStart={() => (dragItem.current = index)}
      onDragEnter={() => (dragOverItem.current = index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
};

export default Sortable;
