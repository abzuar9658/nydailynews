import React from 'react';

import Article from '../article/article.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: '100 best horror movies',
          imageUrl: 'https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=81',
          id: 1,
          size: 'medium'
        },
        {
          title: 'Lorem ipsum dolor ',
          imageUrl: 'https://images.unsplash.com/photo-1505999407077-7937810b98ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1188&q=80',
          id: 2,
          size: 'medium'
        },
        {
          title: 'Sed ut perspiciatis ',
          imageUrl: 'https://images.unsplash.com/photo-1532310456006-ddaf275c93cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          id: 3,
          linkUrl: '',
          size: 'large'
        },
        {
          title: 'all this mistaken idea ',
          imageUrl: 'https://images.unsplash.com/photo-1524391488625-f6921ff34e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
          id: 4,
          linkUrl: '',
          size: 'large'
        },
        {
          title: 'Richard McClintock',
          imageUrl: 'https://images.unsplash.com/photo-1501396358880-2d8f6ace3fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 5,
          linkUrl: '',
          size: 'medium'
        },
        {
          title: '100 best horror movies',
          imageUrl: 'https://images.unsplash.com/photo-1534350131724-2a405f7108cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 6,
          size: 'small'
        },
        {
          title: '100 best horror movies',
          imageUrl: 'https://picsum.photos/200/300',
          id: 7,
          size: 'large'
        },
        {
          title: 'Lorem ipsum dolor ',
          imageUrl: 'https://images.unsplash.com/photo-1534350131724-2a405f7108cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 8,
          size: 'medium'
        },
        {
          title: 'Sed ut perspiciatis ',
          imageUrl: 'https://source.unsplash.com/800x600',
          id: 9,
          linkUrl: '',
          size: 'medium'
        },
        {
          title: 'all this mistaken idea ',
          imageUrl: 'https://source.unsplash.com/1200x1400',
          id: 10,
          linkUrl: '',
          size: 'large'
        },
        {
          title: 'Richard McClintock',
          imageUrl: 'https://source.unsplash.com/900x900',
          id: 11,
          linkUrl: '',
          size: 'small'
        },
        {
          title: '100 best horror movies',
          imageUrl: 'https://source.unsplash.com/random',
          id: 12,
          size: 'large'
        }        
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Article key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
