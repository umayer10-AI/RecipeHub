import AdminManageUser from '@/component/dashboard/admin/AdminManageUser';
import { countUsers } from '@/lib/api/admin/users';
import React from 'react';

const page = async () => {

    const userCnt = await countUsers()

    return (
        <div>
            <AdminManageUser users={userCnt}></AdminManageUser>
        </div>
    );
};

export default page;