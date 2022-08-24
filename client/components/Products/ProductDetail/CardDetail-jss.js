import { createStyles } from '@mantine/core';

const styles = createStyles(() => ({
  title: {
    fontSize: '35px',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  category: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  description: {
    padding: '20px 0px',
  },
  stock: {
    padding: '10px 0px',
  },
  price: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  button: {
    radius: 'xl',
    marginLeft: 'auto',
    width: '200px',
    height: '60px',
    fontSize: '19px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  discButton: {
    display: 'block',
    maxWidth: '72px',
  },
  strikeStrought: {
    textDecoration: 'line-through',
    color: 'grey',
    display: 'inline',
    marginLeft: '0.3rem',
  },
}));

export default styles;
