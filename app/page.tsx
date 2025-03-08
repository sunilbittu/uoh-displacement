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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="64cjfxe">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="yfnyofr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="t8acdp_">
                    <div className="flex justify-between h-16" data-oid="0y.9gkz">
                        <div className="flex items-center" data-oid="u6waucw">
                            <div className="flex items-center space-x-2" data-oid="mw_fxor">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="knm4i9i"
                                />

                                <div
                                    className="text-xl font-bold text-indigo-800"
                                    data-oid="igm-5or"
                                >
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="gtov3ff">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="6yzvn2x"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="pf5neds"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="uw0dkm5"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="hp.zio0"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="dh-smr4"
                            >
                                {' '}
                                Registration & Fees{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="afep4i8"
                            >
                                {' '}
                                Contact{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="d1aws67">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
                                data-oid="xfr5pxp"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":hroh1."
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="cwa53w5"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="3xqyr0j"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="-r2t4kk">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="7j_xbia">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="7o7geye"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="mbcee88"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="4if5q-0"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="p1298gp"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="lymu4xj"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="a600:rl"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="s24_dh7">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white"
                    data-oid="4jxscmq"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="_pquq.x"
                    >
                        <div className="text-center" data-oid="87_vf_k">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-indigo-900 mb-4"
                                data-oid="hktbjy7"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="rmph6mo"
                            >
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="89xvgp1"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="_cq5_3-"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="7tubw4_"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="z36vco4"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="ld0krsb"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                    data-oid="exhprc6"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                                    data-oid="xmdk272"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="uei5k7g"
                            >
                                <p className="text-gray-700 font-medium" data-oid="a9gy2kq">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="q7u1wl7">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="x7sgvo2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fzzvccr">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="ldtr1t3"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="l7penvg">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="tu5c4ko"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="xkl0r5x"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="_t2r.8h">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="q6b_aj9"
                                >
                                    <span className="text-gray-500" data-oid="9zemmjf">
                                        University Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid=".qbmi8w"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="9q.t6j2"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="-jgdq:-"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="q5fg65z">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="xn-k7.-"
                                >
                                    <span className="text-gray-500" data-oid="weacm03">
                                        College Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="jl6slbf"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="e6fk_.q"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="uwgst5b"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="5m-i.6h">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                                <div
                                    className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center"
                                    data-oid="c3u8tlt"
                                >
                                    <span className="text-gray-500" data-oid="0ym1t:x">
                                        UCL Logo
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                    data-oid="ql2mi_6"
                                >
                                    {' '}
                                    Learn more →{' '}
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="tsscoz:">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="4xi7f:q"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="99kphf3">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="27ykr8-">
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
                <section id="call-for-papers" className="py-20 bg-indigo-50" data-oid="agtlv9t">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="uf.qi52">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="mdxxos6"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="fvinn43">
                            <p className="text-gray-700 mb-6" data-oid="5hf6y-m">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="rtry6a4">
                                <div data-oid="ui9flic">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="p_2xuz:"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="fgfn.fb"
                                    >
                                        <li data-oid="xfshtsl">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="bi_xtjc">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="xh5q_s_">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="q.psogv">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="x6s_.da">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="e2_8pz:">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="2inodxh">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="iirb275">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="a15z7:9">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="ich:2:z"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="tg590z-">
                                        <li className="flex items-start" data-oid="9q6dypj">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="67206sz"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="r9b:b-d">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="yz2g9ek">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="ozgda25"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="99dptn:">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="l7ugqav">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="mcjdpt4"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="509ko6:">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="hqcec1d">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="eti-86c"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="rztfr2t">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="a8286zq">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="nx_-bzr"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="m5bezy4">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-md mb-6" data-oid="3ubvfp:">
                                <h3
                                    className="text-lg font-semibold text-indigo-800 mb-2"
                                    data-oid="5x399.t"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="6vf85lf">
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
                                data-oid="xz4mxz4"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="gdcu-qc">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="dvwvnsl">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="e9qakss"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="wrfxkk:">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="jqo90mk">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="jxl_d:c"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="k-j1qh3">
                                    <li className="flex items-start" data-oid="jvoljxi">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="jt9.7qu"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="nq3vu4d"
                                            />
                                        </svg>
                                        <span data-oid="p3y5yjh">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="uziko8t">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="li65kur"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":4kdy72"
                                            />
                                        </svg>
                                        <span data-oid="au52x-.">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="tcroa_:">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="sk2m8wv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="92zv3pl"
                                            />
                                        </svg>
                                        <span data-oid="pii.n5x">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="rqhf1fk">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fo8wntg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="iqwzh_k"
                                            />
                                        </svg>
                                        <span data-oid="y.ivsj1">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="r.0ygks">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="_:.nj1k"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="14eq7vz"
                                            />
                                        </svg>
                                        <span data-oid="6l5j0z_">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="gj.bi92">
                                    <button
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="4x0v3dn"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="ofgi9vs">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="--k1-f3"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="46ro0k5">
                                    <li className="flex items-start" data-oid="c49nmrf">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="w_qly3r"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ke:meir"
                                            />
                                        </svg>
                                        <span data-oid="4jhbfh1">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="4:chcvs">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="s6yk2x_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ll03vnu"
                                            />
                                        </svg>
                                        <span data-oid="8crsxkc">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="_9x8fq6">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="4dfvi:s"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="4_zvl2x"
                                            />
                                        </svg>
                                        <span data-oid="8mszsab">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="nq.6cxh">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="b5g55-o"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="1r8s:3v"
                                            />
                                        </svg>
                                        <span data-oid="g0mym1q">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=".-b0n-e">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a2m:f42"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="gounzrz"
                                            />
                                        </svg>
                                        <span data-oid="2-d.tpk">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="d:hf6dl">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="y30pnx6"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-indigo-50 p-6 rounded-lg" data-oid="j228arh">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="0zdm6s6"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="xb-don5">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="wy51579"
                            >
                                <li data-oid="uudeatg">Relevance to the conference theme</li>
                                <li data-oid="h.n-rvp">Originality and innovation</li>
                                <li data-oid=":ksqqmc">Theoretical foundation</li>
                                <li data-oid="vbojrr:">Methodological rigor</li>
                                <li data-oid="an7vff5">Clarity of presentation</li>
                                <li data-oid="xol2dy:">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="5bhdz94">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-indigo-50" data-oid="k-7xcz1">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="n2wh6ju">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="i0apy_c"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="xm4j06z">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="mrqwwwe"
                            >
                                <div className="text-center mb-4" data-oid="satk43-">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="5f-48ut"
                                    >
                                        {' '}
                                        Early Bird Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="sz4j8mb">
                                        {' '}
                                        (Until February 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="ys217_q">
                                    <div className="text-center" data-oid="dgyonzx">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid=":clived"
                                        >
                                            {' '}
                                            $250{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="a4838q1"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="1i.4fm9">
                                    <li className="flex items-start" data-oid="dw889xu">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="uytsv7r"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="_f1pobq"
                                            />
                                        </svg>
                                        <span data-oid="l9kniof">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="21qt3sx">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="bd57q7t"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="s3q30d7"
                                            />
                                        </svg>
                                        <span data-oid="1r.i9z:">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="66i_q8m">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="flt404_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="v8khhw1"
                                            />
                                        </svg>
                                        <span data-oid=":5fs50k">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="8bmv89n">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="k-d__f4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="pl2oidp"
                                            />
                                        </svg>
                                        <span data-oid="vu485jb">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="b-3r:kn">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="n::371e"
                                    >
                                        {' '}
                                        Student Rate: $150{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-500 relative"
                                data-oid="gm.fjk."
                            >
                                <div
                                    className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg"
                                    data-oid="gz4gx.v"
                                >
                                    {' '}
                                    Recommended{' '}
                                </div>
                                <div className="text-center mb-4" data-oid="s.ygx4p">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="o5xxn8j"
                                    >
                                        {' '}
                                        Standard Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="3jnbhq1">
                                        {' '}
                                        (February 2 - March 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="ywc2v0a">
                                    <div className="text-center" data-oid="_s2mba-">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="ph99tyh"
                                        >
                                            {' '}
                                            $300{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="f-ca.9o"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="x1ur2ft">
                                    <li className="flex items-start" data-oid="jpgvqw6">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="84n6h:1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="xhpqx:x"
                                            />
                                        </svg>
                                        <span data-oid="4_8.cyg">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="ave6unh">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="o7:2_wk"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="2aj-5f3"
                                            />
                                        </svg>
                                        <span data-oid="r4_k8tv">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="bp2hz44">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="g_j6rga"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="l9y7ry7"
                                            />
                                        </svg>
                                        <span data-oid="w8dmwv6">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="0h9r6qh">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="5c3nq6n"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="5r7tr3c"
                                            />
                                        </svg>
                                        <span data-oid="bjpba.p">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="hzsjd59">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="tqebo1m"
                                    >
                                        {' '}
                                        Student Rate: $200{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="y:wk4_5"
                            >
                                <div className="text-center mb-4" data-oid="_xga:z.">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid=".s4ecu1"
                                    >
                                        {' '}
                                        Late Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="3aq9fsv">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="orqbcds">
                                    <div className="text-center" data-oid="x6u11gq">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="g4ha__d"
                                        >
                                            {' '}
                                            $350{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="0p1jgyw"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="qq3qo0z">
                                    <li className="flex items-start" data-oid="nk.eruo">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="1e2fj45"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="eo8m-lg"
                                            />
                                        </svg>
                                        <span data-oid="rsw576b">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="4mvee2e">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a.ae4vw"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="wse5w.8"
                                            />
                                        </svg>
                                        <span data-oid="ocgu205">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="esni0.d">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="rvd58y8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="7gl474l"
                                            />
                                        </svg>
                                        <span data-oid="frk3s.0">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="9jn8nfk">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="97v555h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ngazd36"
                                            />
                                        </svg>
                                        <span data-oid="pyhi.k7">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="nle8wu7">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="d8r333."
                                    >
                                        {' '}
                                        Student Rate: $250{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="i1p89mk">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="i5d3-y5"
                            >
                                {' '}
                                Additional Options{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="yo:0i6n">
                                <div data-oid="i0v8:ec">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="2naugsm"
                                    >
                                        {' '}
                                        Conference Dinner{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="jdi573v">
                                        $50 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="9c-d7zm">
                                        {' '}
                                        Join us for a special dinner featuring local cuisine and
                                        cultural performances.{' '}
                                    </p>
                                </div>
                                <div data-oid="i1uv9bq">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="9rt303w"
                                    >
                                        {' '}
                                        Cultural Tour{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="j63y_-6">
                                        $40 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="ga:93gy">
                                        {' '}
                                        A guided tour of historical and cultural sites in Hyderabad
                                        (March 18, 2025).{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" data-oid="q14arp2">
                            <button
                                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                data-oid="uhof3r0"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                            <p className="mt-4 text-gray-600" data-oid="8w0uzi6">
                                {' '}
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="u97m6uw"
                                >
                                    {' '}
                                    registration@displacement2025.org{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="1r94ubl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="yphqeel">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="-.mm7oq"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="tc0dv:i">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="fd_-ysw">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="y1_hozo"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="belt-ef">
                                    <div data-oid="47pt9ij">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="14smlqd"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="bamigy.">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="sp1n_7f">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="uul470c"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="1sya2uv">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="q7an74f"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="6k1.si_">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="jwbe8id">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="hjuhtng"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="ptxgtyx">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="58ujm:l"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="so9g3ws">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="yp90_p5">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="odcm1.y"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="ux0h3f6">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="zuzz3kw"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="lqvi-h9">
                                    <div data-oid="2.vaeyw">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="ujve4g9"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                            data-oid="hldcccd"
                                        />
                                    </div>
                                    <div data-oid="p36-0ov">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="ah4wncb"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="_pb43-o"
                                        />
                                    </div>
                                    <div data-oid="m2y.9mv">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="me94fj-"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="e_dysif"
                                        />
                                    </div>
                                    <div data-oid="p9xozcl">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="opqf22q"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="7a5t01i"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="64ll_4d"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="a:6l5ns">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="1:7zk5w"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="scv7b4p">
                                <div data-oid=":rnuc.2">
                                    <p className="text-gray-700 mb-2" data-oid="as_f66:">
                                        <strong data-oid="3-8i96i">University of Hyderabad</strong>
                                        <br data-oid="c2uah8t" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="g:w_l7c" /> Hyderabad, Telangana 500046
                                        <br data-oid="q9ynxoo" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="eck2d:v">
                                        <strong data-oid="45bek97">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="89o617o">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="onlew6f"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="azkm5nu">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="w-b_j.7"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="a-ua4dt"
                                >
                                    <span className="text-gray-500" data-oid="gihhhxh">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-indigo-900 text-white py-12" data-oid="td5bkgw">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="4l_4xve">
                        <div className="grid md:grid-cols-4 gap-8" data-oid="_eq3ccr">
                            <div data-oid="agl4:oe">
                                <h3 className="text-xl font-semibold mb-4" data-oid="j:sqpf6">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-indigo-200" data-oid="ruhodoa">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="esa7v7d">
                                <h3 className="text-lg font-semibold mb-4" data-oid="s7vems5">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="a1la6un">
                                    <li data-oid="_t4rkmo">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="5jkpm6w"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="v-l8bm6">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="be1dctm"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="23-1bzi">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="6c:4yt0"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="0:9vc6v">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="uwcdsw7"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="9rytq6s">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="upswjfi"
                                        >
                                            {' '}
                                            Registration & Fees{' '}
                                        </button>
                                    </li>
                                    <li data-oid="bc7a20u">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="hf_bujj"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="od1_g:0">
                                <h3 className="text-lg font-semibold mb-4" data-oid="o-7bjko">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="bqvwktt">
                                    <li
                                        className="flex items-start"
                                        data-oid="e240z6d"
                                        key="olk-MtuQ"
                                    >
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ao:d:rm"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="4b92yvr"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:info@displacement2025.org"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="ixk6bb6"
                                            key="olk-4GKU"
                                        >
                                            {' '}
                                            info@displacement2025.org{' '}
                                        </a>
                                    </li>
                                    <li
                                        className="flex items-start"
                                        data-oid="83onk9."
                                        key="olk-mYJE"
                                    >
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2x-hk3h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="qoz5gax"
                                            />
                                        </svg>
                                        <span className="text-indigo-200" data-oid="3_nsvjh">
                                            +91 40 2313 XXXX
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="af8ehc8">
                                <h3 className="text-lg font-semibold mb-4" data-oid="_zc:.2b">
                                    Follow Us
                                </h3>
                                <div className="flex space-x-4" data-oid="5a1q5_c">
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="nap2r0i"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="8e8f:cp"
                                        >
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                data-oid="xdvt-52"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="9casj.l"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="f2g3pnw"
                                        >
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                data-oid="zgovxs0"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-indigo-200 hover:text-white"
                                        data-oid="gasrs48"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            data-oid="1a9obbw"
                                        >
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                data-oid="y:e9b7:"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm"
                            data-oid="n3gi08j"
                        >
                            <p data-oid="jvx4e2e">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="sz1_7d.">
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
