import React from 'react'

type GridListProps = {
  Columns: string;
  children: any
}

const GridList: React.FC<GridListProps> = ({ children, Columns }:  GridListProps) => {
  return (
    <div aria-label="grid" className={`grid ${Columns} gap-8 `}>
      {children}
    </div>
  )
}

export default GridList;
