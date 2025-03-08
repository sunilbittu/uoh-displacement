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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="j:2c64g">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="-1dmxnh">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a8gxitl">
                    <div className="flex justify-between h-16" data-oid="wxpk4of">
                        <div className="flex items-center" data-oid="59e_.p9">
                            <div className="flex items-center space-x-2" data-oid="rt_-19n">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    width={64}
                                    height={64}
                                    className="h-16"
                                    data-oid="0aiq.m."
                                />

                                <div className="text-xl font-bold text-red-700" data-oid="8dp5bgn">
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="bdigfqx">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="74bivq-"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="8::e.9i"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="4310qza"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="8:q5r6q"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="q7y0sh2"
                            >
                                {' '}
                                Registration{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="ua8gkkh">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                                data-oid="-osym3w"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="0optsq:"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="1j1:e30"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="m6egv2b"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="8j7_6hd">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="n4.buxz">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="o_-p5zk"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="tti8-s_"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="26.n7em"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="g0bxlzq"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="y2.y.uv"
                        >
                            {' '}
                            Registration{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="jo2eg7x"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="e9hz997">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center relative"
                    style={{
                        backgroundImage: 'url("/images/Displacement _20250307_121647_0000.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    data-oid="yj1zcoy"
                >
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        data-oid="deq6sko"
                    ></div>
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                        data-oid="b-9y6hp"
                    >
                        <div className="text-center" data-oid="dbom4e0">
                            <div className="flex justify-center mb-6" data-oid="fpor3q1"></div>
                            <h1
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                                data-oid="nzx4p7e"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="srr.mdb"
                            >
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="_60y6ip"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="639mhmx"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium"
                                    data-oid="a4e4b58"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-white max-w-3xl mx-auto mb-10"
                                data-oid="i3b6qt4"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="bx-qsza"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                    data-oid="-t6ptlm"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border-2 border-yellow-300 text-white bg-transparent rounded-md hover:bg-yellow-500 hover:text-black transition-colors font-medium"
                                    data-oid="z7bwtku"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                                data-oid="h:3xe7k"
                            >
                                <p className="text-gray-700 font-medium" data-oid="-.ijx8m">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="io6db_9">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="9f4sh7e">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="23bel85">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="rx4bmhm"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>

                        {/* Image Gallery */}
                        <div
                            className="mb-16 overflow-hidden rounded-xl shadow-lg"
                            data-oid="yb8q.65"
                        >
                            <div className="grid grid-cols-3 gap-1" data-oid="ohxnnju">
                                <div className="col-span-1" data-oid="z7klk3_">
                                    <Image
                                        src="/images/Displacement _20250307_121648_0001.jpg"
                                        alt="Conference Image"
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="the0s-l"
                                    />
                                </div>
                                <div className="col-span-1" data-oid="sljka1i">
                                    <Image
                                        src="/images/Displacement _20250307_121648_0002.jpg"
                                        alt="Conference Image"
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="k9gcxa8"
                                    />
                                </div>
                                <div className="col-span-1" data-oid="o49d_ut">
                                    <Image
                                        src="/images/Displacement _20250307_121648_0003.jpg"
                                        alt="Conference Image"
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                        data-oid="r.9fah5"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="_66gfy9">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="0g_lfcd"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="_ya4eya"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="ffwsr:2">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="n3nnnfv"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="zi34rex"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="iwhel.o">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="nuv:de."
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="0ev3283"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="8s.nwdx">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="av4::wk">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="-l3s6_v"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="mz74jgy">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="bgu2.p4">
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
                <section id="call-for-papers" className="py-20 bg-yellow-50" data-oid="e-sqiw9">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e9qv31r">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="_0zzg_0"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="73_bu71">
                            <div className="mb-8 flex justify-center" data-oid="p6zrb6k">
                                <Image
                                    src="/images/Global insecurity and refugee crisis linked to climate change.jpeg"
                                    alt="Displacement Theme"
                                    width={800}
                                    height={320}
                                    className="rounded-lg shadow-md max-h-80 object-cover"
                                    data-oid="shw29ir"
                                />
                            </div>
                            <p className="text-gray-700 mb-6" data-oid=".jjddw7">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="i_oe7qs">
                                <div data-oid="35g:.57">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="x0u5zup"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="9d0mf3s"
                                    >
                                        <li data-oid="0vv.rv:">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="bm48i3j">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="1o6yz8f">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="n4587mg">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="325am8l">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="39aorxp">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="q-ft3d_">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="cc82m-b">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="9aikq_n">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="rkr.svb"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="jq4ft.m">
                                        <li className="flex items-start" data-oid="o1tz874">
                                            <span
                                                className="font-medium text-red-600 mr-2"
                                                data-oid="lu5lygz"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="alguf4x">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="xka89ii">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="vdpocwo"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="075sv1:">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="kp6jgy6">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="q8neuj4"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="6_0ztkv">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="-rkj6wr">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="xmnmyps"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="pavwkub">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="wd13kmk">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="d8o-4cs"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="ltyzn8s">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-md mb-6" data-oid="ujtzxli">
                                <h3
                                    className="text-lg font-semibold text-red-800 mb-2"
                                    data-oid="1.1p0xl"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="fhnwgyt">
                                    The conference will feature special sessions on &ldquo;Digital
                                    Displacement in the Age of AI&rdquo; and &ldquo;Climate Refugees: Policy
                                    Challenges and Responses.&rdquo; Submissions specifically addressing
                                    these themes are encouraged.
                                </p>
                            </div>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                data-oid="43vh-gh"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="141pj5k">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="j13m:6i">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="9teu1jz"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="flex justify-center mb-10" data-oid="koxm-h7">
                            <div className="grid grid-cols-2 gap-4 max-w-2xl" data-oid="uswsi7x">
                                <Image
                                    src="/images/Displacement _20250307_121722_0000.png"
                                    alt="Submission Process"
                                    className="rounded-lg shadow-md"
                                    width={400}
                                    height={256}
                                    data-oid="xkhj2s1"
                                />

                                <Image
                                    src="/images/Displacement _20250307_121722_0001.png"
                                    alt="Submission Process"
                                    className="rounded-lg shadow-md"
                                    width={400}
                                    height={256}
                                    data-oid="ths_fyr"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="d1otpm-">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="p2uspgm">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="5zrm9rp"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="-t-r457">
                                    <li className="flex items-start" data-oid="6vodpct">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="7jrq-0j"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="v:7v0-z"
                                            />
                                        </svg>
                                        <span data-oid="1didh72">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="7spxy56">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ol77g4l"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="5-s_3.f"
                                            />
                                        </svg>
                                        <span data-oid="w1rf2ht">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="g5b2uj6">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="nzbvubj"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="kbeuoql"
                                            />
                                        </svg>
                                        <span data-oid="l5wgg21">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="26nz31e">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="w3gdff3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="epp_v-1"
                                            />
                                        </svg>
                                        <span data-oid="ly63r6o">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="v8givwn">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="mewuz8o"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="aeu913j"
                                            />
                                        </svg>
                                        <span data-oid="-rp81tu">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid=".l-11:.">
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                        data-oid="azctgqa"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="fcxt_-7">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="fa2lv2k"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="h74kvk9">
                                    <li className="flex items-start" data-oid="_80-vzy">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="oqh.4q4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="-2kq.-x"
                                            />
                                        </svg>
                                        <span data-oid="rahy6e:">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="7uy6549">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ngrc5m9"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="umcl9tf"
                                            />
                                        </svg>
                                        <span data-oid="67oik4w">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":qmjg.i">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="v:yqovs"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="p4dpr-t"
                                            />
                                        </svg>
                                        <span data-oid="gh5ea9g">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="pklp9:h">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="7keca0p"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="dsa74og"
                                            />
                                        </svg>
                                        <span data-oid="vhuv3o7">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="0ho0jq_">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="x--37mq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="88y.mpg"
                                            />
                                        </svg>
                                        <span data-oid="ysgssz_">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="aoxyf-4">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="e_8-vyp"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-yellow-50 p-6 rounded-lg" data-oid="pg93oqz">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="iq8yx16"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="tfmzj51">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="i55bjqt"
                            >
                                <li data-oid="_9fdkbw">Relevance to the conference theme</li>
                                <li data-oid="_tibprv">Originality and innovation</li>
                                <li data-oid="p-06zl5">Theoretical foundation</li>
                                <li data-oid="-:decfo">Methodological rigor</li>
                                <li data-oid="4tsvf-e">Clarity of presentation</li>
                                <li data-oid="6gbhxoc">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="528wxvo">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-yellow-50" data-oid="5iayqkc">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7z-xhea">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="b-pq45."
                        >
                            {' '}
                            Registration{' '}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="ezdq906"></div>

                        <div className="text-center" data-oid="vt5:dbn">
                            <button
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="zzi.7wp"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="0r1tv61">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="aag79qg">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="vqnwk.-"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="8umh4hg">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="2izx-v2">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="i5su1wu"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="ljr0jsp">
                                    <div data-oid="jysxyve">
                                        <h4
                                            className="font-medium text-red-700 mb-2"
                                            data-oid="2flztku"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="k4v5v2f">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="d0nk8:r">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="rk_5bxh"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="losi.zh">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="lgod4jz"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="qyimp-p">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="xqz:6fh">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="jmrjmj8"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="xevmqp3">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="3l:k6tf"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="4:1ne90">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="-7e4wyp">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="ytjj:av"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="scev96d">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="79cjny4"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="q4o63v7">
                                    <div data-oid="lizc2zu">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="5s.x5-9"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your name"
                                            data-oid="4tr:m7a"
                                        />
                                    </div>
                                    <div data-oid="j2j19di">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="_.-se-x"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="8vz5w1n"
                                        />
                                    </div>
                                    <div data-oid="o0rd1_l">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="zv_yuzo"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="e-pp6-w"
                                        />
                                    </div>
                                    <div data-oid="3mxco.3">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="mpuei8t"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="wn3gqui"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                        data-oid="oc2_r49"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="e_yi3i0">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="nn:devl"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="sbk_ezp">
                                <div data-oid="dm5i:nr">
                                    <p className="text-gray-700 mb-2" data-oid="8vwa.ns">
                                        <strong data-oid="m.xtjsz">University of Hyderabad</strong>
                                        <br data-oid="yfwy5-f" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="43qc-ax" /> Hyderabad, Telangana 500046
                                        <br data-oid="9svn45u" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="n1i4pr6">
                                        <strong data-oid="58gftwe">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="24wnu4l">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="2l:0a76"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="hcbkcxj">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="ynmcbh1"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="rounded-md overflow-hidden shadow-lg"
                                    data-oid="7uon6ag"
                                >
                                    <Image
                                        src="/images/Displacement _20250307_121648_0004.jpg"
                                        alt="University of Hyderabad Campus"
                                        width={800}
                                        height={256}
                                        className="w-full h-64 object-cover"
                                        data-oid="bo7tb3."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-black text-white py-12" data-oid="qqa13or">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="aawb6_t">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="a:n.9ac">
                            <div data-oid="uvh7y:.">
                                <div className="flex items-center mb-4" data-oid="zleaea6">
                                    <Image
                                        src="/images/logo.webp"
                                        alt="Conference Logo"
                                        width={48}
                                        height={48}
                                        className="h-12 mr-3"
                                        data-oid="on:b_ox"
                                    />

                                    <h3 className="text-xl font-semibold" data-oid="v42qacz">
                                        DISPLACEMENT 2025
                                    </h3>
                                </div>
                                <p className="text-yellow-200" data-oid="0svm06p">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="wa3bub9">
                                <h3 className="text-lg font-semibold mb-4" data-oid="ftkjsme">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="ozl3i74">
                                    <li data-oid="ck48r52">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-yellow-200 hover:text-white"
                                            data-oid="4v3dilc"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="yktjp9v">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="9mjf2j."
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="ydg4hdt">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="yqqc_26"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="d38gpij">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="f790drd"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="jod3y94">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="7s.cnsa"
                                        >
                                            {' '}
                                            Registration{' '}
                                        </button>
                                    </li>
                                    <li data-oid="nsv0n9h">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="-rq9zie"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="83:mzrn">
                                <h3 className="text-lg font-semibold mb-4" data-oid=":4nw9c:">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="6atr6vd">
                                    <li className="flex items-start" data-oid="3kcuyio">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="u0_som:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="kp02g3e"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="i6mctpu"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="-d_6n8v">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="hanjcqz"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid=".c6kap3"
                                            />
                                        </svg>
                                        <span className="text-yellow-200" data-oid="_r_p56z">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                            data-oid="9t-0zi5"
                        >
                            <p data-oid="f_uz9as">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="a8a3sgq">
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
