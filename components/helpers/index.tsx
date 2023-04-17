export const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: '#051036',
      width: 65,
      height: 65,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
