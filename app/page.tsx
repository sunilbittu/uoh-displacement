'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid=".3__wz6">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="-mwye0-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nicuze.">
                    <div className="flex justify-between h-16" data-oid="9y_-ycx">
                        <div className="flex items-center" data-oid="9pswcz:">
                            <div className="flex items-center space-x-2" data-oid="7dpsc:h">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    width={100}
                                    height={64}
                                    className="h-16"
                                    data-oid="-2h50ij"
                                />

                                <div className="text-xl font-bold text-red-700" data-oid="umnfc46">
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="6mjgptl">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="eamo7no"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="lu84jl9"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="d5k3pvl"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="kh5.bfk"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="uo8kq07"
                            >
                                {' '}
                                Registration{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="yile0i4">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                                data-oid="n.kobu3"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="wysoiz3"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="ej.u4v2"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="woh5:ia"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="9e9sh1.">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="xnyb_hr">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="ck42z8v"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="sl1n:0p"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="nko28ht"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="lr0_hcc"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="mtybk0d"
                        >
                            {' '}
                            Registration{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="k51_i.4"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="5ip6fgc">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center relative"
                    style={{
                        backgroundImage: 'url("/images/Displacement _20250307_121647_0000.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    data-oid="196fusn"
                >
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        data-oid="pyj-xwp"
                    ></div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                        data-oid="8prvfd3"
                    >
                        <div className="text-center" data-oid="yahxdq5">
                            <div className="flex justify-center mb-6" data-oid="oh-iyis"></div>
                            <h1
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                                data-oid="mo0e139"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="cmito3q"
                            >
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="bhuqwxo"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid=":rqh1ad"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="sefdr.g"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-white max-w-3xl mx-auto mb-10"
                                data-oid="36xmquy"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="j1a1ssm"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                    data-oid="264-npj"
                                >
                                    Register Now
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 bg-transparent border-2 border-yellow-200 text-white rounded-md hover:bg-yellow-400 hover:text-black transition-colors shadow-md"
                                    data-oid="cin2oe4"
                                >
                                    Submit Paper
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                                data-oid="frmcwhp"
                            >
                                <p className="text-gray-700 font-medium" data-oid="43z1b6j">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="z3i-tl8">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="ued8208">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="vo9bo3-">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="94ez.ck"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>

                        {/* Image Gallery */}
                        <div
                            className="mb-16 overflow-hidden rounded-xl shadow-lg"
                            data-oid="m6kp35_"
                        >
                            <div className="grid grid-cols-3 gap-1" data-oid="bdmw_6p">
                                <div className="col-span-1" data-oid="gzdg7nx">
                                    <Image
                                        src="/images/Displacement _20250307_121648_0001.jpg"
                                        alt="Conference Image"
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="dj60g5p"
                                    />
                                </div>
                                <div className="col-span-1" data-oid=".zxin-u">
                                    <Image
                                        src="/images/Displacement _20250307_121648_0002.jpg"
                                        alt="Conference Image"
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="89ol2oy"
                                    />
                                </div>
                                <div className="col-span-1" data-oid="oeqqqe4">
                                    <Image
                                        src="/images/Displacement _20250307_121648_0003.jpg"
                                        alt="Conference Image"
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid=":w4h.m9"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="uxlya9_">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="34h:rep"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="73rp7oi"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="5u34.po">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="7zhm73o"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="b3-h9wx"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="d67wcte">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="bcjgj3i"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="s-sh.1r"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="ugefn05">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="8au8f:k">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="f:ox4ir"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="78asu6f">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="6uuiaze">
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
                <section id="call-for-papers" className="py-20 bg-yellow-50" data-oid="-rrvs..">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="8fc3:ej">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="s8zmoal"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="54_.20-">
                            <div className="mb-8 flex justify-center" data-oid="9efl9ut">
                                <Image
                                    src="/images/Global insecurity and refugee crisis linked to climate change.jpeg"
                                    alt="Displacement Theme"
                                    width={800}
                                    height={320}
                                    className="rounded-lg shadow-md max-h-80 object-cover"
                                    data-oid="u2f3pqm"
                                />
                            </div>
                            <p className="text-gray-700 mb-6" data-oid="rl4_mto">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="a0-tw6t">
                                <div data-oid="7xp84es">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="zdnsf.9"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="7z9u.9c"
                                    >
                                        <li data-oid="_xqdhpn">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="z2d0wxf">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="76nmu2f">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="l.xr3z1">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="5eohu.n">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="j0b8vh5">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="cnb9ort">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="h3wuf28">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="hf0_8uv">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="d010oxl"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="7s.fguv">
                                        <li className="flex items-start" data-oid="qz:3:og">
                                            <span
                                                className="font-medium text-red-600 mr-2"
                                                data-oid="sn06.25"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="x1ugfwn">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="7su_x-n">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="j_id9s2"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="vcvfqyb">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="bkggnjz">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="-wh2wal"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="ga.y3kg">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="qgenodo">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="slykgy3"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="mmmjj75">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="i_dnwb1">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="kn46dr6"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="x4tw0:v">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-md mb-6" data-oid="8.38yzm">
                                <h3
                                    className="text-lg font-semibold text-red-800 mb-2"
                                    data-oid="p4cx:jh"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="l3uvs23">
                                    The conference will feature special sessions on &ldquo;Digital
                                    Displacement in the Age of AI&rdquo; and &ldquo;Climate
                                    Refugees: Policy Challenges and Responses.&rdquo; Submissions
                                    specifically addressing these themes are encouraged.
                                </p>
                            </div>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                data-oid="6v0afkm"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="cup2a7q">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="0ldr-7f">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="ue.6vss"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="flex justify-center mb-10" data-oid="tu2zrz_">
                            <div className="grid grid-cols-2 gap-4 max-w-2xl" data-oid="8:6jg8e">
                                <Image
                                    src="/images/Displacement _20250307_121722_0000.png"
                                    alt="Submission Process"
                                    className="rounded-lg shadow-md"
                                    width={400}
                                    height={256}
                                    data-oid=".2mpk8v"
                                />

                                <Image
                                    src="/images/Displacement _20250307_121722_0001.png"
                                    alt="Submission Process"
                                    className="rounded-lg shadow-md"
                                    width={400}
                                    height={256}
                                    data-oid="45konsg"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="1da930y">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="j2mrnls">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="khpsv9i"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="i5jirkt">
                                    <li className="flex items-start" data-oid="0.1_71r">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="d8t30d_"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="u3z5h6x"
                                            />
                                        </svg>
                                        <span data-oid="g74_gv0">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="8eawjcn">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a_322by"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="js49czo"
                                            />
                                        </svg>
                                        <span data-oid="-god7:6">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="ty7f3or">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9tjgf9d"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="q_8x85q"
                                            />
                                        </svg>
                                        <span data-oid="7gfo2kc">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="s7d7bp4">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":gsejwc"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":_905t-"
                                            />
                                        </svg>
                                        <span data-oid="i8oobbq">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="j7pu62e">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fi9xu:."
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="swxobq1"
                                            />
                                        </svg>
                                        <span data-oid="aixtsmv">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="zphsdm_">
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                        data-oid="k_wq-up"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="vs_ecr7">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="dgt812h"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="p2udd0l">
                                    <li className="flex items-start" data-oid="_.o._16">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="n:bitn8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="jo67w83"
                                            />
                                        </svg>
                                        <span data-oid="6bntif0">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="tp8xeqb">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="zh4x.tk"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="3ob6kkj"
                                            />
                                        </svg>
                                        <span data-oid="3ndxlx1">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="kw0np82">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="_fu61f0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="2rwu2xm"
                                            />
                                        </svg>
                                        <span data-oid="lpqrl_y">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="v6v94a7">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tx1pzd-"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="7fg.m:p"
                                            />
                                        </svg>
                                        <span data-oid="ihe4gqj">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="dwgkllc">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xvsm:ft"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="wncs4qc"
                                            />
                                        </svg>
                                        <span data-oid="-0c5x80">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="3frhigp">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="oycdjrl"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-yellow-50 p-6 rounded-lg" data-oid="t9f1ou4">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="az5rh0p"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="u75c8yr">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="jru8wuu"
                            >
                                <li data-oid="pq31k--">Relevance to the conference theme</li>
                                <li data-oid="dw8-vxs">Originality and innovation</li>
                                <li data-oid="bz3yuv7">Theoretical foundation</li>
                                <li data-oid="jaqf2yn">Methodological rigor</li>
                                <li data-oid="cezgfiy">Clarity of presentation</li>
                                <li data-oid="71sm_25">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="9_4o6_s">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-yellow-50" data-oid="jy__-1e">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e2hiv_x">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="l_ck71v"
                        >
                            {' '}
                            Registration{' '}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="ik1rwaz"></div>

                        <div className="text-center" data-oid="oistn3p">
                            <button
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="in8sgg_"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="u9q211p">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-yv.uuu">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="5_uekgo"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="c8u6n5b">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="8z4--du">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="kia84a4"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="iq5o50w">
                                    <div data-oid="9iza_w-">
                                        <h4
                                            className="font-medium text-red-700 mb-2"
                                            data-oid="7qvbv4q"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="rlb.i27">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="2t58bz5">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="2u1k8y-"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="r10a0eb">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="w1bc.a."
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="wuglbwv">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="c9kmx27">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="efcifts"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="bb:h2d0">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="m3a69gs"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="6ak_wbn">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="1d04st4">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="nk7sz57"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="4u1sqtn">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="5-idb0m"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="uopw1ll">
                                    <div data-oid="ol:j0_.">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid=":qjq7ha"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your name"
                                            data-oid="snibupp"
                                        />
                                    </div>
                                    <div data-oid="vnhb1la">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="xgh1gg9"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid=".v5.pj0"
                                        />
                                    </div>
                                    <div data-oid="se0a7cn">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="olsv2wl"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="vu2:g4f"
                                        />
                                    </div>
                                    <div data-oid="36o3qd7">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="_pg.ppe"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="9whwvfx"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                        data-oid="8gdez9z"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="u8t-jhw">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="6k8x60j"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="7tjc_qq">
                                <div data-oid="r25j4he">
                                    <p className="text-gray-700 mb-2" data-oid="qsdg2wq">
                                        <strong data-oid="89db_a0">University of Hyderabad</strong>
                                        <br data-oid="qeo6fxb" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="bdvy:n_" /> Hyderabad, Telangana 500046
                                        <br data-oid="bbdi.r0" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="qdt8dn-">
                                        <strong data-oid="3nz3zr8">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="h6fu7xz">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="1jn262."
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="psj1nrn">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="jv8wu8_"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-md overflow-hidden shadow-lg"
                                    data-oid="ge5otv0"
                                >
                                    <Image
                                        src="/images/Displacement _20250307_121648_0004.jpg"
                                        alt="University of Hyderabad Campus"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover"
                                        data-oid=":.3dfrw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-black text-white py-12" data-oid=".5l5kgw">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ljso1ap">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="_99dqtn">
                            <div data-oid="sx6fmzw">
                                <div className="flex items-center mb-4" data-oid="u1ep-oh">
                                    <Image
                                        src="/images/logo.webp"
                                        alt="Conference Logo"
                                        width={100}
                                        height={48}
                                        className="h-12 mr-3"
                                        data-oid="vt:p-pl"
                                    />

                                    <h3 className="text-xl font-semibold" data-oid="1-m9zlo">
                                        DISPLACEMENT 2025
                                    </h3>
                                </div>
                                <p className="text-yellow-200" data-oid="j13n3n5">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="wx67m:4">
                                <h3 className="text-lg font-semibold mb-4" data-oid="d-ae3yd">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid=":rdpkbd">
                                    <li data-oid="cs.vy.x">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-yellow-200 hover:text-white"
                                            data-oid="gw1ng80"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="w8d_ob5">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="a-rl6_9"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="j:81.6k">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="93l98ce"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="j.e:-k.">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="6l3t6:l"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="q-9oncd">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="ahe:j.l"
                                        >
                                            {' '}
                                            Registration{' '}
                                        </button>
                                    </li>
                                    <li data-oid=":9hvc27">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="x.zf0qh"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="331ft34">
                                <h3 className="text-lg font-semibold mb-4" data-oid="aqntrfk">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="crrg5tx">
                                    <li className="flex items-start" data-oid="4adc.-j">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="05zfpit"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="2d8izo2"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="i2riw04"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="d5.0gjr">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=":8zuvjm"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="_z.-fn8"
                                            />
                                        </svg>
                                        <span className="text-yellow-200" data-oid="cbkexut">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                            data-oid="3deos2g"
                        >
                            <p data-oid="jjtonzq">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="n8qe55_">
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
