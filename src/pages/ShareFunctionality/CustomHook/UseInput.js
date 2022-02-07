import useInput from "../../../components/share-functionality/custom-hook/useInput";

const UseInput = () => {
    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindLastname, resetLastname] = useInput('')

    const handleSubmit = (e) => {
        console.log('trigger form onSubmit event')
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }
    return (
        <div>
            <h3>useInput</h3>
            <p>Handle input state</p>
            <p>Click "Submit" button for result</p>
            <form onSubmit={handleSubmit} onReset={() => console.log('trigger form onReset event')}>
                <label htmlFor="firstname">First name</label>
                <input
                    id="firstname"
                    type="text"
                    {...bindFirstname}
                />
                <label htmlFor="lastname">Last name</label>
                <input
                    id="lastname"
                    type="text"
                    {...bindLastname}
                />
                <button type="button" onClick={() => console.log('just a button...')}>button type: button</button>
                <button type="reset">button type: reset</button>
                <button type="submit">Submit</button>
                <p>Note: &lt;button&gt; default type is "submit"</p>
            </form>
        </div>
    );
}
 
export default UseInput;