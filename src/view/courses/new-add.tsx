import SidebarModal from "../../components/modal/sidebar";
import {Button, Input, Option, Radio, Select, Textarea} from "@material-tailwind/react";
import {ModalInterfaceProps} from "../../interface/modal/modal.interface";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {useFormik} from "formik";
import {coursesProps} from "../../interface/redux/variable.interface";
import {addNewCourse} from "../../redux/reducers/variable";

export default function NewCourseAdd({toggle, open}: ModalInterfaceProps) {

    const dispatch = useDispatch()
    const {courses} = useSelector((state: RootState) => state.variables)

    const formik = useFormik<coursesProps>({
        initialValues: {
            id: 0,
            name: "",
            price: "",
            type: "online",
            parentId: ''
        },
        enableReinitialize: true,
        onSubmit: (val, {resetForm}) => {
            dispatch(addNewCourse(val))
            resetForm({values: undefined})
            // @ts-ignore
            toggle()
        }
    })


    return (
        <SidebarModal toggle={toggle} open={open} title={"Yangi kurs qo'shish"}>
            <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <Input name={'name'} size="lg" label="Nomi" onChange={formik.handleChange}/>
                <div className="flex ">
                    <Radio id="online" name="type" label="Online" defaultChecked
                           onChange={(e) => formik.setFieldValue("type", e.target.id)}/>
                    <Radio id="offline" name="type" label="Offline"
                           onChange={(e) => formik.setFieldValue("type", e.target.id)}/>
                    <Radio id="video-course" name="type" label="Video Kurs"
                           onChange={(e) => formik.setFieldValue("type", e.target.id)}/>
                </div>
                <Select variant="outlined" label="Kursni tanlang" onChange={(e) => formik.setFieldValue("parentId", e)}>
                    {
                        courses.map(({id, name}) =>
                            <Option key={id} value={id.toString()}>{name}</Option>
                        )
                    }
                </Select>
                <Input name={'price'} size="lg" label="Narx" onChange={formik.handleChange}/>
                <Textarea label="Tavsif" name={"comment"} onChange={formik.handleChange}/>
                <div className="btn w-full flex justify-start">
                    <Button type={"submit"}>Yuborish</Button>
                </div>
            </form>
        </SidebarModal>
    );
}