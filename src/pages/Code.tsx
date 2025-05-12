import './Code.scss';
import {RzxToolbar} from '../toolbar/RzxToolbar';
import {RzxCodeCard} from '../codeSnippet/RzxCodeCard';

export function Code() {
    return (
        <>
            <RzxToolbar title="Component usage examples" />
            <div className="code-page">
                <RzxCodeCard
                    title="Toolbar Component"
                    code={toolbarCode}
                    readOnly={true}
                    height={200}
                    width={500}
                    margin={{top: 10, bottom: 10, left: 10, right: 10}}
                />
                <RzxCodeCard
                    title="Button Component"
                    code={buttonCode}
                    readOnly={true}
                    height={200}
                    width={500}
                    margin={{top: 10, bottom: 10, left: 10, right: 10}}
                />
                <RzxCodeCard
                    title="Grid Component"
                    code={gridCode}
                    readOnly={true}
                    height={200}
                    width={500}
                    margin={{top: 10, bottom: 10, left: 10, right: 10}}
                />
                <RzxCodeCard
                    title="Code Snippet Component"
                    code={codeCode}
                    readOnly={true}
                    height={200}
                    width={500}
                    margin={{top: 10, bottom: 10, left: 10, right: 10}}
                />
                <RzxCodeCard
                    title="Dialog API"
                    code={dialogCode}
                    readOnly={true}
                    height={200}
                    width={500}
                    margin={{top: 10, bottom: 10, left: 10, right: 10}}
                />
                <RzxCodeCard
                    title="Styling via CSS variables"
                    code={cssCode}
                    readOnly={true}
                    height={200}
                    width={500}
                    margin={{top: 10, bottom: 10, left: 10, right: 10}}
                />
            </div>
        </>
    );
}

const toolbarCode = `<RzxToolbar
    title="compact/sub section toolbar"
    compact={true}
    items={[
        <RzxButton text="Add" icon={faPlus} compact={true} intent={VisualIntent.SUCCESS} />,
        <RzxButton text="Clone" icon={faCopy} compact={true} intent={VisualIntent.NONE} />,
        <RzxToolbarSeparator />,
        <Switch label="Row Borders" checked={rowBorders} onChange={() => setRowBorders(!rowBorders)} />
    ]}
/>`;

const buttonCode = `<RzxButton
    icon={props.icon}
    minimal={true}
    width={38}
    height={38}
    tooltip={props.title}
/>
<RzxButton
    tooltip={props.title}
    icon={props.icon}
    outline={true}
    compact={true}
    intent={VisualIntent.PRIMARY}    
/>
`;

const gridCode = `<RzxGrid
    height={500}
    rowData={props.rows}
    colDefs={props.colDefs}
    stripeRows={props.stripeRows}
    rowBorders={true}
    cellBorders={false}
/>`;

const cssCode = `body {
    --rzx-padding: 5px;
    --rzx-margin: 5px;
    --rzx-toolbar-size: 42px;

    --rzx-bg-color: #ffffff;
    --rzx-toolbar-color: #eceff1;

    &.rzx-dark {
    --rzx-bg-color: #111;
    --rzx-toolbar-color: #1f2326;
}
`;

const dialogCode = `const confirm = await rzxAppModel.confirm(\`Remove folder \${folder}?\`);
rzxAppModel.info('Request submitted');
rzxAppModel.error('Stack trace', 'Application Error');
`;

const codeCode = `<RzxCodeSnippet 
    title="Button Component" 
    code={props.code} 
    readOnly={true} 
    height={props.height}    
    width={props.width}
     />
`;
