import {faArchive, faCopy, faEdit, faGear, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {RzxButton} from '../buttons/RzxButton';
import {RzxToolbar} from '../toolbar/RzxToolbar';
import {VisualIntent} from '../application/RzxAppSpec';

export function Toolbars() {
    return (
        <>
            <RzxToolbar
                title="top level/main toolbar"
                items={[
                    <RzxButton text="wide button" width={160} />,
                    <RzxButton text="Add" icon={faPlus} intent={VisualIntent.SUCCESS} />,
                    <RzxButton text="Clone" icon={faCopy} intent={VisualIntent.NONE} />,
                    <RzxButton text="Edit" icon={faEdit} intent={VisualIntent.PRIMARY} />,
                    <RzxButton text="Archive" icon={faArchive} intent={VisualIntent.WARNING} />,
                    <RzxButton text="Delete" icon={faTrashCan} intent={VisualIntent.DANGER} />,
                    <RzxButton text="Settings" icon={faGear} />,
                    <span>minimal:</span>,
                    <RzxButton tooltip="Add" icon={faPlus} intent={VisualIntent.SUCCESS} />,
                    <RzxButton tooltip="Clone" icon={faCopy} intent={VisualIntent.NONE} />,
                    <RzxButton tooltip="Edit" icon={faEdit} intent={VisualIntent.PRIMARY} />,
                    <RzxButton tooltip="Archive" icon={faArchive} intent={VisualIntent.WARNING} />,
                    <RzxButton tooltip="Delete" icon={faTrashCan} intent={VisualIntent.DANGER} />,
                    <RzxButton tooltip="Settings" icon={faGear} />
                ]}
            />
            <RzxToolbar
                title="compact/sub section toolbar"
                compact={true}
                items={[
                    <RzxButton text="wide button" compact={true} width={130} />,
                    <RzxButton text="Add" icon={faPlus} compact={true} intent={VisualIntent.SUCCESS} />,
                    <RzxButton text="Clone" icon={faCopy} compact={true} intent={VisualIntent.NONE} />,
                    <RzxButton text="Edit" icon={faEdit} compact={true} intent={VisualIntent.PRIMARY} />,
                    <RzxButton text="Archive" icon={faArchive} compact={true} intent={VisualIntent.WARNING} />,
                    <RzxButton text="Delete" icon={faTrashCan} compact={true} intent={VisualIntent.DANGER} />,
                    <RzxButton text="Settings" compact={true} icon={faGear} />,
                    <span>minimal:</span>,
                    <RzxButton
                        tooltip="Add"
                        icon={faPlus}
                        compact={true}
                        outline={true}
                        intent={VisualIntent.SUCCESS}
                    />,
                    <RzxButton tooltip="Clone" icon={faCopy} compact={true} intent={VisualIntent.NONE} />,
                    <RzxButton tooltip="Edit" icon={faEdit} compact={true} intent={VisualIntent.PRIMARY} />,
                    <RzxButton tooltip="Archive" icon={faArchive} compact={true} intent={VisualIntent.WARNING} />,
                    <RzxButton tooltip="Delete" icon={faTrashCan} compact={true} intent={VisualIntent.DANGER} />,
                    <RzxButton tooltip="Settings" compact={true} icon={faGear} />
                ]}
            />
        </>
    );
}
