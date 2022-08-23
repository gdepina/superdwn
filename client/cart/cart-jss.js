import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  navLink: {
    '&:hover': { backgroundColor: theme.colors.dark[4] },
  },

  iconBadgeContainer: {
    position: 'relative',
  },

  iconBadgeIcon: {
    position: 'relative',
  },

  iconBadge: {
    backgroundColor: theme.colors.blue[7],
    fontSize: '10px',
    color: theme.colors.white,
    textAlign: 'center',
    width: '15px',
    height: '11px',
    borderRadius: '35%',
    position: 'absolute',
    top: '-2px',
    left: '18px',
  },

  cartItem: {
    '&:hover': { backgroundColor: theme.colors.dark[4] },
    marginBottom: '10px',
    marginTop: '10px',
    minHeight: '63px',
    borderRadius: '10px',
    maxWidth: '263px',
  },

  itemImg: {
    border: `1px solid ${theme.colors.dark[3]}`,
    marginTop: '5px',
    marginLeft: '10px',
  },

  itemTitle: {
    display: 'inline-flex',
    alignItems: 'center',
  },

  buttonQuantityPlus: {
    display: 'inline-flex',
    marginLeft: '10px',
  },

  buttonQuantityMinus: {
    display: 'inline-flex',
    marginLeft: '5px',
  },

  buttonHidden: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0.2s, opacity 0.3s linear',
  },

  buttonsQtyGroup: {
    alignItems: 'center',
  },
}));
