import React from 'react'
import type { Cart } from '../../types/cart'
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

interface Props {
  carts: Cart[];
}

export default function CartsTable({ carts }: Props) {
  return (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Cart ID</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Discount Total</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {carts.map(cart => {
                const discount = cart.total - cart.discountTotal;
                return (
                    <TableRow key={cart.id}>
                        <TableCell>{cart.id}</TableCell>
                        <TableCell>{cart.total}$</TableCell>
                        <TableCell>{discount}$</TableCell>
                        <TableCell>{cart.total}</TableCell>
                        
                        <TableCell>
                            <Button component={Link} to={`/carts/${cart.id}`} variant="contained" color="primary">
                                View Details
                            </Button>
                        </TableCell>

                        <TableCell>
                            <Button component={Link} to={`/users/${cart.totalProducts}`} variant="outlined" color="secondary">
                                Profile
                            </Button>
                        </TableCell>

                    </TableRow>
                );
            })}
        </TableBody>
    </Table>
  )
}