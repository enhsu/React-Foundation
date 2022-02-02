import React, { forwardRef } from 'react';


const ForwardRefChild = forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} type="text" />
        </div>
    );
})
 
export default ForwardRefChild;