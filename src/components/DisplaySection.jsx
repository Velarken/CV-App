import React from 'react'

function DisplaySection({ array, InfoComponent, title }) {
    return (
        <React.Fragment>
            { // Show resume header if items are visible
                !array.every((obj) => obj.isHidden) && (
                    <h3 className="headerText">{title}</h3>
                )
            }
            {array.map(
                (info) => !info.isHidden && <InfoComponent info={info} key={info.id} />
            )}
        </React.Fragment>
    )
}