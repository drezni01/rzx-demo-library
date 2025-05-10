import {ColDef, themeBalham} from 'ag-grid-community';
import {AgGridReact} from 'ag-grid-react';
import classNames from 'classnames';
import './RzxGrid.scss';

export type RzxGridProps = {
    height: number;
    width?: number;
    stripeRows?: boolean;
    rowBorders?: boolean;
    cellBorders?: boolean;
    rowData?: any[];
    colDefs?: ColDef[];
};

export const RzxGrid = (props: RzxGridProps) => {
    const className = classNames(
        'rzx-grid',
        'ag-theme-balham-dark',
        props.rowBorders ? 'rzx-grid__row-borders' : '',
        props.cellBorders ? 'rzx-grid__cell-borders' : '',
        props.stripeRows ? 'rzx-grid__stripe-rows' : ''
    );

    return (
        <div className={className} style={{height: 500}}>
            <AgGridReact
                rowData={props.rowData}
                columnDefs={props.colDefs}
                defaultColDef={{
                    sortable: true,
                    filter: true,
                    resizable: true,
                    flex: 1
                }}
                rowHeight={28}
                headerHeight={28}
                rowSelection={'single'}
                theme={themeBalham}
            />
        </div>
    );
};
