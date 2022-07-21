import { CardHeader } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TurnedInNotSharpIcon from '@mui/icons-material/TurnedInNotSharp';

 function Bookmark(props) {

  return (
    <CardHeader
        action={
        <IconButton aria-label="bookmark">
          <TurnedInNotSharpIcon />
        </IconButton>
      }
      />
  )}

export default Bookmark