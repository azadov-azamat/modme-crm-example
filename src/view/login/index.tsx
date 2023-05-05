import {Button, Card, Input, Typography,} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

function LoginPage(): JSX.Element {

    const navigate = useNavigate()

    return (
        <div className={'w-full h-screen flex justify-center items-center'}>
            <Card color="transparent" shadow={false} className={'shadow shadow-xl p-4 border'}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    mod-me example
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input name={'_username'} size="lg" label="Username"/>
                        <Input name={'_password'} type="password" size="lg" label="Password"/>
                    </div>
                    <Button className="mt-6" fullWidth onClick={()=> navigate("/dashboard")}>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;