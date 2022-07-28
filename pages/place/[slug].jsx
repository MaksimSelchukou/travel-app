import React from 'react';
import {useRouter} from "next/router";
import Layout from "../../app/components/common/Layout";

const Place = () => {
    const router = useRouter()
    return (
        // <div>
        //     Place
        //     {router.query.slug}
        // </div>
    <Layout >Place {router.query.slug}</Layout>
    );
};

export default Place;