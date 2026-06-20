import React from 'react';
import ReportsList from '../../../../../component/dashboard/admin/ReportsList';
import { reportsListings } from '@/lib/api/admin/users';

const page = async () => {

    const list = await reportsListings()
    console.log(list)

    return (
        <div>
            <ReportsList reports={list}></ReportsList>
        </div>
    );
};

export default page;