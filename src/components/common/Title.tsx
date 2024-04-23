import { Typography } from "@mui/material";

export default function Title({children, ...props}: {children: string}) {
  return (
    <Typography
      variant="h2"
      component="h1"
      marginBottom="2rem"
      color="text.primary"
      {...props}
    >{children}</Typography>
  )
}