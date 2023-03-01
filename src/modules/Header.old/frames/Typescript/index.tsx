import { FC, useState } from "react";

interface IUser{
    name: string,
}
interface ITypescript{
    title: string,
};
const Typescript: FC<ITypescript> = ({title}: ITypescript): JSX.Element => {
    const [user, setUser] = useState<IUser | null>(null);
    // https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
    return(
        <div>{title}</div>
    );
}

export default Typescript;