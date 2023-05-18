function Item({ name, isPacked }: any) {
    return <li className="item">{isPacked ? name + " ✔" : name}</li>;
}

export default function PackingList() {
    return (
        <section>
            <h1 className="text-5xl text-center text-yellow-500">Our Developers</h1>
            <ul>
                <br /><br />
                <Item isPacked={true} name="Rabees Hussain" />
                <br />
                <Item isPacked={false} name="Reebaal Hussain" />
                <br />
                <Item isPacked={true} name="Adeema Amir" />
                <br /><br />
            </ul>
        </section>
    );
}
