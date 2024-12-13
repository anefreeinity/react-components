import Avatar from "./avatar/avatar";
import AImage from '../utils/A.jpg';

const AvatarHandler = () => {

    return (
        <>
            <Avatar src={AImage} alt={'avatar'} size={60}/>
        </>
        
    );
}

export default AvatarHandler;