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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="ua8.2zd">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="-knjh6r">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1w9jrz9">
                    <div className="flex justify-between h-16" data-oid="cjwjlyr">
                        <div className="flex items-center" data-oid="jin6hi5">
                            <div className="flex items-center space-x-2" data-oid="p97rc:9">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="vpwyej2"
                                />

                                <div
                                    className="text-xl font-bold text-indigo-800"
                                    data-oid="7qd6ik5"
                                >
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="sg65n5o">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid=":daml7x"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="yse25zt"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="tbqyy0x"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="tpdnoel"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="u:_uswp"
                            >
                                {' '}
                                Registration & Fees{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="zplk5k4"
                            >
                                {' '}
                                Contact{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="x3:dcy:">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
                                data-oid="53847dh"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="ect0l3:"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="u8fodof"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="r.8litl"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="i1-5:5o">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="m16gim1">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="z5zwl84"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="-2l9vry"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="sq3gxe9"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="em_d8:y"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="3-n1-lq"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="eu91jn:"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="2mqja5e">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white"
                    data-oid="efji.yy"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="3wh29n_"
                    >
                        <div className="text-center" data-oid="v5hezp1">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-indigo-900 mb-4"
                                data-oid="db_262:"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="9.eazmf"
                            >
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="me6.0mb"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid=":0_grgg"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="nx3_1wr"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid=":333oud"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="us478dw"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                    data-oid="365akda"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                                    data-oid="7z:.prl"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="qw.g6wa"
                            >
                                <p className="text-gray-700 font-medium" data-oid="6mxgbo1">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="6u6-i1t">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="d9so7dj">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="hjrp.sm">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="-ey_wj7"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="i-0d32c">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="2z2d2n2"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="a-sty03"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="v9ayx2.">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="1a2d8cj"
                                >
                                    <span className="text-gray-500" data-oid="hyi2-a7">
                                        University Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="6-7jk6j"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="2ine.rp"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="34.9tr1"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="2e5vu_m">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="8dzvbks"
                                >
                                    <span className="text-gray-500" data-oid="i9uc0yk">
                                        College Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="s1atry5"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="91_wb7c"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="fy:b177"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="vfnrnel">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="6ywx8m0"
                                >
                                    <span className="text-gray-500" data-oid="ln9ofb.">
                                        UCL Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="22zgxfo"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="5kn:-pq">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="og1cfm2"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="6wla6x3">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="txrz:jw">
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
                <section id="call-for-papers" className="py-20 bg-indigo-50" data-oid="0weq882">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="x:btbra">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="j8_hn9u"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="dlqal26">
                            <p className="text-gray-700 mb-6" data-oid="9.n:h6t">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="zdbihsx">
                                <div data-oid="0tim3qj">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="__cg6uj"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="yju52tf"
                                    >
                                        <li data-oid=":2qy:ji">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="p1bigmi">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="l.jkf.:">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="4wub2uu">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="-:9da8f">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="avv-:l9">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="ie8lsdp">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="cm-4e0k">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid=".mg3yb.">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="ivhlrbm"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="llvwhnj">
                                        <li className="flex items-start" data-oid="26w1f5y">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="xf:oibg"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="::wcwlx">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="rq16:zr">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="1lilknk"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="sm46l.1">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="adw5.qg">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="z44u_9g"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="cuqoz--">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="26w3716">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="c65jujm"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="xvy01jx">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="4tusbvr">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="nb-yiz_"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="1p668mh">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-md mb-6" data-oid="z1idvcn">
                                <h3
                                    className="text-lg font-semibold text-indigo-800 mb-2"
                                    data-oid="qbq3jka"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="p_g874.">
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
                                data-oid="hb9p7qt"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="w8xadoh">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="y25ky2l">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="5ib5hcl"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="_iy5p93">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="jtpk4.y">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="ci48hc0"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="pn:q3an">
                                    <li className="flex items-start" data-oid="w-zto8_">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="kzuisz7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="p0rcitk"
                                            />
                                        </svg>
                                        <span data-oid="4ci3r1_">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="59mqd2v">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="f3jajab"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="0hu..i_"
                                            />
                                        </svg>
                                        <span data-oid="vbqyae0">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="vacp.dt">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="jrcz35h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ednk3ib"
                                            />
                                        </svg>
                                        <span data-oid=":5wtgw0">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="tfwk0a.">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="-qm9taw"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="h_1a-nq"
                                            />
                                        </svg>
                                        <span data-oid="r1g6.br">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="_f9.-29">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="aey90cg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="r33akf6"
                                            />
                                        </svg>
                                        <span data-oid="hj2s6q8">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="s:lghhx">
                                    <button
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="5lasrk4"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="kvh_1.u">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="tpsg-5q"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="z53f1o2">
                                    <li className="flex items-start" data-oid="rytdhe9">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="53s2vd0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="1-vz:xl"
                                            />
                                        </svg>
                                        <span data-oid="0ph_y-z">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="ijr0h1h">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="5at-utt"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="4lgi_f:"
                                            />
                                        </svg>
                                        <span data-oid="1ay5zmg">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":_ykdvr">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="571noxe"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=".ttqmwl"
                                            />
                                        </svg>
                                        <span data-oid="whfq5.x">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":fu26_p">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xv6yvot"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="8qud3rr"
                                            />
                                        </svg>
                                        <span data-oid="y.2sp29">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="d6tm_wv">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="y6y07xn"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="a:hi:bk"
                                            />
                                        </svg>
                                        <span data-oid="idlpayt">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="lxm9crx">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="nqg9kjv"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-indigo-50 p-6 rounded-lg" data-oid="nwr1.4h">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="g6kpy:u"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="lokufs_">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="bvmu9g5"
                            >
                                <li data-oid="yavs93t">Relevance to the conference theme</li>
                                <li data-oid="75id8x5">Originality and innovation</li>
                                <li data-oid="m-cminl">Theoretical foundation</li>
                                <li data-oid="apx7nl8">Methodological rigor</li>
                                <li data-oid="ys_qwlm">Clarity of presentation</li>
                                <li data-oid="0txqweq">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="s-p:p1w">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-indigo-50" data-oid="y7e-ffu">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="5qeuuz6">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="8knqkuj"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="uaeryuk">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="jz4bakw"
                            >
                                <div className="text-center mb-4" data-oid="2fz5n-m">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="f1fwmfe"
                                    >
                                        {' '}
                                        Early Bird Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="d2uuhi9">
                                        {' '}
                                        (Until February 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="bvzndso">
                                    <div className="text-center" data-oid="6dhn739">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="1fyvyo_"
                                        >
                                            {' '}
                                            $250{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="3hcqfvg"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="3nhagu2">
                                    <li className="flex items-start" data-oid="t7hz_m_">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a6brbz."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="j2_q4_g"
                                            />
                                        </svg>
                                        <span data-oid="mqxa9h4">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="54fpicg">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="y3r7bvv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="cg0stwb"
                                            />
                                        </svg>
                                        <span data-oid="1psz0.s">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="84iiwbq">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":3ylhhd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="dy64jeh"
                                            />
                                        </svg>
                                        <span data-oid="_-.hl8i">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="8-019ba">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="bi4soe6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="el2emi."
                                            />
                                        </svg>
                                        <span data-oid="8y0xy31">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="gcux4vn">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid=":7u-sec"
                                    >
                                        {' '}
                                        Student Rate: $150{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-500 relative"
                                data-oid="1kcuggl"
                            >
                                <div
                                    className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg"
                                    data-oid="rv2m2vf"
                                >
                                    {' '}
                                    Recommended{' '}
                                </div>
                                <div className="text-center mb-4" data-oid="zz1vkxo">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="cly96yx"
                                    >
                                        {' '}
                                        Standard Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="givvc88">
                                        {' '}
                                        (February 2 - March 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="yfyaaf:">
                                    <div className="text-center" data-oid=".xl-d3i">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="ow9rcdk"
                                        >
                                            {' '}
                                            $300{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="803cz.7"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid=":xeait2">
                                    <li className="flex items-start" data-oid="3981ypk">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="0a_a-s7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="dx-1obz"
                                            />
                                        </svg>
                                        <span data-oid="lnw5g_m">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="-ddeysi">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ry3016u"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ll2705f"
                                            />
                                        </svg>
                                        <span data-oid="g1--hf0">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="5vtg:3k">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2.z-3c:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="._ldg9y"
                                            />
                                        </svg>
                                        <span data-oid="617v_y-">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="rz57po6">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9h6xec3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="q67icoj"
                                            />
                                        </svg>
                                        <span data-oid="voohey2">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="ku4rfrq">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="zu0_mmi"
                                    >
                                        {' '}
                                        Student Rate: $200{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="uhr0jks"
                            >
                                <div className="text-center mb-4" data-oid="kcatuph">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="z4v2okt"
                                    >
                                        {' '}
                                        Late Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="uykkh7f">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="92i-7ak">
                                    <div className="text-center" data-oid="cv-fy5f">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="gokcfv-"
                                        >
                                            {' '}
                                            $350{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="6oa1gqk"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="pj8l9v_">
                                    <li className="flex items-start" data-oid="2fnr49b">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="uprwffe"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="0j.5np5"
                                            />
                                        </svg>
                                        <span data-oid="ozs_24l">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="h_f5byg">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8qa6c2a"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=":nhcjjm"
                                            />
                                        </svg>
                                        <span data-oid=":5bzwn1">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="f0-b3n3">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ipqqne2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="kknpcmp"
                                            />
                                        </svg>
                                        <span data-oid="rjg7k_l">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="te2hz_8">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tybk3xz"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="9gfquqa"
                                            />
                                        </svg>
                                        <span data-oid="rdxz90.">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="6izx0cx">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="-o.p-e6"
                                    >
                                        {' '}
                                        Student Rate: $250{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="pj0s6c0">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="b8xxez8"
                            >
                                {' '}
                                Additional Options{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="-b1f-9q">
                                <div data-oid="tys28n-">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="qwkckzv"
                                    >
                                        {' '}
                                        Conference Dinner{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="ql6jerz">
                                        $50 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="c4ybg3f">
                                        {' '}
                                        Join us for a special dinner featuring local cuisine and
                                        cultural performances.{' '}
                                    </p>
                                </div>
                                <div data-oid="qnmhqoa">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="iqray5s"
                                    >
                                        {' '}
                                        Cultural Tour{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="._erzpi">
                                        $40 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="33e:y7n">
                                        {' '}
                                        A guided tour of historical and cultural sites in Hyderabad
                                        (March 18, 2025).{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" data-oid="3x6n6-6">
                            <button
                                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                data-oid="43a-s2h"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                            <p className="mt-4 text-gray-600" data-oid="ma85jkc">
                                {' '}
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="n6bvq62"
                                >
                                    {' '}
                                    registration@displacement2025.org{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="nn2kf6q">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-ht9mkm">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="pizsfjj"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="..ws_et">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="2jfc-t1">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="8eb9n7."
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="0jddsqe">
                                    <div data-oid="aqh08lt">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="mnm5ebz"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="stv5e25">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="p6-wjhr">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="etd:ave"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="8nfptm1">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="k9ib4h8"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="49rwf:6">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="r:0eenm">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="qg_q:mb"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="m_k05e5">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="2wo_poh"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="a4s4:a9">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="1qjr_jb">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="pr9kp2d"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="yov:l0q">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="7elq0qp"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="wbwcvif">
                                    <div data-oid="gagnd.6">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="m2q2zsl"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                            data-oid="8c7ytn7"
                                        />
                                    </div>
                                    <div data-oid="xa5o2xe">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="-zql8.p"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="d3:1_8:"
                                        />
                                    </div>
                                    <div data-oid="oam9ax:">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="wzil1e_"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="whah_b:"
                                        />
                                    </div>
                                    <div data-oid="q87.hdd">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="fe:zxzw"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="j:g2vk0"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="b151:pa"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="olvs5-d">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="sz.22rx"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="o.4z19m">
                                <div data-oid=".d-7yc8">
                                    <p className="text-gray-700 mb-2" data-oid=":4q.x9v">
                                        <strong data-oid="yt7om9j">University of Hyderabad</strong>
                                        <br data-oid="gbc-7b9" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="sqrw78l" /> Hyderabad, Telangana 500046
                                        <br data-oid="csd_tg1" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="r3nb335">
                                        <strong data-oid=".q8y0r4">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="4rhm6zi">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="2l:ove1"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="irqt_1l">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="j1vast3"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="4yydnsz"
                                >
                                    <span className="text-gray-500" data-oid="6i9f_zp">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-indigo-900 text-white py-12" data-oid="1fb8330">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="cares-s">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="9a3ajcw">
                            <div data-oid="cg12amt">
                                <h3 className="text-xl font-semibold mb-4" data-oid="xp.t7q2">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-indigo-200" data-oid="mmm4b7k">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="m98cmw0">
                                <h3 className="text-lg font-semibold mb-4" data-oid="d:5z---">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid=":.pcxnr">
                                    <li data-oid="7djx.yc">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="paz8b:c"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="qgujoa4">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="yybff-r"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="lb8cca3">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="odnkhho"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="pb:p521">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="_dqyqmi"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="y:_mnrt">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="1i36wh3"
                                        >
                                            {' '}
                                            Registration & Fees{' '}
                                        </button>
                                    </li>
                                    <li data-oid="i13om:8">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="rj0:8fb"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="kgh0b84">
                                <h3 className="text-lg font-semibold mb-4" data-oid="kj92d6i">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="nfz7gbk">
                                    <li className="flex items-start" data-oid="z4vsfnx">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ouramas"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="41ltzxg"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="lh-uysw"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="ts7nl33">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="le2lef2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="6kqpwm5"
                                            />
                                        </svg>
                                        <span className="text-indigo-200" data-oid="kdbf0um">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm"
                            data-oid="t9esp9i"
                        >
                            <p data-oid="e0ji6o8">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="vv5x90j">
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
