import {faGear} from '@fortawesome/free-solid-svg-icons';
import {RzxButton} from '../buttons/RzxButton';
import {RzxToolbar} from '../toolbar/RzxToolbar';

export function Positions() {
    return (
        <>
            <RzxToolbar
                title="test"
                items={[<RzxButton text="wide button" width={160} />, <RzxButton text="Settings" icon={faGear} />]}
            />
            <div>Positions</div>
        </>
    );
}
