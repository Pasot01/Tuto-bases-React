export default function TechnoAdd(props) {
    // props (objet) -> destructuré pour récupérer la propriétée handleAddTechno
    const { handleAddTechno } = props;

    const techno = {
        name: 'React',
        category: 'front',
        description: 'Learn React'
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno);
    }

    return (
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="techno-name">Name</label>
                    <br/>
                    <input type="text" name="techno-name" id="techno-name" />
                    <br/>
                    <label htmlFor="techno-category">Category</label>
                    <select name="techno-category" id="techno-category">
                        <option value="">Select a category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="other">Other</option>
                    </select>
                    <br/>
                    <label htmlFor="techno-description">Description</label>
                    <br/>
                    <textarea name="techno-description" id="techno-description" cols="30" rows="10"></textarea>
                    <br/>
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    )
}