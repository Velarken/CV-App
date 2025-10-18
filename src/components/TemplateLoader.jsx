export function TemplateLoader({ onTemplateLoad, onClear}) {
    
    return (
        <div className="template-loader">
            <button className="clear-resume" onClick={onClear}>
                <i className="fa-solid fa-trash"/>
                Clear Resume
            </button>{"  "}
            <button className="load-example" onClick={onTemplateLoad}>
                Load Example
            </button>
        </div>
    )
}
export default TemplateLoader