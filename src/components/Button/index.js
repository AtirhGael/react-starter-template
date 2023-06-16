import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({
    variant="outlined",
    text="",
    btnStyle,
    onClick
}) {

  return (
      <Button style={{ color: '#fff', ...btnStyle}} variant={variant} onClick={onClick} sx={{ textTransform: 'none' }}>{text}</Button>
  );
}

// Le button prend 3 types de variant: text, contained, outlined