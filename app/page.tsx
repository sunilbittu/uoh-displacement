'use client';
import { useState, useEffect } from 'react';

type SectionId = 'home' | 'about' | 'call-for-papers' | 'submission' | 'registration' | 'contact';

export default function Page() {
    const [activeSection, setActiveSection] = useState<SectionId>('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll to section
    const scrollToSection = (sectionId: SectionId) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 64; // Height of the fixed navigation bar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    // Handle scroll events to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections: SectionId[] = [
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="-z9qmw_">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="s5hvwb8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ms3w3tu">
                    <div className="flex justify-between h-16" data-oid="pk2pvp_">
                        <div className="flex items-center" data-oid="7up480y">
                            <div className="flex items-center space-x-2" data-oid="e:qlxmo">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="ep6nnxb"
                                />

                                <div className="text-xl font-bold text-red-700" data-oid=".:p3_2p">
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="90on.-:">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="9xo_nh."
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="0v9v9vt"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="9uv.4-p"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="x_omx8v"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="p_ccu.j"
                            >
                                {' '}
                                Registration & Fees{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="s3z6oi6"
                            >
                                {' '}
                                Contact{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="wjyp-o4">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                                data-oid="quww34l"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="8857jfd"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="itmb:jb"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="atb4ueh"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid="k:v-6r.">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="x1a6rte">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="7n98xez"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="xu60dey"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="qwv2ux0"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="nbf2f0h"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="q3m7r0v"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="5r3wk7-"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="aqwek5w">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-white"
                    data-oid="5_6u_sg"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="9wce4rh"
                    >
                        <div className="text-center" data-oid="1u29l3i">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-black mb-4"
                                data-oid="v6xggi-"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="ggj4.pm"
                            >
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="ijpk54z"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="_deo58n"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="06-1yi6"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="yam_p7w"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="-dc9gys"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                    data-oid="s97-z2w"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-black text-black rounded-md hover:bg-yellow-50 transition-colors"
                                    data-oid=".od2.q3"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="o:n01ms"
                            >
                                <p className="text-gray-700 font-medium" data-oid="xud393a">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="1an3lz0">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="_vg4:74">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="du6:fc4">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="-xlbxtb"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="n2a9-ku">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="l:el1_i"
                            >
                                <h3
                                    className="text-xl font-semibold text-black mb-4"
                                    data-oid="bt_4-ok"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="0lcj1ag">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="v1c-zmw"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="4mdu:bz"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="38sdlvz">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="k4f7ry5"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="xxk23px"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="r2_w.pn">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="v3oqgvd">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="4_6mua7"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="n.5p6c0">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="zh0ut6d">
                                {' '}
                                This collaborative effort between the University of Hyderabad,
                                Dartmouth College, and University College London aims to foster
                                interdisciplinary dialogue and develop innovative approaches to
                                understanding and addressing displacement in contemporary
                                society.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Call for Papers Section */}
                <section id="call-for-papers" className="py-20 bg-yellow-50" data-oid="jqwe_vn">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a2cnbrd">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="5judk_y"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="b0588qw">
                            <p className="text-gray-700 mb-6" data-oid=".jwfyz8">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="9oun_s:">
                                <div data-oid="lncy22b">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="15ob-fo"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="46n5n-b"
                                    >
                                        <li data-oid="cec1pzx">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="cuzop49">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="w4wn9yq">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="hjjzu-1">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="nwsqdiw">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="z77a_.y">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="ed::t99">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="b4v8:zl">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="7fg490n">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="nsg:840"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="saztfj1">
                                        <li className="flex items-start" data-oid="fpu._lu">
                                            <span
                                                className="font-medium text-red-600 mr-2"
                                                data-oid="_plac2f"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="xo7ug3v">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="600_y.j">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid=".kfohtd"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="5v-cfvx">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="k2ojhpx">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="-e_jmvi"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="54247fc">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="lu1x9kw">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="-ydd4xh"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="uh9r.d6">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="dvdh6xn">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="ju2-tmy"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="qhqzdy8">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-md mb-6" data-oid="2:.pxu4">
                                <h3
                                    className="text-lg font-semibold text-red-800 mb-2"
                                    data-oid="l6o-jto"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid=":io.gw1">
                                    {' '}
                                    The conference will feature special sessions on "Digital
                                    Displacement in the Age of AI" and "Climate Refugees: Policy
                                    Challenges and Responses." Submissions specifically addressing
                                    these themes are encouraged.{' '}
                                </p>
                            </div>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                data-oid="i2b_g4a"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid=".byf_fh">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3tw8rdu">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="3p827vm"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="tzzie2x">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="vxwginh">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="gyo0k58"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="gxoirjb">
                                    <li className="flex items-start" data-oid="gmp3zsq">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8sy2ve9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="-gy7pjx"
                                            />
                                        </svg>
                                        <span data-oid="n:bri7k">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="j67pb7z">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="vptowvd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="3u.sys-"
                                            />
                                        </svg>
                                        <span data-oid="4_pdaef">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="2tfo4-y">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="g.w1uda"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="2ct2bu6"
                                            />
                                        </svg>
                                        <span data-oid="5espqxu">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="5w1ue1o">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="gtauu:s"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="lyc:zyx"
                                            />
                                        </svg>
                                        <span data-oid=":kmt3qk">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="6.60hzz">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="q.lysbp"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="2pvur.-"
                                            />
                                        </svg>
                                        <span data-oid="or7:hdw">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="wm6bb7e">
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                        data-oid="2j_1hke"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="i3g_e7y">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="4jlij-4"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="9-0w0le">
                                    <li className="flex items-start" data-oid=".9kyvai">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="z5o.mhl"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="yt6zy90"
                                            />
                                        </svg>
                                        <span data-oid="8f5i0pd">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="2jv:dba">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="jw1:cnh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="nmzg76q"
                                            />
                                        </svg>
                                        <span data-oid="3v28ck-">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="j.qeh9m">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="jv0bxer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="gf-wa6h"
                                            />
                                        </svg>
                                        <span data-oid="hm_x_8_">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="6eqp.:s">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="y9nx8f2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="feqenc4"
                                            />
                                        </svg>
                                        <span data-oid="ekhofqw">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="zan-oxr">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="zinpmc5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=".hli9s6"
                                            />
                                        </svg>
                                        <span data-oid="kx3tnhd">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="wx8:oi6">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="e8xon55"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-yellow-50 p-6 rounded-lg" data-oid="cjj0al8">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="w:e2pxx"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="70261n3">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="pa0_j57"
                            >
                                <li data-oid="jj-k-fx">Relevance to the conference theme</li>
                                <li data-oid="5aof5_t">Originality and innovation</li>
                                <li data-oid="mo86mhv">Theoretical foundation</li>
                                <li data-oid="hdhe3qp">Methodological rigor</li>
                                <li data-oid="_jk9f8s">Clarity of presentation</li>
                                <li data-oid="it.5uxu">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="zo18pbx">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-yellow-50" data-oid=".05q2zp">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="2hmxnn6">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="b0ev6u5"
                            key="olk-BlGI"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>
                        <div
                            className="grid md:grid-cols-3 gap-6 mb-10"
                            data-oid="nj3ia_b"
                            key="olk-p7AS"
                        >
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="h:0bp2m"
                                key="olk-VkDW"
                            >
                                <div className="text-center mb-4" data-oid="jcv9:j7">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="nbxnyy6"
                                    >
                                        {' '}
                                        Late Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="dtjs291">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="vd61q3j">
                                    <div className="text-center" data-oid=":wt:j11">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="y5hvtrz"
                                        >
                                            {' '}
                                            $350{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="56t2-d-"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="ug130-a">
                                    <li className="flex items-start" data-oid="9d_h.-a">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="esqkoc8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="6qxjdhp"
                                            />
                                        </svg>
                                        <span data-oid=".xvhq12">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="9fy_8pi">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="c63d93a"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="doypd3t"
                                            />
                                        </svg>
                                        <span data-oid="t:cykc3">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="ud3:xn-">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="e35t4j5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="f-v4rpi"
                                            />
                                        </svg>
                                        <span data-oid="lkirrsh">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid=".-hayvx">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="lyyqqa5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="a050l6_"
                                            />
                                        </svg>
                                        <span data-oid="a78lh5s">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="gc1ahr9">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="agieim8"
                                    >
                                        {' '}
                                        Student Rate: $250{' '}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center" data-oid="26c8:yg" key="olk-iI0k">
                            <button
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="-81_s.0"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                            <p className="mt-4 text-gray-600" data-oid=".9cuwt0">
                                {' '}
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="0bah66y"
                                >
                                    {' '}
                                    registration@displacement2025.org{' '}
                                </a>{' '}
                            </p>
                        </div>
                        <p className="w-[30px] h-[30px]" data-oid="a.::xrf" key="olk-xiuF"></p>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="a6.-l3x">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="x4.b61e">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="qftdv27"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="hkg..3o">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="hsk.u43">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="hkmds81"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="za.5vy.">
                                    <div data-oid="akcbf3x">
                                        <h4
                                            className="font-medium text-red-700 mb-2"
                                            data-oid="bibatkm"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="szccyzm">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="ectdidz">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="xvyhflh"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="ibjozrz">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="95ii021"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="stpd4n-">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="50s1hif">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="foz8-uw"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid=":g6wzaj">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="yq4bpv7"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="t67uw0s">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="ely34s1">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="qnol2ga"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="s328u4u">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="w9yenac"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="lsan7:l">
                                    <div data-oid="okxoojt">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="wpo7vj1"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your name"
                                            data-oid="jzq2fg2"
                                        />
                                    </div>
                                    <div data-oid="-7m_ia7">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="msz8f.g"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="8avb7p0"
                                        />
                                    </div>
                                    <div data-oid="h0h1ddz">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="lt-4vo-"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="yq7ewmi"
                                        />
                                    </div>
                                    <div data-oid="q_j89qr">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="be8hytt"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="c.gdl.r"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="bpwfcxt"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="aoor09d">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="h-k1op3"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="b.fgfob">
                                <div data-oid="92mq6hf">
                                    <p className="text-gray-700 mb-2" data-oid="r4it94d">
                                        <strong data-oid="qmiyp9h">University of Hyderabad</strong>
                                        <br data-oid="s94m08c" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="5nncoav" /> Hyderabad, Telangana 500046
                                        <br data-oid="9xjoc3g" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="zhhy75h">
                                        <strong data-oid="koisnq-">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="57gn0uf">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="o52_lqv"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="j40l4pq">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="imj7m6o"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="urcp:_j"
                                >
                                    <span className="text-gray-500" data-oid="b3gar8d">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-black text-white py-12" data-oid="81ev1_x">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="qv439wl">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="81yf730">
                            <div data-oid="hyzmneq">
                                <h3 className="text-xl font-semibold mb-4" data-oid="49rdin4">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-yellow-200" data-oid="kyyhgao">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="or56t7d">
                                <h3 className="text-lg font-semibold mb-4" data-oid="yzqx_kg">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="7sh4azs">
                                    <li data-oid="d4q0.wf">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-yellow-200 hover:text-white"
                                            data-oid="a.cm.53"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="m0iu0.5">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="iil1a44"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="yspwfz2">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="cwwctin"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="a.nt90g">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="6m:v-nx"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="u_g9n1i">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid=".clh0nr"
                                        >
                                            {' '}
                                            Registration & Fees{' '}
                                        </button>
                                    </li>
                                    <li data-oid="azu:a4t">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid=".hx-un3"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="ys86_gl">
                                <h3 className="text-lg font-semibold mb-4" data-oid="wfuli0z">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="kncvxk-">
                                    <li className="flex items-start" data-oid="vfe_6mk">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="efbg.o9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="l484487"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="8msjpk5"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="h56a3l:">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="..b6d.f"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="7zgc8gk"
                                            />
                                        </svg>
                                        <span className="text-yellow-200" data-oid="oxqz0c2">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                            data-oid="ysp9m4v"
                        >
                            <p data-oid="kiw9y2h">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="8djem7x">
                                {' '}
                                A collaborative initiative by the University of Hyderabad, Dartmouth
                                College, and University College London.{' '}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
