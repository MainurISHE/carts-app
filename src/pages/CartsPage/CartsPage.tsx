import React, { useEffect, useState } from 'react'
import type { Cart } from '../../types/cart';
import { BASE_URL } from '../../constants/constants';
import { Container } from '@mui/material';
import CartsTable from '../../components/CartsTable/CartsTable';


export default function CartsPage() {
    const [carts, setCarts] = useState<Cart[]>([]);

    useEffect(()=> {

        async function load() {
            const res = await fetch(`${BASE_URL}/carts`);
            const data = await res.json();
            setCarts(data.carts);
        }
        load();
    },[]);
  return (
    <Container>
        <h1>Carts</h1>
        <CartsTable carts={carts} />
    </Container>
  )
}
