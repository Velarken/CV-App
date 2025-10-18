export function Customize({ isShow, onColChange }) {
    return (
        <div 
            className="customize"
            style={{display: isShow ? undefined : 'none'}}
        >
            <div>
                <ResumeColsEdit onColChange={onColChange} />
            </div>
            <div>
                <AccentColorEdit />
            </div>
            <div>
                <FontEdit />
            </div>
        </div>
    )
}