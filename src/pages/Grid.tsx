import {faAdd, faTrash} from '@fortawesome/free-solid-svg-icons';
import {RzxButton} from '../buttons/RzxButton';
import {RzxToolbar, RzxToolbarSeparator} from '../toolbar/RzxToolbar';
import {RzxGrid} from '../grids/RzxGrid';
import {useState} from 'react';
import {ColDef} from 'ag-grid-community';
import {faker} from '@faker-js/faker';
import {VisualIntent} from '../application/RzxAppSpec';
import {Switch} from '@blueprintjs/core';

export function Grid() {
    const [rows, setRows] = useState(generateRows());
    const [stripeRows, setStripeRows] = useState(true);
    const [rowBorders, setRowBorders] = useState(false);
    const [cellBorders, setCellBorders] = useState(false);

    const colDefs: ColDef[] = [
        {headerName: 'Ticker', field: 'ticker'},
        {headerName: 'Sec Name', field: 'description'},
        {headerName: 'Quantity', field: 'quantity', cellDataType: 'number', type: 'rightAligned'},
        {
            headerName: 'Price',
            field: 'price',
            cellDataType: 'number',
            type: 'rightAligned',
            valueFormatter: v => v.data.price.toFixed(2)
        },
        {
            headerName: 'Px Chg',
            field: 'priceChg',
            cellDataType: 'number',
            type: 'rightAligned',
            valueFormatter: v => v.data.priceChg.toFixed(2)
        },
        {
            headerName: 'Px Chg %',
            field: 'priceChgPct',
            cellDataType: 'number',
            type: 'rightAligned',
            valueFormatter: v => (v.data.priceChgPct * 100).toFixed(2) + '%'
        },
        {
            headerName: 'MV',
            field: 'mv',
            cellDataType: 'number',
            type: 'rightAligned',
            valueFormatter: v => v.data.mv.toFixed(0)
        },
        {
            headerName: 'P&L Dly',
            field: 'dlyPnl',
            cellDataType: 'number',
            type: 'rightAligned',
            valueFormatter: v => v.data.dlyPnl.toFixed(0)
        }
    ];

    return (
        <>
            <RzxToolbar
                title="test"
                items={[
                    <RzxButton
                        text="Add 10"
                        icon={faAdd}
                        intent={VisualIntent.SUCCESS}
                        onClick={() => {
                            const newRows = [...rows];
                            newRows.push(...generateRows());
                            setRows(newRows);
                        }}
                    />,
                    <RzxButton
                        text="Purge"
                        intent={VisualIntent.DANGER}
                        icon={faTrash}
                        onClick={() => {
                            setRows([]);
                        }}
                    />,
                    RzxToolbarSeparator(),
                    <Switch label="Row Borders" checked={rowBorders} onChange={() => setRowBorders(!rowBorders)} />,
                    <Switch label="Cell Borders" checked={cellBorders} onChange={() => setCellBorders(!cellBorders)} />,
                    <Switch label="Stripe Rows" checked={stripeRows} onChange={() => setStripeRows(!stripeRows)} />
                ]}
            />
            <RzxGrid
                height={500}
                rowData={rows}
                colDefs={colDefs}
                stripeRows={stripeRows}
                rowBorders={rowBorders}
                cellBorders={cellBorders}
            />
        </>
    );
}

function generateRows() {
    const positions = [];
    for (let i = 0; i < 10; i++) {
        const position = {
            description: faker.company.name().toLocaleUpperCase(),
            ticker: faker.commerce.productName().substring(0, 4).toUpperCase(),
            quantity: parseInt(faker.finance.amount({min: 1000, max: 100000})),
            price: Math.random() * 500,
            priceChg: 0,
            priceChgPct: 0,
            mv: 0,
            dlyPnl: 0
        };

        position.mv = position.price * position.quantity;
        position.priceChg = (Math.random() * position.price) / 100;
        position.priceChgPct = (position.priceChg / position.price) * 100;
        position.dlyPnl = position.priceChg * position.quantity;

        positions.push(position);
    }
    return positions;
}
