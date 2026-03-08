import type { CartItem } from '../../types/cart';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
    item: CartItem;
}

export default function CardItem({ item }: Props) {
    return (
        <Card sx={{ width: 250 }}>

      <CardMedia
        component="img"
        height="140"
        image={item.thumbnail}
      />

      <CardContent>

        <Typography variant="h6">
          {item.title}
        </Typography>

        <Typography>
          Price: {item.price}$
        </Typography>

        <Typography>
          Discount: {item.discountPercentage}%
        </Typography>

      </CardContent>

    </Card>
      
    )
}