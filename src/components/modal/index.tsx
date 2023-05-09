import {ModalInterfaceProps} from "../../interface/modal/modal.interface";
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";

interface ModalComponentProps extends ModalInterfaceProps{
    header: string;
    body: string;
}
export default function ModalComponent({toggle, open, header, body}: ModalComponentProps) {
    return (
            <Dialog open={open} handler={toggle}>
                <DialogHeader>{header}</DialogHeader>
                <DialogBody divider>
                    {body}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={toggle}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={toggle}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
    );
}