import React, { FC } from "react";

interface Props {
    content: string
}

const Heading: FC<Props> = ({content}: Props) => {
    return (
        <h2 className = "mt-5"> {content} </h2>
    );
}

export default Heading;