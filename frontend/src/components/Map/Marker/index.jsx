import React from 'react';

const pinStyle = {
    cursor: 'pointer',
};

function Pin() {
    return (
        <img src="../../../../assets/Marker.svg" height="20" alt="Marker" style={pinStyle}/>
    );
}
  
export default React.memo(Pin);