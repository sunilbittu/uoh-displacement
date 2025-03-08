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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="sqa0rxm">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="-psemwm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pd3-ozy">
                    <div className="flex justify-between h-16" data-oid="j:stec-">
                        <div className="flex items-center" data-oid="2udsfez">
                            <div className="flex items-center space-x-2" data-oid="2jll2f3">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="th2q1w."
                                />

                                <div
                                    className="text-xl font-bold text-indigo-800"
                                    data-oid=":p4-d1g"
                                >
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="cppg5rm">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="5-b9qy0"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="iutb8dq"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="nr5k-6f"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="ejnapnq"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="3et365g"
                            >
                                {' '}
                                Registration & Fees{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                                data-oid="anqqn6v"
                            >
                                {' '}
                                Contact{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="72qce6l">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
                                data-oid="bdkzop7"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="bxnfocy"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="dvfn4qh"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="g7jxbcx"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="lbl3aji">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="7sj-f:3">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="px3fs17"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid=":rqdag:"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="j4po27o"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="2rd4wls"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="of80r1p"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                            data-oid="hw28d.s"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="2pa:duo">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white"
                    data-oid="2tn4.1x"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="sn18-bv"
                    >
                        <div className="text-center" data-oid="av004dj">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-indigo-900 mb-4"
                                data-oid="6ivx6l0"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="69y93i5"
                            >
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="thbf_63"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="qxupt2c"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    data-oid="z8ygmax"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="a_:zb2."
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="iqcxpwq"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                    data-oid="-h588t6"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
                                    data-oid="qc8n_0s"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="u2es_:b"
                            >
                                <p className="text-gray-700 font-medium" data-oid="uifxmxs">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="11ax4ay">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="to.zzpg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="hjuu_jt">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="wd6nm83"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="es:_qoj">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid=":ljv21m"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="piab1zy"
                                    key="olk-RMVR"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="aye0v7w" key="olk-ChEd">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="5udc4z:"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="6dv00zl"
                                    key="olk-ZfL_"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid=":x8daio" key="olk-NkxM">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="486so1m"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="czp8grp"
                                    key="olk-SODT"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="-gkyr9h" key="olk--cDM">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="l2279uw">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="y4reccu"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="tz.h6v7">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="co:2iia">
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
                <section id="call-for-papers" className="py-20 bg-indigo-50" data-oid="g2yv3.2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="g_uonxo">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="7mqp753"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="-1e3cni">
                            <p className="text-gray-700 mb-6" data-oid="s9au3ys">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="y9p6b3m">
                                <div data-oid="qxcrzfq">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="g6oqu9:"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="ob9p-0m"
                                    >
                                        <li data-oid="kk0i2a1">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="7er1xlm">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="gkg7qj5">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="5_g-88l">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="1vlnved">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="izzpub6">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="uqtjb:s">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="m15taoa">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="ju26y9x">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="-5-mlhv"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="d7:pvgm">
                                        <li className="flex items-start" data-oid="xr28vt:">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="rragihk"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="kdbvi8q">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid=".6qj5fx">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="tpu9.po"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="blcwudg">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid=".on2xet">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="3evd_uv"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="18yl1bc">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="f8u28ar">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="mmwkz:9"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="qe15.jh">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="ic.dwfi">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="8db3qxi"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid=".0jb9:-">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-md mb-6" data-oid=":n_bqev">
                                <h3
                                    className="text-lg font-semibold text-indigo-800 mb-2"
                                    data-oid="z8tu_0j"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="e_i6.4c">
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
                                data-oid="ukgy9vs"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="wci6fum">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="mbqazhz">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="0t:3q63"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="qll2b97">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="1wphicu">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="eywimel"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="afk:7s:">
                                    <li className="flex items-start" data-oid="yexy0ii">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9a4tv5_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="qp.5t35"
                                            />
                                        </svg>
                                        <span data-oid="95_p3cm">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="9vo8x_r">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fm3d:po"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="hl_oer4"
                                            />
                                        </svg>
                                        <span data-oid="eb-d.g6">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="6w5l.:x">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="hnvbxxd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="3r-s3uu"
                                            />
                                        </svg>
                                        <span data-oid="lqle_5y">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="_qunf9c">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="p:j-el8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="hed3n2e"
                                            />
                                        </svg>
                                        <span data-oid=".08xzrq">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="jw4n263">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="qheowp7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="bzzri37"
                                            />
                                        </svg>
                                        <span data-oid="t-0gab1">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="tedlcc0">
                                    <button
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="06hypt_"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid=":0i-7-8">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="-irmgg."
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="cxtjiau">
                                    <li className="flex items-start" data-oid="xl-fmi7">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="3homtw:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="9jepxcr"
                                            />
                                        </svg>
                                        <span data-oid="skk3c7q">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="pc4._qq">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="6gr-ihy"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="jeybgd1"
                                            />
                                        </svg>
                                        <span data-oid="5hym291">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":of06bm">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="..cn4v:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="jvetpcw"
                                            />
                                        </svg>
                                        <span data-oid="ju-4ndq">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="sb1at1y">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xp9elio"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="9.7kkma"
                                            />
                                        </svg>
                                        <span data-oid="huxijzl">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="lk0bzl:">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="5xb6cc_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="35ffumv"
                                            />
                                        </svg>
                                        <span data-oid="m3xoewv">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="pnb99a6">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="mehdty4"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-indigo-50 p-6 rounded-lg" data-oid="l5xizmh">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="9fgyf1p"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="sc6xg5e">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="np2vsuk"
                            >
                                <li data-oid="och7o9b">Relevance to the conference theme</li>
                                <li data-oid="m.:x05g">Originality and innovation</li>
                                <li data-oid="pv27el:">Theoretical foundation</li>
                                <li data-oid="87v14d7">Methodological rigor</li>
                                <li data-oid="vc7vpt1">Clarity of presentation</li>
                                <li data-oid="zcs1n0:">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="wtevgtr">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-indigo-50" data-oid="bjuprtx">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="5nsj4o_">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="j-3jk.w"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="unc423q">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="_hhzglq"
                            >
                                <div className="text-center mb-4" data-oid="wsjc7x5">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="k-2z8ia"
                                    >
                                        {' '}
                                        Early Bird Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="gzvv:c3">
                                        {' '}
                                        (Until February 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="k2uuiq3">
                                    <div className="text-center" data-oid="40wgewj">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="2awj.dz"
                                        >
                                            {' '}
                                            $250{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="ej0.nue"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="_ef3ck7">
                                    <li className="flex items-start" data-oid="93xousz">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".al.8m-"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="7:o36xg"
                                            />
                                        </svg>
                                        <span data-oid="_ykdd5w">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="5cij:s0">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="thjt9yu"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="22lc9pa"
                                            />
                                        </svg>
                                        <span data-oid="y4:ra8u">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="l0ge3nz">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="vtpihnx"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="ienivps"
                                            />
                                        </svg>
                                        <span data-oid="6-xjmi9">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="0q:m-h9">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":pcbq8r"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="m0.l:_k"
                                            />
                                        </svg>
                                        <span data-oid="6lmto7o">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="-uga3as">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid=".k_tgno"
                                    >
                                        {' '}
                                        Student Rate: $150{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-500 relative"
                                data-oid="w9g63jx"
                            >
                                <div
                                    className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg"
                                    data-oid="bxpq_l:"
                                >
                                    {' '}
                                    Recommended{' '}
                                </div>
                                <div className="text-center mb-4" data-oid="yadcwcj">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="7p668ha"
                                    >
                                        {' '}
                                        Standard Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="nthoyl6">
                                        {' '}
                                        (February 2 - March 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="-pvmdlq">
                                    <div className="text-center" data-oid="1pnph_b">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="oi4_e_a"
                                        >
                                            {' '}
                                            $300{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="4ry3r1a"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="9xxcy9x">
                                    <li className="flex items-start" data-oid="e_rsjzp">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="0_dn3g1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="bes3x-b"
                                            />
                                        </svg>
                                        <span data-oid="0wn.aa4">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="jsxjqwu">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2bgpwc1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="h4me.vf"
                                            />
                                        </svg>
                                        <span data-oid="s-vrjep">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="2hf089h">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="bxjiop3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="0uax5u2"
                                            />
                                        </svg>
                                        <span data-oid="r9vciyo">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="tv99c7p">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="pchg:_h"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="51-03qj"
                                            />
                                        </svg>
                                        <span data-oid="xa14pb5">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="pij6izi">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="z7mno-n"
                                    >
                                        {' '}
                                        Student Rate: $200{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="hlew656"
                            >
                                <div className="text-center mb-4" data-oid="22jtzhf">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="6b7o9lb"
                                    >
                                        {' '}
                                        Late Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="c1:p4mi">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="4w2a-ms">
                                    <div className="text-center" data-oid="dfl93ac">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="uke_66y"
                                        >
                                            {' '}
                                            $350{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="m4lbl1v"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="i.cdal6">
                                    <li className="flex items-start" data-oid="sms4ycl">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fp.larh"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="fao1w7v"
                                            />
                                        </svg>
                                        <span data-oid="55l5udu">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="sj8x:q-">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="wy2-g1j"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="x9:omck"
                                            />
                                        </svg>
                                        <span data-oid=":5oubuz">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="w8lc..t">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="zierpmt"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="zccdno5"
                                            />
                                        </svg>
                                        <span data-oid="3kk10b:">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="zg_5x87">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2o.-b44"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="1yv:dm:"
                                            />
                                        </svg>
                                        <span data-oid="ut-o005">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="l2ul85e">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="5abeujf"
                                    >
                                        {' '}
                                        Student Rate: $250{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="k9e.bdc">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid=":qt95bt"
                            >
                                {' '}
                                Additional Options{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="nzppnd2">
                                <div data-oid="x3pal4-">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="_dq8fsy"
                                    >
                                        {' '}
                                        Conference Dinner{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="udv4r.q">
                                        $50 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="vpv8dxx">
                                        {' '}
                                        Join us for a special dinner featuring local cuisine and
                                        cultural performances.{' '}
                                    </p>
                                </div>
                                <div data-oid="4zo3:aw">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="22dmyc0"
                                    >
                                        {' '}
                                        Cultural Tour{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid=".yw_y6s">
                                        $40 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="pqqu_f9">
                                        {' '}
                                        A guided tour of historical and cultural sites in Hyderabad
                                        (March 18, 2025).{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" data-oid=":.7o08q">
                            <button
                                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                                data-oid="vqh.99o"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                            <p className="mt-4 text-gray-600" data-oid="m1b43y1">
                                {' '}
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="lalqur7"
                                >
                                    {' '}
                                    registration@displacement2025.org{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="ym.g330">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="vqzz:4k">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="csjwqqt"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="jel6ulm">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="jrjnrj6">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="61ax8k_"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="1su0.vb">
                                    <div data-oid="p3g715.">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="fwg0v4o"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="dzko5tq">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="_1irp8l">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="0jwe1_e"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="533gph4">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="nfk9x:u"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="_3xrhca">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="02s-ap6">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="pcqy:.z"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="evqa2he">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="tb6z0xr"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="z9cfp74">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="9.ia.lv">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="crgr:5o"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="n-u5p00">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="a-qt5jk"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="gbn8mgf">
                                    <div data-oid="l0-mcbz">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="nahvpwx"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                            data-oid="92aj8wj"
                                        />
                                    </div>
                                    <div data-oid="7m39q_-">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="9gtyfeb"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="5a5w0bs"
                                        />
                                    </div>
                                    <div data-oid="1gib574">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="3azvw8z"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="qvqxrm-"
                                        />
                                    </div>
                                    <div data-oid="4f8b8qn">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="lr8a_a."
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="g-3v7ao"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="h:s7138"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid="9gc7qfy">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="-my9ymh"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="behzorr">
                                <div data-oid="o4r5ehs">
                                    <p className="text-gray-700 mb-2" data-oid="59p-7px">
                                        <strong data-oid="fano1tp">University of Hyderabad</strong>
                                        <br data-oid="85u_9p4" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="pk1q9gl" /> Hyderabad, Telangana 500046
                                        <br data-oid=":828:t1" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="-e.d5.s">
                                        <strong data-oid=".lre_5d">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="7l9-l.6">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid=".xvon6n"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="cn4v6rs">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="s2w1f_q"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="l405:e:"
                                >
                                    <span className="text-gray-500" data-oid="uk14.lx">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-indigo-900 text-white py-12" data-oid="qmeej18">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ywq-dhs">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="0_j44dr">
                            <div data-oid="lcmoqvj">
                                <h3 className="text-xl font-semibold mb-4" data-oid="yhs_:m:">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-indigo-200" data-oid="jsai7b9">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="dgxn.c_">
                                <h3 className="text-lg font-semibold mb-4" data-oid="qgaeckr">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="17di7ln">
                                    <li data-oid="o-8a1yz">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="card2td"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="o0_nc31">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="9.5y:3i"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="r-y0rk3">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="q:-b8gw"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid=":cn65.l">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="nkir6pa"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid=":p-v3qj">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="m:bhqfq"
                                        >
                                            {' '}
                                            Registration & Fees{' '}
                                        </button>
                                    </li>
                                    <li data-oid="_8_wyfi">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="up1m9:q"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="h3gakij">
                                <h3 className="text-lg font-semibold mb-4" data-oid="p-._gye">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="d-sec_z">
                                    <li className="flex items-start" data-oid=":ecwfsp">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="lkhpokg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="rdsbh6_"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="aski7gb"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid=":442c.r">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":lg_tej"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="c6pyvnc"
                                            />
                                        </svg>
                                        <span className="text-indigo-200" data-oid="p-oedd7">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm"
                            data-oid="nddt1ia"
                        >
                            <p data-oid="u:7ka1y">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="jqg3cl9">
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
