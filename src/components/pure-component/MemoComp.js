import { memo } from "react";

const MemoComp = ({ name }) => {
    console.log('Memo component render')
    return (
        <div>
            Memo Component {name}
        </div>
    );
}
 
export default memo(MemoComp);