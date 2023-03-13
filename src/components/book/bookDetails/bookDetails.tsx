import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { BooksModel } from '../../../models/booksModel';
import { useAppSelector } from '../../../redux/slices/bookSlice';
import { useNavigate } from 'react-router-dom';

function BookDetails() {
const Book: BooksModel = useAppSelector<BooksModel>((state) => state?.books?.book);
const navigate = useNavigate();
  return (
    <React.Fragment>

    <a onClick={()=> navigate("/")}
    className="close-search"
  >
    Close
  </a>
    <div role="bookDetailedView" className="center">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={Book?.authors}
        subheader={Book?.publishedDate}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={Book?.imageLinks?.smallThumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Book?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </React.Fragment>
  );
}


export default BookDetails;