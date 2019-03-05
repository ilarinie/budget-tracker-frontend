import * as React from 'react';
import { Purchase } from '../../models/Purchase';
import styled from 'styled-components';


const RowField = styled.div<{ row: number }>`
    grid-row: ${props => props.row};
    padding: 0.5em 0 0.5em 0.5em;
    border-bottom: 1px solid lightgray;
` 


export const PurchaseRow = React.memo(({ purchase, row }: { purchase: Purchase, row: number }) => {

    const date: Date = new Date(0);
    date.setUTCMilliseconds(purchase.created_at);
    const dateString: string = date.toLocaleString();


    return (
        <>
            <RowField row={row}>
                {purchase.amount}
            </RowField>
            <RowField row={row}>
                {purchase.description}
            </RowField>
            <RowField row={row}>
                {dateString}
            </RowField>
        </>
    )
});