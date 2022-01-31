import React, { FC } from "react";
import { observer } from "mobx-react-lite";

interface Props {
    content: string
}

const Heading: FC<Props> = observer(({content}: Props) => {
    return (
        <h2 className = "mt-5"> {content} </h2>
    );
});

export default Heading;