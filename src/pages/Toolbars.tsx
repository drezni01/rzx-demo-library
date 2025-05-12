import {faArchive, faCopy, faEdit, faGear, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {RzxButton} from '../buttons/RzxButton';
import {RzxToolbar, RzxToolbarSeparator} from '../toolbar/RzxToolbar';
import {VisualIntent} from '../application/RzxAppSpec';

export function Toolbars() {
    return (
        <>
            <RzxToolbar
                title="top level/main toolbar"
                leftItems={[
                    <RzxButton text="wide button" width={160} />,
                    <RzxButton text="Add" icon={faPlus} intent={VisualIntent.SUCCESS} outline={true} />,
                    <RzxButton text="Clone" icon={faCopy} intent={VisualIntent.NONE} outline={true} />,
                    <RzxButton text="Edit" icon={faEdit} intent={VisualIntent.PRIMARY} outline={true} />,
                    <RzxButton text="Archive" icon={faArchive} intent={VisualIntent.WARNING} outline={true} />,
                    <RzxButton text="Delete" icon={faTrashCan} intent={VisualIntent.DANGER} outline={true} />,
                    <RzxButton text="Settings" icon={faGear} outline={true} />,
                    <RzxToolbarSeparator />,
                    <RzxButton tooltip="Add" icon={faPlus} intent={VisualIntent.SUCCESS} outline={true} />,
                    <RzxButton tooltip="Clone" icon={faCopy} intent={VisualIntent.NONE} outline={true} />,
                    <RzxButton tooltip="Edit" icon={faEdit} intent={VisualIntent.PRIMARY} outline={true} />,
                    <RzxButton tooltip="Archive" icon={faArchive} intent={VisualIntent.WARNING} outline={true} />,
                    <RzxButton tooltip="Delete" icon={faTrashCan} intent={VisualIntent.DANGER} outline={true} />,
                    <RzxButton tooltip="Settings" icon={faGear} outline={true} />
                ]}
            />
            <RzxToolbar
                title="compact/sub section toolbar"
                compact={true}
                leftItems={[
                    <RzxButton text="wide button" compact={true} width={130} />,
                    <RzxButton text="Add" icon={faPlus} compact={true} intent={VisualIntent.SUCCESS} />,
                    <RzxButton text="Clone" icon={faCopy} compact={true} intent={VisualIntent.NONE} />,
                    <RzxButton text="Edit" icon={faEdit} compact={true} intent={VisualIntent.PRIMARY} />,
                    <RzxButton text="Archive" icon={faArchive} compact={true} intent={VisualIntent.WARNING} />,
                    <RzxButton text="Delete" icon={faTrashCan} compact={true} intent={VisualIntent.DANGER} />,
                    <RzxButton text="Settings" compact={true} icon={faGear} />
                ]}
                rightItems={[
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
