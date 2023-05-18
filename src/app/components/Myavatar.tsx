/* eslint-disable @next/next/no-img-element */
interface AvatarType {
    person: Person;
    size: number;
}

interface Person {
    name: string;
    imageId: string;
}

export default function Myavatar({ person, size }: AvatarType) {
    const name = person.name;
    const avatar = `https://live-production.wcms.abc-cdn.net.au/${person.imageId}?impolicy=wcms_crop_resize&cropH=540&cropW=810&xPos=0&yPos=57&width=862&height=575`;
    return (
        <>
            <h1 className="text-5xl text-center text-blue-500">{name}</h1>
            <img className="rounded-full h-[500px] w-[500px] shadow-lg hover:shadow-2xl hover:shadow-pink-400 shadow-pink-400/60 border-2 border-pink-400/60" src={avatar} alt={name} />
        </>
    );
}