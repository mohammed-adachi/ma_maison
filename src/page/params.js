import React from "react";
import { useParams } from "react-router-dom";

export default function Params() {
    const params = useParams();

    return (
        <div>
           {params}
        </div>
    );
}
