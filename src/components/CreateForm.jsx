export function CreateForm({ onClick, buttonText }) {

    return (
        <button>
            <h4 className="create-form" onClick={onClick}>
                <i className='fa-solid fa-plus' />
                {buttonText}
            </h4>
        </button>
    );
}
export default CreateForm