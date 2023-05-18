import Profile from "./Profile";
import Myavatar from "./Myavatar";
import Mydate from "./Mydate";
import PackingList from "./Packinglist";
import List from "./List";
import Slide from "./Slide";

export default function Gallery() {
    return (
        <center>
            <Mydate /><br /><br />
            <h1 className="text-5xl text-center text-green-500">Amazing Ajoobe</h1>
            <div className="flex">
                <Profile />
                <Profile />
                <Profile />
            </div>
            <div>
                <Myavatar
                    size={100}
                    person={{
                        name: 'My Heros Ha Ha',
                        imageId: '3199c471b613527027929c6811073f8c'
                    }}
                />
            </div>
            <div>
                <PackingList />
            </div>
            <div>
                <List />
            </div>
            <div>
                <Slide />
            </div>
        </center>
    );
}
