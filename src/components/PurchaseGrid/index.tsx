import React, { useState } from 'react';
import { Purchase } from '../../models/Purchase';
import { PurchaseRow } from './PurchaseRow';
import styled from 'styled-components';


const GridContainer = styled.div`
    display: grid;
`;

const GridHeaderItem = styled.div`
    grid-row: 1;
    font-weight: 600;
    padding: 0.5em 0 0.5em 0.5em;
    background: rgba(0, 0, 0, 0.1);
`;

enum COLUMN {
    AMOUNT="Amount", DESCRIPTION="Description", TIME="Time"
}

export const PurchaseGrid = React.memo(({ purchases }: { purchases: Purchase[]}) => {

    const defaultSortColumn: COLUMN = COLUMN.AMOUNT;
    const [ sortColumn, setSortColumn ] = useState(defaultSortColumn as COLUMN);

    const [ sortAscending, setSortAscending ] = useState(true);

    const handleHeaderClick = (column: COLUMN) => {
        if (sortColumn == column) {
            setSortAscending(!sortAscending);
        } else {
            setSortAscending(true);
            setSortColumn(column);
        }
    }



    return (
        <GridContainer>
            {
                Object.values(COLUMN).map((column: COLUMN) => (
                    <GridHeaderItem key={column} onClick={() => handleHeaderClick(column)} >
                        {column.toString()}
                    </GridHeaderItem>
                ))
            }
            {
                purchases
                .sort((a: Purchase, b: Purchase) => {
                    if (sortColumn == COLUMN.AMOUNT) {
                        return sortAscending ? a.amount - b.amount : b.amount - a.amount;
                    } else if ( sortColumn == COLUMN.DESCRIPTION ) {
                        if (a.description == b.description) {
                            return 0;
                        } else if (a.description > b.description) {
                            return sortAscending ? 1 : -1;
                        }
                        return sortAscending ? -1 : 1;
                    }
                    return sortAscending ? a.created_at - b.created_at : b.created_at - a.created_at;
                })
                .map((purchase: Purchase, index: number) => (
                    <PurchaseRow key={purchase.id} row={index + 2} purchase={purchase} />
                ))
            }
        </GridContainer>
    )
})
