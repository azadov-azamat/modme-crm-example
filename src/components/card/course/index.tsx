import imgBook from "../../../assets/books.png"
import {Typography} from "@material-tailwind/react";

interface CourseCardProps {
    title: string;
    sum: string;
    key: number;
}
export default function CourseCard({sum, key, title}: CourseCardProps): JSX.Element {
    return (
        <div key={key} className={'shadow-lg w-64 h-72 border rounded-lg'}>
            <div className="image w-full h-2/3 rounded-t-lg flex justify-center items-center bg-green-300">
                <img src={imgBook} alt="" width={150}/>
            </div>
          <div className="p-3">
              <Typography
                  as="h4"
                  variant="large"
                  className="font-bold"
                  color={"inherit"}
              >
                  {title}
              </Typography>
              <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={"inherit"}
              >
                  {sum} UZS
              </Typography>
          </div>
        </div>
    );
}