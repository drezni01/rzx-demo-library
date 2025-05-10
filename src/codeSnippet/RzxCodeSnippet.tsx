import {Card, Elevation, H3} from '@blueprintjs/core';
import {javascript} from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';
import './RzxCodeSnippet.scss';

export type RzxCodeSnippetProps = {
    title: string;
    code: string;
    height: number;
    width: number;
    readOnly?: boolean;
};

export function RzxCodeSnippet(props: RzxCodeSnippetProps) {
    return (
        <Card elevation={Elevation.TWO} className="code-card">
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
