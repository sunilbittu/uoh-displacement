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
            <div className="flex justify-center items-center min-h-[400px]" data-oid="v17-wo4">
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"
                    data-oid="hqggvq5"
                ></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4" data-oid="_zp4cf0">
                <p data-oid="q88cs-r">{error}</p>
            </div>
        );
    }

    return (
        <section className="py-20 bg-yellow-50" data-oid="ff5up6z">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8vi.4hz">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="rnsu5w4"
                >
                    Registered Users
                </h2>

                <div className="mb-4" data-oid="78wd2.9">
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        data-oid="bbu52br"
                    />
                </div>

                <div className="bg-white rounded-lg shadow overflow-x-auto" data-oid="l3b4i9z">
                    <table className="min-w-full divide-y divide-gray-200" data-oid="afr6m-n">
                        <thead className="bg-gray-50" data-oid="cm6u5xn">
                            <tr data-oid="s6.05fp">
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
                                        data-oid="51x79ix"
                                    >
                                        {field.charAt(0).toUpperCase() +
                                            field.slice(1).replace(/([A-Z])/g, ' $1')}
                                        {sortField === field && (
                                            <span className="ml-2" data-oid="r_wrqlc">
                                                {sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200" data-oid="f.pdg5o">
                            {filteredUsers.map((user, index) => (
                                <tr key={index} className="hover:bg-yellow-50" data-oid="vm8y6av">
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="zb4s8v-"
                                    >
                                        {user.name}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="vm_j58w"
                                    >
                                        {user.designation}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="y.6z1r2"
                                    >
                                        {user.paperTitle}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="24a-8rv"
                                    >
                                        {user.participationMode}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="66avb5o"
                                    >
                                        {user.email}
                                    </td>
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        data-oid="igs.5bd"
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
                                            data-oid="6uypzop"
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
