const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"></input>
                <button type="submit" className="border border-black p-2 m-2 bg-gray-100 rounded-lg"></button>
            </form>
        </div>
    )
}

export default Contact