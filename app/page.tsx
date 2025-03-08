'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll to section
    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle scroll events to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'home',
                'about',
                'call-for-papers',
                'submission',
                'registration',
                'contact',
            ];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="v--qm64">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="j_s1u4x">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="b0o2nqn">
                    <div className="flex justify-between h-16" data-oid="1t4a6rv">
                        <div className="flex items-center" data-oid="ke1::cg">
                            <div className="text-xl font-bold text-indigo-800" data-oid="sex:cac">
                                DISPLACEMENT 
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="oo:y3d_">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="oycn5od"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="w8i1m1d"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="hu7.agr"
                            >
                                Call for Papers
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="c_bkqy8"
                            >
                                Submission Guidelines
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="oeq1g.q"
                            >
                                Registration & Fees
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="vbaok70"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="dnb8xpf">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
                                data-oid="673.07x"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="emnu-11"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="o_ypc0i"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="_fmk_9-"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg" data-oid="8taf_:y">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="_bjie2z">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="6fw72xc"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="mox.evp"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid=".4ofpxi"
                            >
                                Call for Papers
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="p-ehw9b"
                            >
                                Submission Guidelines
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="u-i.6fi"
                            >
                                Registration & Fees
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="2n_kmg-"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <div className="pt-16" data-oid="r6a:0op">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white"
                    data-oid="ikfdo6o"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="yr827_5"
                    >
                        <div className="text-center" data-oid="8ec2u34">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-indigo-900 mb-4"
                                data-oid="3h_f6ql"
                            >
                                DISPLACEMENT Conference 2025
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="gze3rez"
                            >
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="paw7o.e"
                                >
                                    University of Hyderabad
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="-c5fia9"
                                >
                                    Dartmouth College
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="n90.kvd"
                                >
                                    UCL
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="si6o-ad"
                            >
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="g027:zp"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                    data-oid="86x5sre"
                                >
                                    Register Now
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                                    data-oid="n4rrs06"
                                >
                                    Submit Paper
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="nt3zz5h"
                            >
                                <p className="text-gray-700 font-medium" data-oid="ve1ba:9">
                                    Conference Dates: March 15-17, 2025
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="gpp_v8-">
                                    Location: University of Hyderabad, India
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="4hjqqcy">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="o_.uatk">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="3an70t6"
                        >
                            About the Conference
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="jnwfn.z">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="twz1t33"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="_wi:26r"
                                >
                                    University of Hyderabad
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="kbil6s0">
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="yd52o.x"
                                >
                                    <span className="text-gray-500" data-oid="emwd_7l">
                                        University Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="9pw3b_f"
                                >
                                    Learn more →
                                </a>
                            </div>

                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="fi-9g-p"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="w9oxrzk"
                                >
                                    Dartmouth College
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="_c_p3dw">
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="nxof9lv"
                                >
                                    <span className="text-gray-500" data-oid="ortx:m_">
                                        College Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="7fx0h4d"
                                >
                                    Learn more →
                                </a>
                            </div>

                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="f067eki"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="t1ci4ps"
                                >
                                    University College London (UCL)
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="_fciu9h">
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="rygaeke"
                                >
                                    <span className="text-gray-500" data-oid="fjpkv:f">
                                        UCL Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="wcilyct"
                                >
                                    Learn more →
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="0eepnkm">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="ktc7oxg"
                            >
                                About DISPLACEMENT 2025
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="4kj-xfm">
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and psychological.
                            </p>
                            <p className="text-gray-700" data-oid="_b-8pwb">
                                This collaborative effort between the University of Hyderabad,
                                Dartmouth College, and University College London aims to foster
                                interdisciplinary dialogue and develop innovative approaches to
                                understanding and addressing displacement in contemporary society.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call for Papers Section */}
                <section id="call-for-papers" className="py-20 bg-indigo-50" data-oid="50_s0-l">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="16v35cx">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="x.zh9:1"
                        >
                            Call for Papers
                        </h2>

                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="bf47ual">
                            <p className="text-gray-700 mb-6" data-oid=":m1p8_p">
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited to:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="ynh:kif">
                                <div data-oid="modhncr">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="hk7edy6"
                                    >
                                        Thematic Areas
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="n02gu:-"
                                    >
                                        <li data-oid="kvomu4y">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="uwsqt8b">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="4it:7ps">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="tceq9et">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="shb-owo">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="iip46l4">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="_u2ahc2">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid=".dqcr25">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>

                                <div data-oid="y7h6q4n">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="kk:p9d."
                                    >
                                        Key Dates
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid=":b52gh6">
                                        <li className="flex items-start" data-oid="7:i.v2c">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="74v.efi"
                                            >
                                                August 15, 2024:
                                            </span>
                                            <span data-oid="i8gpbot">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="h3:bbzp">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="k3iecs-"
                                            >
                                                October 1, 2024:
                                            </span>
                                            <span data-oid="7tzwwar">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="5eyv6fn">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="6kf6w._"
                                            >
                                                December 15, 2024:
                                            </span>
                                            <span data-oid="sllld1j">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="5kk:h.v">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="fk73l50"
                                            >
                                                February 1, 2025:
                                            </span>
                                            <span data-oid="0p.nz86">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="63wlwcs">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="5rkaxbo"
                                            >
                                                March 15-17, 2025:
                                            </span>
                                            <span data-oid="yy6a88b">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-indigo-50 p-4 rounded-md mb-6" data-oid="-5rho-w">
                                <h3
                                    className="text-lg font-semibold text-indigo-800 mb-2"
                                    data-oid="ylfls5x"
                                >
                                    Special Sessions
                                </h3>
                                <p className="text-gray-700" data-oid="2i3s38i">
                                    The conference will feature special sessions on "Digital
                                    Displacement in the Age of AI" and "Climate Refugees: Policy
                                    Challenges and Responses." Submissions specifically addressing
                                    these themes are encouraged.
                                </p>
                            </div>

                            <button
                                onClick={() => scrollToSection('submission')}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                data-oid="r5ffl6k"
                            >
                                View Submission Guidelines
                            </button>
                        </div>
                    </div>
                </section>

                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="psvilnu">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ic49blu">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="zgctr70"
                        >
                            Submission Guidelines
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8" data-oid=":br111p">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="dpcgur3">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="x2vwc4h"
                                >
                                    Abstract Submission
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="p4ne1i2">
                                    <li className="flex items-start" data-oid="dqltgyh">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="don:3kj"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="sb91ui1"
                                            />
                                        </svg>
                                        <span data-oid="xl:q64u">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="qz.0n7d">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="s.f_kje"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="-fl6z3q"
                                            />
                                        </svg>
                                        <span data-oid="kw.sew6">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="xwye9gw">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".t594-k"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="dp5:dwq"
                                            />
                                        </svg>
                                        <span data-oid="rxku3_d">
                                            Clearly state the research question, methodology, and
                                            preliminary findings.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":8094w1">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="wrodk84"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="1h69bat"
                                            />
                                        </svg>
                                        <span data-oid="-xzwvjr">
                                            Submit in PDF format through the conference submission
                                            portal.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="4-h1.xe">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="4fm.5s:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="-.zc9qk"
                                            />
                                        </svg>
                                        <span data-oid="r5q:zce">
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="fx:kime">
                                    <button
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="gi1cxru"
                                    >
                                        Submit Abstract
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="7.ql9y.">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="1:hrt:e"
                                >
                                    Full Paper Requirements
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="-rcmjgc">
                                    <li className="flex items-start" data-oid=":bh6.pi">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="5qykh:c"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ax_.hzk"
                                            />
                                        </svg>
                                        <span data-oid="658k:dh">
                                            Papers should be 6,000-8,000 words, including
                                            references.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="twh2yy2">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="1t1fyy1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="k7yyl_c"
                                            />
                                        </svg>
                                        <span data-oid="ccx-uie">
                                            Use Times New Roman, 12-point font, double-spaced.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="qzbgnwh">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="awbq2t8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ynagi5m"
                                            />
                                        </svg>
                                        <span data-oid="w4m9hjm">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="9r_l5o7">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="zvkxav9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=".cc81c6"
                                            />
                                        </svg>
                                        <span data-oid="q.8olcz">
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="t19jw4s">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="1t0_tby"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="jzkrxot"
                                            />
                                        </svg>
                                        <span data-oid="dd51wgb">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="ncd2nm.">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="8jt7hg2"
                                    >
                                        Download Paper Template →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 bg-indigo-50 p-6 rounded-lg" data-oid="6wrfq:8">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="c5dlpm5"
                            >
                                Review Process
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="hg:_ou5">
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="xm0rn--"
                            >
                                <li data-oid="n4fu9yd">Relevance to the conference theme</li>
                                <li data-oid="u3r93xy">Originality and innovation</li>
                                <li data-oid="y.1jwqp">Theoretical foundation</li>
                                <li data-oid="r:kvy74">Methodological rigor</li>
                                <li data-oid="2o:l6dg">Clarity of presentation</li>
                                <li data-oid="5e293cs">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="9sytjrw">
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-indigo-50" data-oid="c_trf3f">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="qz3w.bh">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="2kn2g5k"
                        >
                            Registration & Fees
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="m7:8cg7">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="peqk6tr"
                            >
                                <div className="text-center mb-4" data-oid="7w9ho.l">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="-ay98z1"
                                    >
                                        Early Bird Registration
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="xq7pvvt">
                                        (Until February 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="s_kdkp5">
                                    <div className="text-center" data-oid="fcy6sid">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="7tnd5gr"
                                        >
                                            $250
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="d8jkq7z"
                                        >
                                            Regular Participants
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="jxvfrct">
                                    <li className="flex items-start" data-oid="qsu:qcs">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xkn4.kc"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="jomn6_k"
                                            />
                                        </svg>
                                        <span data-oid="ijnrdr6">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="fs8j_tn">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="klh0iw7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=".5hmpia"
                                            />
                                        </svg>
                                        <span data-oid="4q2cvx_">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="28onvl3">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="t996ssv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=".i1jtvz"
                                            />
                                        </svg>
                                        <span data-oid="onnm304">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="0.fjtjt">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="sv3i29."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ar-6r68"
                                            />
                                        </svg>
                                        <span data-oid="285lk8p">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="prk8cfk">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="y611poa"
                                    >
                                        Student Rate: $150
                                    </p>
                                </div>
                            </div>

                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-500 relative"
                                data-oid="rqr1urc"
                            >
                                <div
                                    className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg"
                                    data-oid="p1rb:f-"
                                >
                                    Recommended
                                </div>
                                <div className="text-center mb-4" data-oid="634_8ry">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="7oln95t"
                                    >
                                        Standard Registration
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="b3:wzkx">
                                        (February 2 - March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="rty0qtx">
                                    <div className="text-center" data-oid="ji1t5i_">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="yoziwe0"
                                        >
                                            $300
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="vdcf4yy"
                                        >
                                            Regular Participants
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="yxcojuc">
                                    <li className="flex items-start" data-oid="gn23srh">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="eobgzvt"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="qiix8rx"
                                            />
                                        </svg>
                                        <span data-oid="tavw30l">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="s:89yjc">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="o_3us.y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="s-2.hpd"
                                            />
                                        </svg>
                                        <span data-oid="d6veutf">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="oinl.z:">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="7n90ltq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="itzvq4b"
                                            />
                                        </svg>
                                        <span data-oid="2odo.ak">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="o2b14pf">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="0e8cx0j"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="1.m1izr"
                                            />
                                        </svg>
                                        <span data-oid="_py.6k2">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="jzi7l0v">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="7k:ab:n"
                                    >
                                        Student Rate: $200
                                    </p>
                                </div>
                            </div>

                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="7u0xiho"
                            >
                                <div className="text-center mb-4" data-oid="o:vl-p4">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="k7md_d_"
                                    >
                                        Late Registration
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="-7lrl1i">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="939tosx">
                                    <div className="text-center" data-oid="h0-k_t6">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="o_j3ln_"
                                        >
                                            $350
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="p2cv50b"
                                        >
                                            Regular Participants
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="y-5ngim">
                                    <li className="flex items-start" data-oid="2w5b6.g">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="gljy5h3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="40maqjl"
                                            />
                                        </svg>
                                        <span data-oid="y94w51-">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="x9jq2zm">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="v_d5uhn"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="2__g5m1"
                                            />
                                        </svg>
                                        <span data-oid="cqp4jbc">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="64h8_7m">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="oxny4:6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="li_9wra"
                                            />
                                        </svg>
                                        <span data-oid="a-y5749">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="re17efl">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="bzxky4g"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="g:huoj8"
                                            />
                                        </svg>
                                        <span data-oid="ew0bnj5">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="xir9qh4">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="sppb7ki"
                                    >
                                        Student Rate: $250
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="gb-h93.">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="_::8f.s"
                            >
                                Additional Options
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="o17un0f">
                                <div data-oid="gn7bs2b">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="f7g7fnh"
                                    >
                                        Conference Dinner
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="qd3zmab">
                                        $50 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="2u99:x8">
                                        Join us for a special dinner featuring local cuisine and
                                        cultural performances.
                                    </p>
                                </div>
                                <div data-oid="rweu-lo">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="8q:4uob"
                                    >
                                        Cultural Tour
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="0b1ysls">
                                        $40 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="91u86w8">
                                        A guided tour of historical and cultural sites in Hyderabad
                                        (March 18, 2025).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center" data-oid="llu1w7c">
                            <button
                                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                data-oid="u3puodv"
                            >
                                Register Now
                            </button>
                            <p className="mt-4 text-gray-600" data-oid="rwz5cla">
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="1gxqrel"
                                >
                                    registration@displacement2025.org
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="gdj0ecp">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="qvyhc4.">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="x_gw-6y"
                        >
                            Contact Us
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8" data-oid="x7_v5e-">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="7wgs08.">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="q9l5pbg"
                                >
                                    Conference Organizers
                                </h3>

                                <div className="space-y-6" data-oid="ll9xx3r">
                                    <div data-oid="nuidb.d">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="90l2n5x"
                                        >
                                            Conference Chair
                                        </h4>
                                        <p className="text-gray-700" data-oid="7n.zwc:">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="kpqag_a">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="tnpo8-e"
                                        >
                                            chair@displacement2025.org
                                        </a>
                                    </div>

                                    <div data-oid=":gyxeqe">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="3rr8kb."
                                        >
                                            Program Committee
                                        </h4>
                                        <p className="text-gray-700" data-oid="srsqdke">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="rv:n0if">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="5lwn9a:"
                                        >
                                            program@displacement2025.org
                                        </a>
                                    </div>

                                    <div data-oid="1ird-q6">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="elowrw_"
                                        >
                                            Local Arrangements
                                        </h4>
                                        <p className="text-gray-700" data-oid="etfuv0x">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="lmw_ajf">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="yat-098"
                                        >
                                            local@displacement2025.org
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="ps2gi-5">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="amnfmuy"
                                >
                                    Get in Touch
                                </h3>

                                <form className="space-y-4" data-oid="j:v8skp">
                                    <div data-oid="v.-pp4r">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="goqdh_n"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                            data-oid="50kplwz"
                                        />
                                    </div>

                                    <div data-oid="y5us53c">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="55tnt0u"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="u7_iqm."
                                        />
                                    </div>

                                    <div data-oid="lnu55i6">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="x5l4v97"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="..sdzi5"
                                        />
                                    </div>

                                    <div data-oid="t8wl89l">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="ov6riz7"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="w5--3tf"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="fllckpv"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="ekvh6xo">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="gooq0km"
                            >
                                Conference Venue
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="80h7..d">
                                <div data-oid="2yeg2zb">
                                    <p className="text-gray-700 mb-2" data-oid="jbnv9wz">
                                        <strong data-oid="p8ewgu:">University of Hyderabad</strong>
                                        <br data-oid="bxv6919" />
                                        Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="w25ejwb" />
                                        Hyderabad, Telangana 500046
                                        <br data-oid=".ybul9m" />
                                        India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="f88:1mj">
                                        <strong data-oid="g08r:hd">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="cb6zrk_">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="9xmvf47"
                                        >
                                            Accommodation
                                        </h4>
                                        <p className="text-gray-700" data-oid="h8dyno2">
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="7:hxtig"
                                            >
                                                accommodation@displacement2025.org
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="_2jjlxi"
                                >
                                    <span className="text-gray-500" data-oid="af.rxwy">
                                        Map will be displayed here
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-indigo-900 text-white py-12" data-oid="p1:n1jt">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="qnsfvdg">
                        <div className="grid md:grid-cols-4 gap-8" data-oid="5w05_hl">
                            <div data-oid="fho1_n5">
                                <h3 className="text-xl font-semibold mb-4" data-oid="j9x4:fa">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-indigo-200" data-oid="mo.f7cy">
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.
                                </p>
                            </div>

                            <div data-oid="r.15o8z">
                                <h3 className="text-lg font-semibold mb-4" data-oid="epsqh3n">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="5n.eolb">
                                    <li data-oid="j96kwe9">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="3dsm85-"
                                        >
                                            Home
                                        </button>
                                    </li>
                                    <li data-oid="8vwhvr0">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="7rtxfp0"
                                        >
                                            About
                                        </button>
                                    </li>
                                    <li data-oid="bsdm92k">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="sid_u8l"
                                        >
                                            Call for Papers
                                        </button>
                                    </li>
                                    <li data-oid="kt_i.rw">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="k1s9a7a"
                                        >
                                            Submission Guidelines
                                        </button>
                                    </li>
                                    <li data-oid="0fcugtd">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="qm74.ug"
                                        >
                                            Registration & Fees
                                        </button>
                                    </li>
                                    <li data-oid="y7q:vql">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="uomp5m8"
                                        >
                                            Contact
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div data-oid="fsvwv20">
                                <h3 className="text-lg font-semibold mb-4" data-oid="ex54vup">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="0392xlm">
                                    <li className="flex items-start" data-oid="bmu0eg7">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="svikgaw"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="39xjv3q"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:info@displacement2025.org"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="dd93ekl"
                                        >
                                            info@displacement2025.org
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid=":1jo05x">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9dmslyt"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="1-v-jl9"
                                            />
                                        </svg>
                                        <span className="text-indigo-200" data-oid="vtlk31c">
                                            +91 40 2313 XXXX
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div data-oid="ixw8fia">
                                <h3 className="text-lg font-semibold mb-4" data-oid="7w38j:w">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4" data-oid="xwtx4:.">
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="u2lv_eq"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="v4avows"
                                        >
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                data-oid=":t_2a9e"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="e9t0nwa"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid=".64h8m2"
                                        >
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                data-oid="ognr:uq"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="suik70c"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="0f0oxkr"
                                        >
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                data-oid="oqrnmza"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm"
                            data-oid="tzw_3y:"
                        >
                            <p data-oid="hyw64ht">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="v3dn:.v">
                                A collaborative initiative by the University of Hyderabad, Dartmouth
                                College, and University College London.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
