import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import type { Cart } from "../../types/cart";
import CardItem from "../../components/CardItem/CardItem";

export default function CartDetailsPage() {

  const { id } = useParams();
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {

    if (!id) return;

    async function load() {
      const res = await fetch(`https://dummyjson.com/carts/${id}`);
      const data = await res.json();
      setCart(data);
    }

    load();

  }, [id]);

  if (!cart) return <div>Loading...</div>;

  return (
    <Box>

      <Typography variant="h4" gutterBottom>
        Cart: {cart.id}
      </Typography>

      <Typography>Total: {cart.total}$</Typography>

      <Typography>
        Discount Total: {cart.discountTotal}$
      </Typography>

      <Typography>
        Products: {cart.totalProducts}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 3 }}>

        {cart.products.map((p) => (
          <CardItem key={p.id} item={p} />
        ))}

      </Box>

    </Box>
  );
}