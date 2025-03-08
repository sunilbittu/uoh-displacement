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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="8goo:.u">
            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-md z-50" data-oid="ikfopy1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="a4wu0vw">
                    <div className="flex justify-between h-16" data-oid="-a81m.i">
                        <div className="flex items-center" data-oid="np_i75t">
                            <div className="flex items-center space-x-2" data-oid="uj03iwn">
                                <img
                                    src="/images/logo.webp"
                                    alt="Conference Logos"
                                    className="h-16"
                                    data-oid="u-zz1_n"
                                />

                                <div className="text-xl font-bold text-red-700" data-oid="id9xmvj">
                                    DISPLACEMENT
                                </div>
                            </div>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="_:d_hq6">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="kpph6sx"
                            >
                                {' '}
                                Home{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="9fua0ns"
                            >
                                {' '}
                                About{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('call-for-papers')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="r_:wh1x"
                            >
                                {' '}
                                Call for Papers{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('submission')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="kw7ki-r"
                            >
                                {' '}
                                Submission Guidelines{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('registration')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="pukfubv"
                            >
                                {' '}
                                Registration & Fees{' '}
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="792cfu-"
                            >
                                {' '}
                                Contact{' '}
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center" data-oid="tcd83h2">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                                data-oid="l2d-.i-"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="cdadeh3"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="5ccdwi1"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="hb_oh2-"
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
                <div className="md:hidden bg-white shadow-lg" data-oid="2dp26dn">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="sw3pygt">
                        <button
                            onClick={() => scrollToSection('home')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="5j:y7hf"
                        >
                            {' '}
                            Home{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'about' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="e4me2ty"
                        >
                            {' '}
                            About{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'call-for-papers' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="vvj_6f2"
                        >
                            {' '}
                            Call for Papers{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('submission')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'submission' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="8chm-8:"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('registration')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'registration' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="_kj:0g0"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                            data-oid="6c3yo.4"
                        >
                            {' '}
                            Contact{' '}
                        </button>
                    </div>
                </div>
            )}
            {/* Main Content */}
            <div className="pt-16" data-oid="8hoc969">
                {/* Home Section */}
                <section
                    id="home"
                    className="min-h-screen flex items-center bg-gradient-to-br from-yellow-50 to-white"
                    data-oid="a5sqx6m"
                >
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
                        data-oid="4asm6z0"
                    >
                        <div className="text-center" data-oid="a8949s6">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-black mb-4"
                                data-oid="t30v0rd"
                            >
                                {' '}
                                DISPLACEMENT Conference 2025{' '}
                            </h1>
                            <div
                                className="flex flex-wrap justify-center gap-2 mb-8"
                                data-oid="z4sg1ny"
                            >
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="imwjik5"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="nvomytj"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </span>
                                <span
                                    className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm"
                                    data-oid="pyz03qh"
                                >
                                    {' '}
                                    UCL{' '}
                                </span>
                            </div>
                            <p
                                className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
                                data-oid="54j4n5e"
                            >
                                {' '}
                                An international conference exploring the multifaceted dimensions of
                                displacement in contemporary society.{' '}
                            </p>
                            <div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                data-oid="k60c48t"
                            >
                                <button
                                    onClick={() => scrollToSection('registration')}
                                    className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                    data-oid="04:usgk"
                                >
                                    {' '}
                                    Register Now{' '}
                                </button>
                                <button
                                    onClick={() => scrollToSection('call-for-papers')}
                                    className="px-8 py-3 border border-black text-black rounded-md hover:bg-yellow-50 transition-colors"
                                    data-oid="ng2t1nd"
                                >
                                    {' '}
                                    Submit Paper{' '}
                                </button>
                            </div>
                            <div
                                className="mt-12 p-4 bg-white rounded-lg shadow-md inline-block"
                                data-oid="d-6svnt"
                            >
                                <p className="text-gray-700 font-medium" data-oid="96qmrlk">
                                    {' '}
                                    Conference Dates: March 15-17, 2025{' '}
                                </p>
                                <p className="text-gray-700 font-medium" data-oid="dvtqgyk">
                                    {' '}
                                    Location: University of Hyderabad, India{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section id="about" className="py-20 bg-white" data-oid="w6:qrvg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3nb14wg">
                        <h2
                            className="text-3xl font-bold text-center text-red-800 mb-12"
                            data-oid="w9_3ygc"
                        >
                            {' '}
                            About the Conference{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8" data-oid="kmzo45v">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="a7ox6lp"
                            >
                                <h3
                                    className="text-xl font-semibold text-black mb-4"
                                    data-oid="-nxtypa"
                                >
                                    {' '}
                                    University of Hyderabad{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="oje2hnn">
                                    {' '}
                                    A premier institution of higher education in India known for its
                                    outstanding contribution to teaching and research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="10vi2f."
                            >
                                <h3
                                    className="text-xl font-semibold text-red-800 mb-4"
                                    data-oid="n59uzi4"
                                >
                                    {' '}
                                    Dartmouth College{' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="d3xkqw0">
                                    {' '}
                                    An Ivy League research university with a rich history of
                                    academic excellence and innovative research.{' '}
                                </p>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="xuo6g:_"
                            >
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="hfk5b1h"
                                >
                                    {' '}
                                    University College London (UCL){' '}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid=":s83rna">
                                    {' '}
                                    A world-leading multidisciplinary university with an
                                    international reputation for quality research and teaching.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="jiw6kdb">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="pm7ng3s"
                            >
                                {' '}
                                About DISPLACEMENT 2025{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="im3pq0j">
                                {' '}
                                The DISPLACEMENT Conference 2025 brings together scholars,
                                researchers, and practitioners from around the world to explore the
                                complex phenomenon of displacement in its various
                                forms—geographical, social, cultural, economic, and
                                psychological.{' '}
                            </p>
                            <p className="text-gray-700" data-oid="1_8vbdh">
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
                <section id="call-for-papers" className="py-20 bg-yellow-50" data-oid="y8iizw7">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="f323cen">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="j_u3k3k"
                        >
                            {' '}
                            Call for Papers{' '}
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-md" data-oid="dou0hoa">
                            <p className="text-gray-700 mb-6" data-oid="ttzharc">
                                {' '}
                                We invite submissions that explore the theme of displacement from
                                various disciplinary perspectives, including but not limited
                                to:{' '}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8" data-oid="tif1.38">
                                <div data-oid="rm4_st6">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="47t_v_s"
                                    >
                                        {' '}
                                        Thematic Areas{' '}
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 text-gray-700 space-y-2"
                                        data-oid="an8y5jd"
                                    >
                                        <li data-oid="mz90y2j">
                                            Forced migration and refugee studies
                                        </li>
                                        <li data-oid="s4eou25">
                                            Climate change and environmental displacement
                                        </li>
                                        <li data-oid="uyv_az2">
                                            Digital displacement and virtual communities
                                        </li>
                                        <li data-oid="pi245wy">
                                            Economic displacement and labor mobility
                                        </li>
                                        <li data-oid="_iqlo2q">
                                            Cultural displacement and identity formation
                                        </li>
                                        <li data-oid="ho0tiol">
                                            Displacement in literature and arts
                                        </li>
                                        <li data-oid="8vwo1az">
                                            Historical perspectives on displacement
                                        </li>
                                        <li data-oid="b64qk2b">
                                            Urban displacement and spatial justice
                                        </li>
                                    </ul>
                                </div>
                                <div data-oid="5h4s9j0">
                                    <h3
                                        className="text-lg font-semibold text-indigo-800 mb-3"
                                        data-oid="n0xaz_l"
                                    >
                                        {' '}
                                        Key Dates{' '}
                                    </h3>
                                    <ul className="text-gray-700 space-y-3" data-oid="v-:dmw:">
                                        <li className="flex items-start" data-oid="fbct9y.">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="kwnwmap"
                                            >
                                                {' '}
                                                August 15, 2024:{' '}
                                            </span>
                                            <span data-oid="l:sxlam">
                                                Abstract submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="jx91mo_">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="ajwdfe7"
                                            >
                                                {' '}
                                                October 1, 2024:{' '}
                                            </span>
                                            <span data-oid="n:vbugy">
                                                Notification of acceptance
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="-_b6o48">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="t3evrke"
                                            >
                                                {' '}
                                                December 15, 2024:{' '}
                                            </span>
                                            <span data-oid="8:c.m0b">
                                                Full paper submission deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="kgmudz0">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="xlav40p"
                                            >
                                                {' '}
                                                February 1, 2025:{' '}
                                            </span>
                                            <span data-oid="sugi8dg">
                                                Early registration deadline
                                            </span>
                                        </li>
                                        <li className="flex items-start" data-oid="__alymw">
                                            <span
                                                className="font-medium text-indigo-600 mr-2"
                                                data-oid="vnbaf85"
                                            >
                                                {' '}
                                                March 15-17, 2025:{' '}
                                            </span>
                                            <span data-oid="vdm6aj4">Conference dates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-md mb-6" data-oid="6uoolo-">
                                <h3
                                    className="text-lg font-semibold text-indigo-800 mb-2"
                                    data-oid="oko1t3b"
                                >
                                    {' '}
                                    Special Sessions{' '}
                                </h3>
                                <p className="text-gray-700" data-oid="j.5wq3p">
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
                                data-oid="9hi_7fu"
                            >
                                {' '}
                                View Submission Guidelines{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {/* Submission Guidelines Section */}
                <section id="submission" className="py-20 bg-white" data-oid="vo-7-jm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="44p1kuc">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="ii2w9z7"
                        >
                            {' '}
                            Submission Guidelines{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="tbg9h0b">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="2juq7kl">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="aq8va:6"
                                >
                                    {' '}
                                    Abstract Submission{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid=".y_hyg:">
                                    <li className="flex items-start" data-oid="1ewgzq3">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xjjeuzq"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="5vfpu.x"
                                            />
                                        </svg>
                                        <span data-oid="byqb:5l">
                                            Abstracts should be 300-500 words in length.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="kptcw_6">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="_cfe1r2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":_8yr4g"
                                            />
                                        </svg>
                                        <span data-oid="kcbp-w-">
                                            Include 5-6 keywords related to your research.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="_92wjvw">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".y-02vk"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="12avsoz"
                                            />
                                        </svg>
                                        <span data-oid="czq2_v6">
                                            {' '}
                                            Clearly state the research question, methodology, and
                                            preliminary findings.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="3wid37o">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="a_go0em"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="61n:rpe"
                                            />
                                        </svg>
                                        <span data-oid="48bsim5">
                                            {' '}
                                            Submit in PDF format through the conference submission
                                            portal.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="i7ngd7v">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="estrj4m"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="6e:46y7"
                                            />
                                        </svg>
                                        <span data-oid="oefruha">
                                            {' '}
                                            Include author name(s), affiliation, and contact
                                            information on a separate cover page.{' '}
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="2yw9-:g">
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                                        data-oid="uqj0orb"
                                    >
                                        {' '}
                                        Submit Abstract{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="azzcm1v">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="y8_a-jr"
                                >
                                    {' '}
                                    Full Paper Requirements{' '}
                                </h3>
                                <ul className="space-y-3 text-gray-700" data-oid="5pmke.3">
                                    <li className="flex items-start" data-oid="w8hwpna">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="b-335xm"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="u_ziarh"
                                            />
                                        </svg>
                                        <span data-oid="zv59im2">
                                            {' '}
                                            Papers should be 6,000-8,000 words, including
                                            references.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="-y19mne">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="khn.gw1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="soe56xx"
                                            />
                                        </svg>
                                        <span data-oid="20901lw">
                                            {' '}
                                            Use Times New Roman, 12-point font, double-spaced.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="tc6tbpl">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="uq9go3p"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid=":6jirnt"
                                            />
                                        </svg>
                                        <span data-oid=".c.9wnj">
                                            Follow APA 7th edition citation style.
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="vr4si83">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="6lwqgd1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="u213wm3"
                                            />
                                        </svg>
                                        <span data-oid="df0blhj">
                                            {' '}
                                            Include an abstract, keywords, introduction, literature
                                            review, methodology, findings, discussion, and
                                            conclusion.{' '}
                                        </span>
                                    </li>
                                    <li className="flex items-start" data-oid="nr26iqk">
                                        <svg
                                            className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="zj7-fbc"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                data-oid="qms2.hx"
                                            />
                                        </svg>
                                        <span data-oid="vv68u00">
                                            Submit in both PDF and Word format.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6" data-oid="8mp-:v_">
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                                        data-oid="rot7443"
                                    >
                                        {' '}
                                        Download Paper Template →{' '}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-indigo-50 p-6 rounded-lg" data-oid="j48c4o_">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="czq-9iw"
                            >
                                {' '}
                                Review Process{' '}
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="7wp_imq">
                                {' '}
                                All submissions will undergo a double-blind peer review process.
                                Each abstract will be reviewed by at least two members of the
                                scientific committee. Evaluation criteria include:{' '}
                            </p>
                            <ul
                                className="list-disc pl-5 text-gray-700 space-y-2 mb-4"
                                data-oid="zp846yu"
                            >
                                <li data-oid=":ztzaxg">Relevance to the conference theme</li>
                                <li data-oid="3-0_zm6">Originality and innovation</li>
                                <li data-oid="5x1:xad">Theoretical foundation</li>
                                <li data-oid="pd4gk52">Methodological rigor</li>
                                <li data-oid="1.3i6e7">Clarity of presentation</li>
                                <li data-oid="56e6p.n">Potential contribution to the field</li>
                            </ul>
                            <p className="text-gray-700" data-oid="870qsjp">
                                {' '}
                                Authors of accepted abstracts will be invited to submit full papers,
                                which will also undergo peer review before final acceptance.{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Registration & Fees Section */}
                <section id="registration" className="py-20 bg-yellow-50" data-oid="gdlh8d:">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s89aqcg">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="99w-l-4"
                        >
                            {' '}
                            Registration & Fees{' '}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-10" data-oid="9_-x2k0">
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="w0d.-_s"
                            >
                                <div className="text-center mb-4" data-oid="_ihco0l">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="rclva36"
                                    >
                                        {' '}
                                        Early Bird Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="okceif9">
                                        {' '}
                                        (Until February 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="o6bclua">
                                    <div className="text-center" data-oid="7piysxf">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="71k5sbm"
                                        >
                                            {' '}
                                            $250{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="p8m13mj"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="pvtcg5.">
                                    <li className="flex items-start" data-oid="jsbj1.x">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="jycfdzr"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="jom92ta"
                                            />
                                        </svg>
                                        <span data-oid="crib_kc">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="n43-me5">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="w3oz6a0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="sdzeeud"
                                            />
                                        </svg>
                                        <span data-oid="iv8il7_">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="w6jds:o">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="ppishaz"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid=".bnogox"
                                            />
                                        </svg>
                                        <span data-oid="ge-vwih">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="9.bhgwv">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="k-die1q"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="objvs0-"
                                            />
                                        </svg>
                                        <span data-oid="lkn_bjt">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="94_58mn">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="p:p1yve"
                                    >
                                        {' '}
                                        Student Rate: $150{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-500 relative"
                                data-oid="eyfq_9n"
                            >
                                <div
                                    className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg"
                                    data-oid="n24mg5m"
                                >
                                    {' '}
                                    Recommended{' '}
                                </div>
                                <div className="text-center mb-4" data-oid="c2mtp20">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="pd3rgp5"
                                    >
                                        {' '}
                                        Standard Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="sg1j6ui">
                                        {' '}
                                        (February 2 - March 1, 2025){' '}
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="8mvw9o3">
                                    <div className="text-center" data-oid="t622:yw">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="h3rjg6h"
                                        >
                                            {' '}
                                            $300{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="9mnt132"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="bmq5i4t">
                                    <li className="flex items-start" data-oid="vw_wxpl">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="01ebd6:"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="qictr2-"
                                            />
                                        </svg>
                                        <span data-oid="jnl_.ds">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="i0-d7v:">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="2htflgp"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="qsfocyb"
                                            />
                                        </svg>
                                        <span data-oid="u30tcrg">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="n_plnmn">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="hlrtjpl"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="j_v.1nk"
                                            />
                                        </svg>
                                        <span data-oid="5h84bhn">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="1tczt7u">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="gqrgqhm"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="1-a2q1u"
                                            />
                                        </svg>
                                        <span data-oid="nd6:p.0">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="3-_s-nq">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="0sq50.f"
                                    >
                                        {' '}
                                        Student Rate: $200{' '}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                data-oid="5vnb6c2"
                            >
                                <div className="text-center mb-4" data-oid="h3-.wx5">
                                    <h3
                                        className="text-xl font-semibold text-indigo-800"
                                        data-oid="zz1fiyb"
                                    >
                                        {' '}
                                        Late Registration{' '}
                                    </h3>
                                    <p className="text-gray-500 text-sm" data-oid="liultwz">
                                        (After March 1, 2025)
                                    </p>
                                </div>
                                <div className="flex justify-center mb-6" data-oid="zbjdkdx">
                                    <div className="text-center" data-oid="lti8rsq">
                                        <span
                                            className="text-4xl font-bold text-indigo-600"
                                            data-oid="y9-jl0:"
                                        >
                                            {' '}
                                            $350{' '}
                                        </span>
                                        <span
                                            className="text-gray-500 block text-sm"
                                            data-oid="ydqri52"
                                        >
                                            {' '}
                                            Regular Participants{' '}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-gray-700 mb-6" data-oid="p_6nu7c">
                                    <li className="flex items-start" data-oid=":gbg9uq">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="twpyewd"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="0:cil8w"
                                            />
                                        </svg>
                                        <span data-oid="f1hcs_g">Conference attendance</span>
                                    </li>
                                    <li className="flex items-start" data-oid="erbap0h">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tbj3y8g"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="jymvv14"
                                            />
                                        </svg>
                                        <span data-oid="1a2vi5q">Conference materials</span>
                                    </li>
                                    <li className="flex items-start" data-oid="lver516">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="rgjbmsi"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="n87a1i1"
                                            />
                                        </svg>
                                        <span data-oid="0idwswz">Coffee breaks & lunches</span>
                                    </li>
                                    <li className="flex items-start" data-oid="k:hmb4v">
                                        <svg
                                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="e1iev3w"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                                data-oid="zozyjil"
                                            />
                                        </svg>
                                        <span data-oid="uunn4cx">Welcome reception</span>
                                    </li>
                                </ul>
                                <div className="text-center" data-oid="3tn:68y">
                                    <p
                                        className="text-indigo-600 font-medium mb-2"
                                        data-oid="fmn5vqo"
                                    >
                                        {' '}
                                        Student Rate: $250{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="y3-xtgr">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="01bfuym"
                            >
                                {' '}
                                Additional Options{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="5vuoqkg">
                                <div data-oid="cd2bv-_">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid="j8c33sl"
                                    >
                                        {' '}
                                        Conference Dinner{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="1481.36">
                                        $50 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="7_-e56w">
                                        {' '}
                                        Join us for a special dinner featuring local cuisine and
                                        cultural performances.{' '}
                                    </p>
                                </div>
                                <div data-oid="cjh85x6">
                                    <h4
                                        className="font-medium text-indigo-700 mb-2"
                                        data-oid=":w-fp.c"
                                    >
                                        {' '}
                                        Cultural Tour{' '}
                                    </h4>
                                    <p className="text-gray-700 mb-2" data-oid="9pv5-jo">
                                        $40 per person
                                    </p>
                                    <p className="text-gray-600 text-sm" data-oid="fnviel9">
                                        {' '}
                                        A guided tour of historical and cultural sites in Hyderabad
                                        (March 18, 2025).{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" data-oid="b6kp:tj">
                            <button
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="okvz:6o"
                            >
                                {' '}
                                Register Now{' '}
                            </button>
                            <p className="mt-4 text-gray-600" data-oid=":vpmtc7">
                                {' '}
                                For group registrations or special requirements, please contact{' '}
                                <a
                                    href="mailto:registration@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="sbv4ejj"
                                >
                                    {' '}
                                    registration@displacement2025.org{' '}
                                </a>{' '}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-20 bg-white" data-oid="y_gu.j9">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ezmkchd">
                        <h2
                            className="text-3xl font-bold text-center text-indigo-900 mb-12"
                            data-oid="y10izoy"
                        >
                            {' '}
                            Contact Us{' '}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8" data-oid="rnjn-t5">
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="q1_85ps">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="eysrfqa"
                                >
                                    {' '}
                                    Conference Organizers{' '}
                                </h3>
                                <div className="space-y-6" data-oid="py:-mq:">
                                    <div data-oid="1_g-f25">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="q:-:c7o"
                                        >
                                            {' '}
                                            Conference Chair{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="36t9a1x">
                                            Prof. Ananya Sharma
                                        </p>
                                        <p className="text-gray-700" data-oid="crpu714">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:chair@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="zz:w6ms"
                                        >
                                            {' '}
                                            chair@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="xze9r64">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="kury8j_"
                                        >
                                            {' '}
                                            Program Committee{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="b6zkziu">
                                            Prof. Michael Chen
                                        </p>
                                        <p className="text-gray-700" data-oid="d1jern0">
                                            Dartmouth College
                                        </p>
                                        <a
                                            href="mailto:program@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="eoi0tl2"
                                        >
                                            {' '}
                                            program@displacement2025.org{' '}
                                        </a>
                                    </div>
                                    <div data-oid="daiyk92">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="hhh0akr"
                                        >
                                            {' '}
                                            Local Arrangements{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="seyg33d">
                                            Dr. Priya Patel
                                        </p>
                                        <p className="text-gray-700" data-oid="-a02msa">
                                            University of Hyderabad
                                        </p>
                                        <a
                                            href="mailto:local@displacement2025.org"
                                            className="text-indigo-600 hover:underline"
                                            data-oid="kca:llq"
                                        >
                                            {' '}
                                            local@displacement2025.org{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md" data-oid="sknw-xv">
                                <h3
                                    className="text-xl font-semibold text-indigo-800 mb-4"
                                    data-oid="a7168a_"
                                >
                                    {' '}
                                    Get in Touch{' '}
                                </h3>
                                <form className="space-y-4" data-oid="1sxbz8b">
                                    <div data-oid="ccwynae">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="bogahj1"
                                        >
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your name"
                                            data-oid="2u4vdes"
                                        />
                                    </div>
                                    <div data-oid=":8yr.qr">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="icbheok"
                                        >
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your email"
                                            data-oid="p3fa2ag"
                                        />
                                    </div>
                                    <div data-oid="gdleup7">
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="f717c7v"
                                        >
                                            {' '}
                                            Subject{' '}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Subject"
                                            data-oid="m1:vc.k"
                                        />
                                    </div>
                                    <div data-oid="x_dp19t">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                            data-oid="t98h3oo"
                                        >
                                            {' '}
                                            Message{' '}
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="Your message"
                                            data-oid="6hfqn_2"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                                        data-oid="apou67g"
                                    >
                                        {' '}
                                        Send Message{' '}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 bg-indigo-50 p-6 rounded-lg" data-oid=".6.s4ue">
                            <h3
                                className="text-xl font-semibold text-indigo-800 mb-4"
                                data-oid="342nhil"
                            >
                                {' '}
                                Conference Venue{' '}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6" data-oid="4n22_:3">
                                <div data-oid="d.1o208">
                                    <p className="text-gray-700 mb-2" data-oid="jx4pkcx">
                                        <strong data-oid="avb_2tr">University of Hyderabad</strong>
                                        <br data-oid="xt7ga3t" /> Prof. C.R. Rao Road, Gachibowli
                                        <br data-oid="u.5t4nj" /> Hyderabad, Telangana 500046
                                        <br data-oid="rgqb3m2" /> India
                                    </p>
                                    <p className="text-gray-700 mb-4" data-oid="rrp8t.g">
                                        <strong data-oid="dt-u83e">Conference Hall:</strong> School
                                        of Social Sciences Auditorium
                                    </p>
                                    <div data-oid="xk4w-h9">
                                        <h4
                                            className="font-medium text-indigo-700 mb-2"
                                            data-oid="y44ctvc"
                                        >
                                            {' '}
                                            Accommodation{' '}
                                        </h4>
                                        <p className="text-gray-700" data-oid="8wwcsnk">
                                            {' '}
                                            Information about recommended hotels and special
                                            conference rates will be available soon. For early
                                            inquiries, please contact{' '}
                                            <a
                                                href="mailto:accommodation@displacement2025.org"
                                                className="text-indigo-600 hover:underline"
                                                data-oid="qkl:7fa"
                                            >
                                                {' '}
                                                accommodation@displacement2025.org{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
                                    data-oid="aq9wzbb"
                                >
                                    <span className="text-gray-500" data-oid="16oyv92">
                                        {' '}
                                        Map will be displayed here{' '}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="bg-black text-white py-12" data-oid="6k0yb_b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="x-k6cii">
                        <div className="grid md:grid-cols-3 gap-8" data-oid="vbis2oo">
                            <div data-oid=".kj34x_">
                                <h3 className="text-xl font-semibold mb-4" data-oid="r877h8l">
                                    DISPLACEMENT 2025
                                </h3>
                                <p className="text-yellow-200" data-oid="6wqvskm">
                                    {' '}
                                    An international conference exploring the multifaceted
                                    dimensions of displacement in contemporary society.{' '}
                                </p>
                            </div>
                            <div data-oid="m1fk8aj">
                                <h3 className="text-lg font-semibold mb-4" data-oid="uedkukm">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2" data-oid="g61qms6">
                                    <li data-oid="c.:fx-s">
                                        <button
                                            onClick={() => scrollToSection('home')}
                                            className="text-yellow-200 hover:text-white"
                                            data-oid="plz:auz"
                                        >
                                            {' '}
                                            Home{' '}
                                        </button>
                                    </li>
                                    <li data-oid="yg:2341">
                                        <button
                                            onClick={() => scrollToSection('about')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="rwouysq"
                                        >
                                            {' '}
                                            About{' '}
                                        </button>
                                    </li>
                                    <li data-oid="et9md1j">
                                        <button
                                            onClick={() => scrollToSection('call-for-papers')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="7eb:4dp"
                                        >
                                            {' '}
                                            Call for Papers{' '}
                                        </button>
                                    </li>
                                    <li data-oid="7lzgck_">
                                        <button
                                            onClick={() => scrollToSection('submission')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="oy3zc3d"
                                        >
                                            {' '}
                                            Submission Guidelines{' '}
                                        </button>
                                    </li>
                                    <li data-oid="w203:i2">
                                        <button
                                            onClick={() => scrollToSection('registration')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="gh2ap1v"
                                        >
                                            {' '}
                                            Registration & Fees{' '}
                                        </button>
                                    </li>
                                    <li data-oid="t5ap_od">
                                        <button
                                            onClick={() => scrollToSection('contact')}
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="hajs.2q"
                                        >
                                            {' '}
                                            Contact{' '}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="xi2dkef">
                                <h3 className="text-lg font-semibold mb-4" data-oid="i3v_s:m">
                                    Contact
                                </h3>
                                <ul className="space-y-2" data-oid="ca2tjl-">
                                    <li className="flex items-start" data-oid="t:m:.r5">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="tkrv113"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                data-oid="-elbijo"
                                            />
                                        </svg>
                                        <a
                                            href="mailto:displacement2025@uohyd.ac.in"
                                            className="text-indigo-200 hover:text-white"
                                            data-oid="l5bl.e2"
                                        >
                                            {' '}
                                            displacement2025@uohyd.ac.in{' '}
                                        </a>
                                    </li>
                                    <li className="flex items-start" data-oid="tqrnbrl">
                                        <svg
                                            className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".4oh3gx"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                data-oid="dnvil5_"
                                            />
                                        </svg>
                                        <span className="text-indigo-200" data-oid="gv3abpm">
                                            +91-9488016612
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm"
                            data-oid="98ced2d"
                        >
                            <p data-oid="w:p7k27">
                                © 2024 DISPLACEMENT Conference. All rights reserved.
                            </p>
                            <p className="mt-2" data-oid="jgv3-7e">
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
