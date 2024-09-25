import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {[
          {
            title: '',
            description: '',
            id: 1,
          },
        ].map(item => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
