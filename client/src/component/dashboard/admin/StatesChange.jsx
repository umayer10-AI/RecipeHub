"use client"
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const StatesChange = ({user}) => {

    console.log(user)

    const handleBlockToggle = async (id) => {
        try {
            const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/users/block/${id}`,
            {
                method: "PATCH",
            }
            );

            const data = await res.json();
            console.log(data)

            if(data.modifiedCount > 0) {
                toast.success('State Change')
                // refetch()
                redirect('/dashboard/admin/manage-user')
            }
        } catch (error) {
            console.log(error);
        }
        };
    
    return (
            <td className="px-6 py-4">
                    <button onClick={() => handleBlockToggle(user._id)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium ${
                        user.isBlock
                            ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                            : "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                        }`}
                    >
                        {user.isBlock ? "Active" : "Block"}
                    </button>
                </td>
    );
};

export default StatesChange;