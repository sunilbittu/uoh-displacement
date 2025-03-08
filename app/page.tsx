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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="7hg4f8z">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="uuryejr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1abw49c">
                    <div className="flex justify-between h-16" data-oid="hn68cns">
                        <div className="flex items-center" data-oid="x.p-80s">
                            <div className="flex items-center space-x-2" data-oid="qyklvso">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="pyw4rbk"
                                />

                                <div className="text-xl font-bold text-red-700" data-oid="ydak7uy">
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="xczx:9s">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="c0f2ob-"
                                key="olk-WvTG"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="4t0ntfs"
                                key="olk-Ir43"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="i:cz_is"
                                key="olk-HHAC"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="fbm8bej"
                                key="olk-aHET"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="w53ll0u"
                                key="olk-t4YZ"
                            >
                                {' '}
                                Registration{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="-y8v:-7">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                                data-oid="ca2tjno"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="jp8e41g"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="612syxb"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="vju1wzs"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="srualq:">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="36nuqd1">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="scmjnr-"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="-oc8.iy"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="53vb0n:"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="14:4l-b"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="iz:ahoq"
                        >
                            {' '}
                            Registration{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="mp.h0kx"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="q71q_r0">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-white"
                    data-oid="hsfj74t"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="kfnu:t3"
                    >
                        <div className="text-center" data-oid="0g.g-89">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-black mb-4"
                                data-oid="hyigdu2"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="76048p."
                            >
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="fwfuwyj"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="q9o5a1l"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="08syuxz"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="sdd5_1o"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="iqkq:53"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                    data-oid="le5d:al"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-black text-black rounded-md hover:bg-yellow-50 transition-colors"
                                    data-oid="lumly35"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="07g83qu"
                            >
                                <p className="text-gray-700 font-medium" data-oid="ghxu1hs">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="ak:sprp">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="hww-jss">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s3b6__3">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="n5v-8yq"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="apco868">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="..ybt40"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="bcybpe5"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="9c5mxor">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid=".-0.v-z"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="zpo4goj"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="lz3gv35">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="9j14myd"
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="sdlmozd"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="gjg..62">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="3.wlo4g">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="edb9s2j"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="53itlg1">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="r176cdj">
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
                <section id="call-for-papers" className="py-20 bg-yellow-50" data-oid="spz:ixx">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="anma-o7">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid=":07-gnw"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="s07krm.">
                            <p className="text-gray-700 mb-6" data-oid="0hkh_us">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="u4twskr">
                                <div data-oid="-4v6kge">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="p3q48c."
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="ik_7t9j"
                                    >
                                        <li data-oid="yzge13r">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="u1aybw8">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="485d0la">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="j4zzrb2">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="u1mpsq5">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="jpnf09:">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="zfu15.a">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="_np0ur1">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="3tjhvqm">
                                    <h3
                                        className="text-lg font-semibold text-red-800 mb-3"
                                        data-oid="wn1zh22"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="peql:g:">
                                        <li className="flex items-start" data-oid="h0xa-t2">
                                            <span
                                                className="font-medium text-red-600 mr-2"
                                                data-oid="43_c8xq"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="tj6irim">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="my701ws">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid=".m4fo1c"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="p.6pak-">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="qam2zee">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="6__uxrk"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="_3e6p42">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="q6n1.:w">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="4flwm90"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="bpd.el5">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="4qk4e04">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="paxeebm"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="ynzdy08">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-md mb-6" data-oid="z1.aek-">
                                <h3
                                    className="text-lg font-semibold text-red-800 mb-2"
                                    data-oid="tc:25y5"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="aijz2_2">
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
                                data-oid="ntuh6:y"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid=":nfw-::">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1:xz-m_">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="hcyxii7"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid=":::2bv_">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="ylerkdh">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="nhhdj6-"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="nbdi8pa">
                                    <li className="flex items-start" data-oid="5ovovvk">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="nc50u9y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="5d499ie"
                                            />
                                        </svg>
                                        <span data-oid="owssdxy">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="g_8k56l">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="t9ynnci"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="n0kbffv"
                                            />
                                        </svg>
                                        <span data-oid="603ihkm">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="fi4m8:x">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="6hy:uug"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="v7_a517"
                                            />
                                        </svg>
                                        <span data-oid="g5xlxvk">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid=":3lyrj4">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xft._tt"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":tr0dk1"
                                            />
                                        </svg>
                                        <span data-oid="wrcofcc">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="04kpj7q">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="-gbrurv"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=".cudsit"
                                            />
                                        </svg>
                                        <span data-oid="u7.fey4">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="sbl0au:">
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                        data-oid="12j7tst"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="8kdr1zx">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="8dyykj6"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="qywp6hb">
                                    <li className="flex items-start" data-oid="k_ym77m">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a2ve0we"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="ixwdvxv"
                                            />
                                        </svg>
                                        <span data-oid="-12kt.b">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="441hnrg">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="teix5vf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="o98it3."
                                            />
                                        </svg>
                                        <span data-oid="bgtz7lf">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="sz3t1-r">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".::gzup"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="8--rf72"
                                            />
                                        </svg>
                                        <span data-oid="prtr:wx">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="vo1m8.o">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="_3hckzr"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="om9hcve"
                                            />
                                        </svg>
                                        <span data-oid=".hga.r:">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="e6bpt-t">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="3ome6:r"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="v8stc6f"
                                            />
                                        </svg>
                                        <span data-oid="c1676t.">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="m_cd97p">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="acb._1o"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-yellow-50 p-6 rounded-lg" data-oid="wrxbiz2">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="qmwe1_g"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="e:0_twa">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="i:r2n8p"
                            >
                                <li data-oid="mxe_:ei">Relevance to the conference theme</li>
                                <li data-oid="4wabugg">Originality and innovation</li>
                                <li data-oid="6q-nc4b">Theoretical foundation</li>
                                <li data-oid="qmx8m8d">Methodological rigor</li>
                                <li data-oid="7eo5bf9">Clarity of presentation</li>
                                <li data-oid="tszyp9t">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="9ztznre">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-yellow-50" data-oid="xbbfls4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="z.k46ia">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="s5udk47"
                            key="olk-aanJ"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>

                        <div className="text-center" data-oid="4cc5seo" key="olk-V27W">
                            <button
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="gilem8m"
                                key="olk-ECsE"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                        </div>
                        <p className="w-[30px] h-[30px]" data-oid="kor4b_s" key="olk-ZvzN"></p>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="uhqlxmn">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="gz-khj:">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="dpm289d"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="pd:d6tu">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="9bgwtt4">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="ayetxhh"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="rnyib5s">
                                    <div data-oid="_:06xxt">
                                        <h4
                                            className="font-medium text-red-700 mb-2"
                                            data-oid="xsk9b9x"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="gbsklqa">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="4q:iesf">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="q8meh.h"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="e-o.9u6">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="w:vu-nb"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="i338k0f">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="dvv513_">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="p-9tpso"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="6lfgxyp">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="nk5oo72"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="ux4k01b">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="t:66hyd">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="mk.gjud"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="p:krg:d">
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="p6pvl3t"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="zu1ub-g">
                                    <div data-oid="dy:1uox">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="ehz4z2s"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your name"
                                            data-oid="q9ra9at"
                                        />
                                    </div>
                                    <div data-oid="xu:q1in">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="vobq79d"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="xj6x88z"
                                        />
                                    </div>
                                    <div data-oid="6ytdr7c">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="5_l-oou"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="k4xfi1b"
                                        />
                                    </div>
                                    <div data-oid="50lgn_e">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="eiqgcu0"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="h.4v3a7"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="50luj67"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="ad_klcx">
                            <h3
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="vmu_tp6"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="oz64:2v">
                                <div data-oid="r83ukpe">
                                    <p className="text-gray-700 mb-2" data-oid="lo10fmc">
                                        <strong data-oid="1ahgyky">University of Hyderabad</strong>
                                        <br data-oid="-94.her" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="s5wuos-" /> Hyderabad, Telangana 500046
                                        <br data-oid="51kqkbk" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="cn0t8ni">
                                        <strong data-oid="3c943ze">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="b.c759s">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="d1:1a.n"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="nq0g0ls">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="ho_a:z9"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="cm7lpg8"
                                >
                                    <span className="text-gray-500" data-oid="_z4z8w1">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-black text-white py-12" data-oid="kcv4ofr">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="75zrfw5">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="auw96ll">
                            <div data-oid="p.rn:o3">
                                <h3 className="text-xl font-semibold mb-4" data-oid="pfv7v4y">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-yellow-200" data-oid="4_2lsv5">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="eamnxo4">
                                <h3 className="text-lg font-semibold mb-4" data-oid="fjmm_1z">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="5vw5lz3">
                                    <li data-oid="k:y5s-u">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-yellow-200 hover:text-white"
                                            data-oid="am.5cos"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid=":p2a40o">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid=":.e57z_"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="jdk4:tf">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="ch-c4yi"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="7_4n8-o">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="ljipnms"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="jh_x0ts">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="f:p4q4b"
                                        >
                                            {' '}
                                            Registration{' '}
                                        </button>
                                    </li>
                                    <li data-oid="knqczd8">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="9-8thgt"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="2m7srx9">
                                <h3 className="text-lg font-semibold mb-4" data-oid="r0zcpkf">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="qltg5pu">
                                    <li className="flex items-start" data-oid="rbgo656">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="9j9w_46"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="r3d48z-"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="q:y1ruc"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="hqse6k4">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="fvgeet1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="_3u74:z"
                                            />
                                        </svg>
                                        <span className="text-yellow-200" data-oid=".3-l8hf">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                            data-oid="r.zph12"
                        >
                            <p data-oid="vn714pr">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="l8p72ky">
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
