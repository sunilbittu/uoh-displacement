'use client';
import { useState, useEffect } from 'react';

interface RegisteredUser {
    name: string;
    designation: string;
    paperTitle: string;
    participationMode: string;
    email: string;
    receiptUrl: string;
}

export default function RegisteredUsers() {
    const [users, setUsers] = useState<RegisteredUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [sortField, setSortField] = useState<keyof RegisteredUser>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/registered-users');
            const data = await response.json();
            if (response.ok) {
                setUsers(data.users);
            } else {
                setError(data.message || 'Failed to fetch users');
            }
        } catch (error) {
            setError('An error occurred while fetching users');
        } finally {
            setLoading(false);
        }
    };

    const handleSort = (field: keyof RegisteredUser) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const sortedUsers = [...users].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a[sortField] > b[sortField] ? 1 : -1;
        }
        return a[sortField] < b[sortField] ? 1 : -1;
    });

    const filteredUsers = sortedUsers.filter((user) =>
        Object.values(user).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())),
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]" data-oid="vgnsa0n">
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"
                    data-oid="i94e.nb"
                ></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4" data-oid=".oeyjfb">
                <p data-oid="6tca6g9">{error}</p>
            </div>
        );
    }

    return (
        <section className="py-20 bg-yellow-50" data-oid="pzoob8i">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".5bl6gr">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="j5it96b"
                >
                    Registered Users
                </h2>

                <div className="mb-4" data-oid=":cv5gh4">
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        data-oid="a:m19--"
                    />
                </div>

                <div className="bg-white rounded-lg shadow overflow-x-auto" data-oid="z7bxig:">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="lk59cwc">
                        <thead className="bg-gray-50" data-oid="fqvk.9_">
                            <tr data-oid="1s.iup2">
                                {[
                                    'name',
                                    'designation',
                                    'paperTitle',
                                    'participationMode',
                                    'email',
                                    'receiptUrl',
                                ].map((field) => (
                                    <th
                                        key={field}
                                        onClick={() => handleSort(field as keyof RegisteredUser)}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                                        data-oid="508857h"
                                    >
                                        {field.charAt(0).toUpperCase() +
                                            field.slice(1).replace(/([A-Z])/g, ' $1')}
                                        {sortField === field && (
                                            <span className="ml-2" data-oid="tx1lyp3">
                                                {sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="gjm3hfv">
                            {filteredUsers.map((user, index) => (
                                <tr key={index} className="hover:bg-yellow-50" data-oid="f0acav6">
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="h9uk-i1"
                                    >
                                        {user.name}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="2.lt.98"
                                    >
                                        {user.designation}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="kvfl2e."
                                    >
                                        {user.paperTitle}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="w8-woxw"
                                    >
                                        {user.participationMode}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="_.fsby-"
                                    >
                                        {user.email}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="fmgjfs9"
                                    >
                                        <button
                                            onClick={() =>
                                                window.open(
                                                    user.receiptUrl,
                                                    '_blank',
                                                    'noopener,noreferrer',
                                                )
                                            }
                                            className="text-blue-600 hover:text-blue-800 underline focus:outline-none"
                                            data-oid="s:3olcd"
                                        >
                                            View Receipt
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
