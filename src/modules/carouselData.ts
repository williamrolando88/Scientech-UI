export type CarouselObject = {
  title: string;
  description: string;
  target?: string;
  picture: string;
};

const setPictureUrl = (pictureName: string): string =>
  `./pictures/carousel/${pictureName}`;

export const carouselData: CarouselObject[] = [
  {
    title: 'Cositas HEDLAND',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('hedland.jpg'),
  },
  {
    title: 'Juguetes ABP',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('abp.jpg'),
  },
  {
    title: 'Juguetes ROTEX',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('rotex.jpg'),
  },
  {
    title: 'Juguetes Pepper',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('pepper.jpg'),
  },
  {
    title: 'Juguetes ROSS',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('ross.jpg'),
  },
  {
    title: 'Juguetes SCHNEIDER',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('schneider.jpg'),
  },
  {
    title: 'Juguetes Siemens',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores est nostrum repudiandae. Cum ullam magni quod nihil, aperiam eaque labore, laudantium, omnis eveniet dolor voluptatem. Veritatis quidem velit impedit obcaecati?',
    picture: setPictureUrl('siemens.jpg'),
  },
];
