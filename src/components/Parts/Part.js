import React from 'react';

import { Card, Button } from 'semantic-ui-react';

const Part = ({ part, handleSelect, selected }) => {
  // const part = {
  //   nombre: 'Ryzen 7 3800X',
  //   marca: 'AMD',
  //   tipo: 'procesador',
  //   interface: 'AM4',
  //   tags: ['3.90GHz', '8-Core', '32MB L3 Cache'],
  //   selectedFile:
  //     'https://www.xtremetecpc.com/wp-content/uploads/2019/11/7-3800X.jpg',
  // };

  return (
    <Card>
      <img
        className='part-img'
        src={part.selectedFile}
        alt={part.nombre}
        width='250'
        height='250'
      />
      <Card.Content>
        <Card.Header className='name'>{part.nombre}</Card.Header>
        <Card.Meta>
          <span>{part.marca}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content className='price' extra>
        $ {part.precio}
      </Card.Content>

      {selected ? (
        <Button style={{ marginTop: 'auto' }} secondary>
          SELECCIONADO
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleSelect(part);
          }}
          style={{ marginTop: 'auto' }}
          primary
        >
          SELECCIONAR
        </Button>
      )}
    </Card>
  );
};

export default Part;
