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
            <div className="flex justify-center items-center min-h-[400px]" data-oid="ue2wfg.">
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"
                    data-oid="4n8t-.y"
                ></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4" data-oid="b.04et5">
                <p data-oid="o9unnki">{error}</p>
            </div>
        );
    }

    return (
        <section className="py-20 bg-yellow-50" data-oid="mf4177r">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1s:afl-">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid=".9z.15z"
                >
                    Registered Users
                </h2>

                <div className="mb-4" data-oid="7u-ex1e">
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        data-oid="_9e447d"
                    />
                </div>

                <div className="bg-white rounded-lg shadow overflow-x-auto" data-oid="8xnv.qe">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="egvbwn6">
                        <thead className="bg-gray-50" data-oid="gsgi2vw">
                            <tr data-oid="j4jmn1n">
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
                                        data-oid="x.80ded"
                                    >
                                        {field.charAt(0).toUpperCase() +
                                            field.slice(1).replace(/([A-Z])/g, ' $1')}
                                        {sortField === field && (
                                            <span className="ml-2" data-oid="ppzoo0s">
                                                {sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="3xrb2rg">
                            {filteredUsers.map((user, index) => (
                                <tr key={index} className="hover:bg-yellow-50" data-oid="w7dppgx">
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="8l6:6gn"
                                    >
                                        {user.name}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="hg096e5"
                                    >
                                        {user.designation}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="v5b_t6u"
                                    >
                                        {user.paperTitle}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid=":euks7."
                                    >
                                        {user.participationMode}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="p_lg_h_"
                                    >
                                        {user.email}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="9wuprr9"
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
                                            data-oid="vz0.grt"
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
