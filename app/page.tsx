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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="c6kfpsu">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="80ya7oz">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".akopsb">
                    <div className="flex justify-between h-16" data-oid="g_swyx6">
                        <div className="flex items-center" data-oid="0_w0xzt">
                            <div className="flex items-center space-x-2" data-oid=":bssea9">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="4leqp9n"
                                />

                                <div className="text-xl font-bold text-red-700" data-oid="vcysko.">
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid=".tkph2p">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="xv95cnz"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="x3jjkzp"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="9mhh6w9"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="0x0_826"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="lfwz5p7"
                            >
                                {' '}
                                Registration{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="pfbz_8n">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                                data-oid="4nd_em7"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="rys78_q"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="7g1x5.."
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="cib_0ei"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="3efsmrn">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="c1k_nm1">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="epmf1vc"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="1k6y6ph"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="t1qe4_:"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="o:_8qgw"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="1w5ok7o"
                        >
                            {' '}
                            Registration{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="l8--_-_"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="b1t4093">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center relative"
                    style={{
                        backgroundImage: 'url("/images/Displacement _20250307_121647_0000.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    data-oid="s7ugm6a"
                >
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        data-oid="qnsnpoq"
                    ></div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                        data-oid="t10kfq7"
                    >
                        <div className="text-center" data-oid="7u18ul1">
                            <div className="flex justify-center mb-6" data-oid="3su9ic3"></div>
                            <h1
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                                data-oid="sme2mpj"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="zoxi:6z"
                            >
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="n948560"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="3a_eq37"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="_yb2406"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-white max-w-3xl mx-auto mb-10"
                                data-oid="driif2i"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="_.-4ylh"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                    data-oid="rpncz_a"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-black text-black rounded-md hover:bg-yellow-50 transition-colors"
                                    data-oid="y7zhetu"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                                data-oid="6n3l6f6"
                            >
                                <p className="text-gray-700 font-medium" data-oid="kz4ieoy">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="i44f1lv">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="40mwndq">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="15o9h4p">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="ixa6r3h"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>

                        {/* Image Gallery */}
                        <div
                            className="mb-16 overflow-hidden rounded-xl shadow-lg"
                            data-oid="kgzgih."
                        >
                            <div className="grid grid-cols-3 gap-1" data-oid="dv6ek_1">
                                <div className="col-span-1" data-oid="u82gkur">
                                    <img
                                        src="/images/Displacement _20250307_121648_0001.jpg"
                                        alt="Conference Image"
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="371risb"
                                    />
                                </div>
                                <div className="col-span-1" data-oid="ah19s7t">
                                    <img
                                        src="/images/Displacement _20250307_121648_0002.jpg"
                                        alt="Conference Image"
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="bj3l26p"
                                    />
                                </div>
                                <div className="col-span-1" data-oid="31de1pi">
                                    <img
                                        src="/images/Displacement _20250307_121648_0003.jpg"
                                        alt="Conference Image"
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="gj44mvt"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="5k:iy2p">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="85gz_jt"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="6ijs5j1"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="-s:ct0t">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="jgdnm3-"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="iy-i6zr"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="go2lp0w">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="bkh:i.u"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="zbsn3d9"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="jgeo31r">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="ffyncw6">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="cneiqts"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid=":v916n-">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid=".h9_k_x">
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
                <section id="call-for-papers" className="py-20 bg-yellow-50" data-oid="kpqighb">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nbay4zb">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="y1zi4z_"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="enchqkm">
                            <div className="mb-8 flex justify-center" data-oid="pevfp3g">
                                <img
                                    src="/images/Global insecurity and refugee crisis linked to climate change.jpeg"
                                    alt="Displacement Theme"
                                    className="rounded-lg shadow-md max-h-80 object-cover"
                                    data-oid="w76xjul"
                                />
                            </div>
                            <p className="text-gray-700 mb-6" data-oid="86tlreu">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid=":-qx9ve">
                                <div data-oid="yt6ifak">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="f8ju:0-"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="qemki2u"
                                    >
                                        <li data-oid="qeacsqj">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="t6uvwzw">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="2cw-:gt">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="1u:_mt4">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="igk6jx9">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="g4nn_ju">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="v6rpy69">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="gsfx7gd">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="3dhmd6_">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="96xy8u0"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="a_ihfgo">
                                        <li className="flex items-start" data-oid="7s6ofii">
                                            <span
                                                className="font-medium text-red-600 mr-2"
                                                data-oid="ymr3g_l"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="nxzfhtw">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="icrwk3.">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid=".idm-bq"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="gqy1961">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="jiq0lk4">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="udy6hje"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="v5t.wfq">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="almagdf">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="eygtjs5"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="u3uycxw">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="htt3u1y">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="-23vf85"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="7k5moeb">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-md mb-6" data-oid="iwfz572">
                                <h3
                                    className="text-lg font-semibold text-red-800 mb-2"
                                    data-oid="-so_23d"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="8tg157p">
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
                                data-oid="aazz9lf"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="ffert3k">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="j6pbbvd">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="n4g.8kp"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="flex justify-center mb-10" data-oid="kgrufp6">
                            <div className="grid grid-cols-2 gap-4 max-w-2xl" data-oid="ix41zb_">
                                <img
                                    src="/images/Displacement _20250307_121722_0000.png"
                                    alt="Submission Process"
                                    className="rounded-lg shadow-md"
                                    data-oid="xqr.l24"
                                />

                                <img
                                    src="/images/Displacement _20250307_121722_0001.png"
                                    alt="Submission Process"
                                    className="rounded-lg shadow-md"
                                    data-oid="0-enf_c"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="ej.-5.o">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="nxlq2mf">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="hfbdnin"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="y2bzav0">
                                    <li className="flex items-start" data-oid="b19vp:9">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="eu_:xsm"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="185:snn"
                                            />
                                        </svg>
                                        <span data-oid="j-j:ro6">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="opxwu:o">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8kou5ce"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="66lyv-."
                                            />
                                        </svg>
                                        <span data-oid="0wyipxp">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="deh3c8g">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="nfcf-gb"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="yhoo18f"
                                            />
                                        </svg>
                                        <span data-oid="_8txo.l">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="f_-ov4e">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="obxk6h1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ak_xkgm"
                                            />
                                        </svg>
                                        <span data-oid="1w84puo">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="whu7c7a">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".77vwq5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ly277jq"
                                            />
                                        </svg>
                                        <span data-oid="3uvbtgs">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid=".mjoa50">
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                        data-oid="qup8do7"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="5-r3-cg">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="62owird"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="n3b7na6">
                                    <li className="flex items-start" data-oid="a043fun">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ntibway"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="7zger88"
                                            />
                                        </svg>
                                        <span data-oid="_4kahkx">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="ctbq.4i">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="3bvw..h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="xrenjnz"
                                            />
                                        </svg>
                                        <span data-oid="n0kc.vs">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="7:f0p2y">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="dq7_to9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="qn95jwk"
                                            />
                                        </svg>
                                        <span data-oid="51sczv_">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="075jwoo">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="h:6d99o"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="6yzi_c6"
                                            />
                                        </svg>
                                        <span data-oid="-mzp53y">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="2u1y6j7">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="7houaxk"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="y.93wu3"
                                            />
                                        </svg>
                                        <span data-oid="x6dgp_i">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="2c8cdxf">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="7jeu6lq"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-yellow-50 p-6 rounded-lg" data-oid="e9r1mvc">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="2w7at55"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="x-.--18">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="h8xyjy-"
                            >
                                <li data-oid="jxzh.1q">Relevance to the conference theme</li>
                                <li data-oid="-6q:1k4">Originality and innovation</li>
                                <li data-oid="xx_zqr9">Theoretical foundation</li>
                                <li data-oid="0whvivg">Methodological rigor</li>
                                <li data-oid="5xaldle">Clarity of presentation</li>
                                <li data-oid="ynrwfey">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="i-ovw-b">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-yellow-50" data-oid="6cidzju">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8wa5t_0">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="pwf-ru5"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="p-.u0w_">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid=":0__i5.">
                                <div className="flex justify-center mb-6" data-oid="cizunkb">
                                    <img
                                        src="/images/Displacement _20250307_121723_0002.png"
                                        alt="Registration"
                                        className="h-40 object-contain"
                                        data-oid=":oxbotz"
                                    />
                                </div>
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4 text-center"
                                    data-oid="9m2b0e0"
                                >
                                    Registration Fees
                                </h3>
                                <div className="space-y-3" data-oid="7v_acn-">
                                    <div
                                        className="flex justify-between items-center border-b pb-2"
                                        data-oid="swibpf5"
                                    >
                                        <span className="font-medium" data-oid="7gu5j6i">
                                            Early Bird (until Feb 1, 2025)
                                        </span>
                                        <span className="text-red-700 font-bold" data-oid="j6e_wov">
                                            $250
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center border-b pb-2"
                                        data-oid="obfa:35"
                                    >
                                        <span className="font-medium" data-oid=":k1sn1x">
                                            Regular Registration
                                        </span>
                                        <span className="text-red-700 font-bold" data-oid="8.v8k0k">
                                            $350
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center border-b pb-2"
                                        data-oid=":w.oafk"
                                    >
                                        <span className="font-medium" data-oid=".lj3ixj">
                                            Student Registration
                                        </span>
                                        <span className="text-red-700 font-bold" data-oid="hn0nvne">
                                            $150
                                        </span>
                                    </div>
                                    <div
                                        className="flex justify-between items-center border-b pb-2"
                                        data-oid="qba7xfi"
                                    >
                                        <span className="font-medium" data-oid="d_ouded">
                                            Virtual Attendance
                                        </span>
                                        <span className="text-red-700 font-bold" data-oid="di30f85">
                                            $100
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="6n:pyra">
                                <div className="flex justify-center mb-6" data-oid="dpo5p0h">
                                    <img
                                        src="/images/Displacement _20250307_121723_0003.png"
                                        alt="What's Included"
                                        className="h-40 object-contain"
                                        data-oid="0v1ptoy"
                                    />
                                </div>
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4 text-center"
                                    data-oid="f10-s.n"
                                >
                                    What's Included
                                </h3>
                                <ul className="space-y-3" data-oid="8zn393i">
                                    <li className="flex items-start" data-oid="oxiyz:i">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="x-ep22h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="m.ma-81"
                                            />
                                        </svg>
                                        <span data-oid="b348if0">
                                            Access to all conference sessions
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="7jnyv4w">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="imps037"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=":t2cx:e"
                                            />
                                        </svg>
                                        <span data-oid="c.z88s7">
                                            Conference materials and proceedings
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="txxf__x">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2na8dg4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ufdb1qt"
                                            />
                                        </svg>
                                        <span data-oid="0r_gzdt">
                                            Welcome reception and networking events
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":940d5l">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="an9xk-l"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="h2oww:b"
                                            />
                                        </svg>
                                        <span data-oid="odmfcit">
                                            Lunches and refreshments during the conference
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="shze0v-">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="cuj_qy9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="i25t40j"
                                            />
                                        </svg>
                                        <span data-oid="hksv._u">Certificate of participation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center" data-oid="zubom-a">
                            <button
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="bih1pmn"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="2gdngej">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s27wijy">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="gixz7xe"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="nf.2qnv">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="712nyg:">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="8jtvadl"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="150rrjc">
                                    <div data-oid="w75z4zr">
                                        <h4
                                            className="font-medium text-red-700 mb-2"
                                            data-oid="su_ewq6"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="5-q83rn">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="cx68j20">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="5z90vop"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="4570p6t">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="8kh8xd2"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="6o6ypc0">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="xp.4a0_">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="q:b4:li"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="c52veci">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="_9iog9m"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="_w-ya20">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="2ebt-eq">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="rrdo1on"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="mr.bs_:">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="iwefqqj"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="etrcbhz">
                                    <div data-oid="i5fdna4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="f_awyxj"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your name"
                                            data-oid="hotc3md"
                                        />
                                    </div>
                                    <div data-oid="mup.4pd">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="9iuywfr"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="lqg7v0s"
                                        />
                                    </div>
                                    <div data-oid="sphdgjk">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="gxefdrz"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="ja4ioht"
                                        />
                                    </div>
                                    <div data-oid="wy8_q.v">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="omsofw-"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="dumjt4y"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid=".0h9hon"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="c-1gjaz">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="liyag8q"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="4gj4rec">
                                <div data-oid="yqy-slm">
                                    <p className="text-gray-700 mb-2" data-oid="k303y9a">
                                        <strong data-oid="y1z1sz9">University of Hyderabad</strong>
                                        <br data-oid="uvj1f-_" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="xeyos0a" /> Hyderabad, Telangana 500046
                                        <br data-oid="udv66mj" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="vinjia.">
                                        <strong data-oid="uq9c3gt">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="y.rzkd2">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="zd1ocal"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="0prxnqs">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="thin86q"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-md overflow-hidden shadow-lg"
                                    data-oid="r9fyu3q"
                                >
                                    <img
                                        src="/images/Displacement _20250307_121648_0004.jpg"
                                        alt="University of Hyderabad Campus"
                                        className="w-full h-64 object-cover"
                                        data-oid="84:ivwo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-black text-white py-12" data-oid="n7qln-y">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="w2i59kc">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="wewi5v.">
                            <div data-oid="t71kuj8">
                                <div className="flex items-center mb-4" data-oid="dhpfgeo">
                                    <img
                                        src="/images/logo.webp"
                                        alt="Conference Logo"
                                        className="h-12 mr-3"
                                        data-oid="76u.mnz"
                                    />

                                    <h3 className="text-xl font-semibold" data-oid=".b53802">
                                        DISPLACEMENT 2025
                                    </h3>
                                </div>
                                <p className="text-yellow-200" data-oid="v3.8bxs">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="ktdavz:">
                                <h3 className="text-lg font-semibold mb-4" data-oid="9_kb:.g">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="ajxxp:s">
                                    <li data-oid="d6rr_zc">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-yellow-200 hover:text-white"
                                            data-oid="7co7fz-"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="pn6845m">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="a:brvc7"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="06ga--q">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="pfqlm51"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="b_8_qr0">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="li:2hdv"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="_0rr3w:">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="1i.88jc"
                                        >
                                            {' '}
                                            Registration{' '}
                                        </button>
                                    </li>
                                    <li data-oid="v5qe0bg">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="cbvn68-"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="xu-79hf">
                                <h3 className="text-lg font-semibold mb-4" data-oid="3-xjdu:">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="f:249dr">
                                    <li className="flex items-start" data-oid="lw_4bv2">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="pnaki1f"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="d:_clag"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="qf-sdz8"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="--.cg3v">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="mbpwmk:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="jty0x-g"
                                            />
                                        </svg>
                                        <span className="text-yellow-200" data-oid=":9::yq7">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                            data-oid="9-1s09q"
                        >
                            <p data-oid="6v3nm36">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="5:ywvyj">
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
