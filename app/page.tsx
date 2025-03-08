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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="kjk1zj6">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="pf.eq2b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":m51pzr">
                    <div className="flex justify-between h-16" data-oid="b4ja3ul">
                        <div className="flex items-center" data-oid="sp4raxm">
                            <div className="flex items-center space-x-2" data-oid=":dq-gzg">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="5kf7ki4"
                                />

                                <div
                                    className="text-xl font-bold text-indigo-800"
                                    data-oid="h.o7_yu"
                                >
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="e5sat:t">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="3:kr6_."
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="u9grsgs"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="c5r8x_w"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="45ounmz"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="ay:_amp"
                            >
                                {' '}
                                Registration & Fees{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="zgy4iqo"
                            >
                                {' '}
                                Contact{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="eyoqyw5">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
                                data-oid="3aokwsm"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="rfko7rb"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="6pwk6x4"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="53th.0g"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="pgx79w3">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="dswoyoo">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid=".dfntok"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="81krpc2"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="fi9ion-"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="cl-6g_d"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="-eb2b6q"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="c.-1ir."
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="7op4.p-">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white"
                    data-oid="010jm-a"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="i_osj9c"
                    >
                        <div className="text-center" data-oid="na6h4ba">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-indigo-900 mb-4"
                                data-oid=".u8fo44"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="9b5fu0c"
                            >
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="2srosm."
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="7:dhuj8"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="kchhyo4"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="mjcyrbm"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="wmx84nl"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                    data-oid="1f_ksa2"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                                    data-oid="qa0kgpk"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="a:oclb:"
                            >
                                <p className="text-gray-700 font-medium" data-oid="dvaks-r">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid=":120plj">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="4a-69k0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="no3:o6g">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="i_mxkgu"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="l5-zl:i">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="7z0w53j"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="b8q63ga"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="q3oxq-:">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="5n9ygox"
                                >
                                    <span className="text-gray-500" data-oid="4u.p-dy">
                                        University Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="ckxg4s4"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="szrswr3"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="o5nuvd3"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="2tb0:h7">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="ztesyxe"
                                >
                                    <span className="text-gray-500" data-oid="x-ihoj.">
                                        College Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="_na-9pq"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="p4i:yo0"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="8bsztty"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="z2hq2z_">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="igyob1c"
                                >
                                    <span className="text-gray-500" data-oid="6gsr715">
                                        UCL Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="bq3qm-l"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="xk8lhat">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="o5nn_:1"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="oc50ons">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="i_rp-y5">
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
                <section id="call-for-papers" className="py-20 bg-indigo-50" data-oid="zhxgl4b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fsndb6_">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="843wmv_"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="0149puh">
                            <p className="text-gray-700 mb-6" data-oid="r_8op97">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="xs2sqg6">
                                <div data-oid="eemjlzm">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="0jjj1go"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="efy8_61"
                                    >
                                        <li data-oid="y-t6o24">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="m99m4ox">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid=":sy8_r4">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="z43zyj0">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="9sbud6i">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="-falbm-">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid=":fffc9t">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="5h7d2b6">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid=".t0x:tp">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="58wm_a-"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="jov5qnm">
                                        <li className="flex items-start" data-oid="v.1cfdv">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="ftpr:k1"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="zx-3z2v">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="xrrlyvz">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="uxsxlnf"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="bbz5_rq">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="xykzqw6">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="wope4q0"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="zgddhvm">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="3mfjqak">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="e2tmn0r"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="q0z.xpe">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="0e16z:e">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="h.0v18f"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="lwz4xyn">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-md mb-6" data-oid="uvx19g:">
                                <h3
                                    className="text-lg font-semibold text-indigo-800 mb-2"
                                    data-oid="lalhwih"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="bwbl2n-">
                                    {' '}
                                    The conference will feature special sessions on "Digital
                                    Displacement in the Age of AI" and "Climate Refugees: Policy
                                    Challenges and Responses." Submissions specifically addressing
                                    these themes are encouraged.{' '}
                                </p>
                            </div>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                data-oid="si5r8w1"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="_15tbrz">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="n1qn24z">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="u7d7p0i"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="xafcsui">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="jelftr.">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="l4fm8pw"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="dkzc6-i">
                                    <li className="flex items-start" data-oid="p-:u444">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ex2eic6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="zx9mnee"
                                            />
                                        </svg>
                                        <span data-oid="_.17xtt">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="6hb7iik">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="zny8nny"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="6i6c7tv"
                                            />
                                        </svg>
                                        <span data-oid="14.dfgg">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="n:qmq7g">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="wfkx3t1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=".arvuvi"
                                            />
                                        </svg>
                                        <span data-oid="pi75g:k">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="cqhqnu5">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="z7zml-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="jc-lpxo"
                                            />
                                        </svg>
                                        <span data-oid=".v9xr84">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="86v1rdc">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="6v235tr"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="rx0x6ii"
                                            />
                                        </svg>
                                        <span data-oid="l5znek-">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="819.tl5">
                                    <button
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="mriig4e"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="hcf19i6">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="y46..m5"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="3bh55.o">
                                    <li className="flex items-start" data-oid="5an5_s1">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="wf:qt8f"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ci58-0g"
                                            />
                                        </svg>
                                        <span data-oid="9txjqcl">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="0.vpukb">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="0z8sdl_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="bf4vu3n"
                                            />
                                        </svg>
                                        <span data-oid="kg:.5xc">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="9c7fduo">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fhypa5z"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="amii5rn"
                                            />
                                        </svg>
                                        <span data-oid="stokgk_">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="j6uxlcg">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="1:_a339"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="mc0gzop"
                                            />
                                        </svg>
                                        <span data-oid="vhj.d1s">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":df2t:0">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="cg38rc7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="3yek73."
                                            />
                                        </svg>
                                        <span data-oid="3us43h.">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="mrfuajw">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="urtsuwb"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-indigo-50 p-6 rounded-lg" data-oid="cx54y4_">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="-1ye_:p"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="dkh81ep">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="42z3t-a"
                            >
                                <li data-oid="rn26:s5">Relevance to the conference theme</li>
                                <li data-oid="bqirv_3">Originality and innovation</li>
                                <li data-oid="sjphs0:">Theoretical foundation</li>
                                <li data-oid=":b5jf5g">Methodological rigor</li>
                                <li data-oid="nvekp7y">Clarity of presentation</li>
                                <li data-oid="wes8b6c">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="10r1rmm">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-indigo-50" data-oid="b-5o5ms">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="sx16o_9">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="xb25ald"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="y3lg4:1">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="saa7ymg"
                            >
                                <div className="text-center mb-4" data-oid=".9:oe4o">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="41xag03"
                                    >
                                        {' '}
                                        Early Bird Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="hvcbg._">
                                        {' '}
                                        (Until February 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="xzhhasf">
                                    <div className="text-center" data-oid="l-loo_c">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="wfw5u-s"
                                        >
                                            {' '}
                                            $250{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="-r4k840"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="0nnr0pj">
                                    <li className="flex items-start" data-oid="q608-ii">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="frycr7b"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="xcxqshf"
                                            />
                                        </svg>
                                        <span data-oid="xucfivf">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="r42jsxp">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="-niepz5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="qcfqsxd"
                                            />
                                        </svg>
                                        <span data-oid="t0m-a9k">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="_19wieg">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8-ywnp-"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="tfujqln"
                                            />
                                        </svg>
                                        <span data-oid="4n_0ew-">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="b_y6k2o">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="nj9.wqw"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="f0bkv6k"
                                            />
                                        </svg>
                                        <span data-oid="lwv4ctw">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="ymwl4wp">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="a9r-cty"
                                    >
                                        {' '}
                                        Student Rate: $150{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-500 relative"
                                data-oid="8ifo:mt"
                            >
                                <div
                                    className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg"
                                    data-oid="t81cqs2"
                                >
                                    {' '}
                                    Recommended{' '}
                                </div>
                                <div className="text-center mb-4" data-oid="9lx9f:v">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="5t28vgo"
                                    >
                                        {' '}
                                        Standard Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="9lrffx_">
                                        {' '}
                                        (February 2 - March 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="zuk4mw8">
                                    <div className="text-center" data-oid="lpgj-8v">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="1c9r.t-"
                                        >
                                            {' '}
                                            $300{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="p3vvmwp"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="k9msrpc">
                                    <li className="flex items-start" data-oid="t4_s2dc">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8tq12:0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=".0uqzg2"
                                            />
                                        </svg>
                                        <span data-oid="xhtec2j">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="9by7:2s">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="umjpo2b"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="d_dw453"
                                            />
                                        </svg>
                                        <span data-oid="1sa-mtz">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="obl6fm7">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="m0fl-rg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="s190_32"
                                            />
                                        </svg>
                                        <span data-oid="2jh_wfb">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="o0fu6.p">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="62ht.qh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="np3zmof"
                                            />
                                        </svg>
                                        <span data-oid="lvh4s.e">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="_52xi6v">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="-imvmn3"
                                    >
                                        {' '}
                                        Student Rate: $200{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="0j-zyyo"
                            >
                                <div className="text-center mb-4" data-oid="fdsngqv">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="zpnkb79"
                                    >
                                        {' '}
                                        Late Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="p377in8">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="tbo4pd-">
                                    <div className="text-center" data-oid="xhmwkaf">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="5pcmhml"
                                        >
                                            {' '}
                                            $350{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="31fh95a"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="yv5vg:g">
                                    <li className="flex items-start" data-oid="cpji0au">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ybqam-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="6hc.eqo"
                                            />
                                        </svg>
                                        <span data-oid="16fr6vh">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="ra1z:8d">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="r7vs:i3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="t_swr:u"
                                            />
                                        </svg>
                                        <span data-oid="v7d3_td">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="qm02n.w">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="3o:aawf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="toyabjx"
                                            />
                                        </svg>
                                        <span data-oid="t.bq6zt">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="dxf:ryn">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="lgk_ez."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ptyer9u"
                                            />
                                        </svg>
                                        <span data-oid=".ef2jyk">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="xfttgma">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="lhcgh1."
                                    >
                                        {' '}
                                        Student Rate: $250{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="z:yxlev">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="3f9n8pz"
                            >
                                {' '}
                                Additional Options{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="p_5vo-c">
                                <div data-oid=".od.pv1">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="qj182.7"
                                    >
                                        {' '}
                                        Conference Dinner{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="5qcdjm2">
                                        $50 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="io2qh:1">
                                        {' '}
                                        Join us for a special dinner featuring local cuisine and
                                        cultural performances.{' '}
                                    </p>
                                </div>
                                <div data-oid="66ngixg">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="jtp8s34"
                                    >
                                        {' '}
                                        Cultural Tour{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="qas:lvn">
                                        $40 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="pn_dzr1">
                                        {' '}
                                        A guided tour of historical and cultural sites in Hyderabad
                                        (March 18, 2025).{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" data-oid="hhspw08">
                            <button
                                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                data-oid="-t518pf"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                            <p className="mt-4 text-gray-600" data-oid="ccof__k">
                                {' '}
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="wno9_ky"
                                >
                                    {' '}
                                    registration@displacement2025.org{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="lt3rn6x">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="rkpkvbt">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="t0ihq96"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="z8rod:j">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="zutectu">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="ece44i-"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="t9cc33l">
                                    <div data-oid="io3.9z6">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="qllqfzu"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="5ap.frj">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="s_0tiqk">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="9p5g6lz"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid=":cvtuyz">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="p3nglv1"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="p.tgetv">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="z6-ez8x">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="iyu-6mi"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="zdl-75y">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="96ewf7-"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="q_c16x:">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="av6wjd:">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="ph4:7wk"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="xyk95g4">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="v2b7g5m"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="hmyb9pq">
                                    <div data-oid="lzpwnu0">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="7rvt3qk"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                            data-oid="7:d0gi4"
                                        />
                                    </div>
                                    <div data-oid="dhow9-z">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="k186ck9"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="i4rf7:f"
                                        />
                                    </div>
                                    <div data-oid="i_q-.23">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="zg-y:3u"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="5m5.yw."
                                        />
                                    </div>
                                    <div data-oid="f7:euas">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="m6j3906"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="x2a88zm"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="k7u_11i"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="rmkzrmf">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="wfh1yn8"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="f_dwhln">
                                <div data-oid="ok:k1p-">
                                    <p className="text-gray-700 mb-2" data-oid="4jfic5t">
                                        <strong data-oid="bw:9w3r">University of Hyderabad</strong>
                                        <br data-oid="vdashmf" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="tk6hyvv" /> Hyderabad, Telangana 500046
                                        <br data-oid="kidlrjf" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="k1zxpk3">
                                        <strong data-oid="_v.y-fi">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="whi:5hu">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="i3akrge"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="nhoqewd">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="68as775"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="z3cqo3-"
                                >
                                    <span className="text-gray-500" data-oid="4:.9ta7">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-indigo-900 text-white py-12" data-oid="x-ch6z8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="22692ne">
                        <div className="grid md:grid-cols-4 gap-8" data-oid="v2l-3d9">
                            <div data-oid="lkr:u3v">
                                <h3 className="text-xl font-semibold mb-4" data-oid="8jl6-pt">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-indigo-200" data-oid="ktr_o3.">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="-6waei8">
                                <h3 className="text-lg font-semibold mb-4" data-oid="mzbkh-i">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="p9k2ysh">
                                    <li data-oid="gt7yayt">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="h_x3z9_"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="t7.ta-x">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="xsz30l3"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="bq_.-aq">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="o-k3ggw"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="a_aomy_">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid=":_h3euf"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid=".mt5jw3">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="c80_gt6"
                                        >
                                            {' '}
                                            Registration & Fees{' '}
                                        </button>
                                    </li>
                                    <li data-oid="ggu2df.">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="bs072d_"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="b-1lo4d">
                                <h3 className="text-lg font-semibold mb-4" data-oid="am0nz6l">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="fhlx6t2">
                                    <li className="flex items-start" data-oid="ty-.8b9">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="t8f4j2f"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid=".nan0wp"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="-3jbk5a"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="dd2jvmd">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="3wvw52y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="wbjcts9"
                                            />
                                        </svg>
                                        <span className="text-indigo-200" data-oid="c2_3-dd">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="vye:2o7">
                                <h3 className="text-lg font-semibold mb-4" data-oid="uvztt9f">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4" data-oid="1bk4a_a">
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="4e926rp"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="4:3imp3"
                                        >
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                data-oid="zk6t.7_"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="kt94slh"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="8dbrz50"
                                        >
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                data-oid="dqzvk5k"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="l2w3a6e"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="wcgkon:"
                                        >
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                data-oid="wqsx4-r"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm"
                            data-oid="ttq4ove"
                        >
                            <p data-oid="2:3ezgn">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid=":mhof.t">
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
