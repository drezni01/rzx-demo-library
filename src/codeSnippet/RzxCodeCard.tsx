import {Card, Elevation, H3} from '@blueprintjs/core';
import {javascript} from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';
import './RzxCodeCard.scss';
import {MarginSpec} from '../application/RzxAppSpec';

export type RzxCodeCardProps = {
    title: string;
    code: string;
    height: number;
    width: number;
    margin?: MarginSpec;
    readOnly?: boolean;
};

export function RzxCodeCard(props: RzxCodeCardProps) {
    return (
        <Card
            elevation={Elevation.TWO}
            className="rzx-code-card"
            style={{
                marginTop: props.margin?.top ? `${props.margin.top}px` : '0px',
                marginRight: props.margin?.right ? `${props.margin.right}px` : '0px',
                marginBottom: props.margin?.bottom ? `${props.margin.bottom}px` : '0px',
                marginLeft: props.margin?.left ? `${props.margin.left}px` : '0px'
            }}
        >
            <H3>{props.title}</H3>
            <ReactCodeMirror
                value={props.code}
                height={props.height + 'px'}
                width={props.width + 'px'}
                readOnly={props.readOnly}
                extensions={[javascript({jsx: true})]}
            />
        </Card>
    );
}
