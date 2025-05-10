import rzxAppModel from '../application/RzxAppModel';
import {RzxButton} from '../buttons/RzxButton';
import {RzxToolbar} from '../toolbar/RzxToolbar';

export function Dialogs() {
    return (
        <>
            <RzxToolbar
                title="Modal feedback dialogs"
                items={[
                    <RzxButton
                        text="OK"
                        onClick={() => {
                            //rzxAppModel.commonDialog.open({message: 'test'});
                            rzxAppModel.info('test');
                        }}
                    />
                ]}
            />
        </>
    );
}
