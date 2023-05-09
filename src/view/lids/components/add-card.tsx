import {useState} from 'react';
import {Button, Input} from "@material-tailwind/react";
interface AddCardProps {
    addCard: any
}
export default function AddCard({addCard}: AddCardProps) {

    const [title, setTitle] = useState("")

    return (
        <div className={"flex w-full p-5"}>

            <div className={"flex bg-white rounded-md shadow-md flex-row p-2"}>
                <Input
                    placeholder="Card Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Button
                    className={"ml-1 mt-2"}
                    onClick={() => {
                        addCard(title);
                        setTitle("");
                    }}
                >
                    Add Card
                </Button>
            </div>
        </div>
    );
}