const people = [
    'Rana Muhammad Rabees Hussain',
    'Rana Muhammad Reebaal Hussain',
    'Rana Amir Hussain Anjum',
    'Adeema Amir'
];

export default function List() {
    const listItems = people.map(person =>
        <li key="">{person}</li>
    );
    return (
        <>
            <h1 className="text-5xl text-center text-purple-500">
                This Is Peoples List</h1>
            <ul>{listItems}</ul>
        </>
    )
}
