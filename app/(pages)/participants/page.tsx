'use client';
import React from 'react';
import Image from 'next/image';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function ParticipantsPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="27l3r.0">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="padxk75"
            />

            <div className="pt-20 pb-10" data-oid="k:orzwh">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="posa7w:">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="vom11c6">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="ir7jnrx">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="gmttsa_">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="d-b__:m"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="q3djbio">
                                <div className="flex items-start space-x-4" data-oid="di95p5y">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="8jxfyro"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="semxvb9"
                                        />
                                    </div>
                                    <div data-oid="wwg5ic7">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="flnwd_x"
                                        >
                                            Prof. Rajini Srikanth
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid=":wdffg9">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <div className="mt-1" data-oid="-afs87o">
                                            <p className="text-gray-700 text-sm" data-oid="mmj_2tp">
                                                Professor of English at the University of
                                                Massachusetts Boston. Her research and teaching
                                                interests span literature and human rights,
                                                comparative race and ethnic studies, literature and
                                                pedagogy, the role of humanities in climate justice,
                                                and transnational American and Asian American
                                                literature.
                                            </p>
                                            <p
                                                className="text-gray-700 text-sm mt-1"
                                                data-oid="24xgpp2"
                                            >
                                                She is the author of three monographs and several
                                                co-edited collections including{' '}
                                                <span className="italic" data-oid="t6xeax-">
                                                    Constructing the Enemy: Empathy/Antipathy in US
                                                    Literature and Law
                                                </span>{' '}
                                                (2012),{' '}
                                                <span className="italic" data-oid="e0u:xcp">
                                                    Interdisciplinary Approaches to Human Rights
                                                </span>{' '}
                                                (2018), and{' '}
                                                <span className="italic" data-oid="0po3v59">
                                                    Climate Justice and Public Health
                                                </span>{' '}
                                                (2024).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="7g7fu_b">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="k5u:ypk"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="vlcn7cg"
                                        />
                                    </div>
                                    <div data-oid="jwk:v8h">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="j4zrndb"
                                        >
                                            Prof. S. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="vp3c3_w">
                                            The International Institute of Migration and
                                            Development, Kerala
                                        </p>
                                        <div className="mt-1" data-oid="i8jedx2">
                                            <p className="text-gray-700 text-sm" data-oid="h_llntf">
                                                Chair of the International Institute of Migration
                                                and Development, Kerala. He is the Founder Editor in
                                                Chief of Migration and Development (Sage) and the
                                                editor of two Routledge series - India Migration
                                                Report and South Asia Migration Report and lead
                                                editor of Springer Series - South-South Migration.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="1-ecqt_">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="6fcydfd"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="uh9eio3"
                                        />
                                    </div>
                                    <div data-oid="qrcmtt7">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="876e16w"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="-ptej1v">
                                            Refugee Education UK (REUK)
                                        </p>
                                        <div className="mt-1" data-oid="n33vwr2">
                                            <p className="text-gray-700 text-sm" data-oid="m69u2ug">
                                                Youth Advocacy Manager at Refugee Education UK
                                                (REUK). She specialises in qualitative research with
                                                a focus on child- and youth-centred research
                                                methods, and has conducted research on forced
                                                migration, human trafficking and education for
                                                refugee and asylum seeking learners in India and the
                                                UK.
                                            </p>
                                            <p
                                                className="text-gray-700 text-sm mt-1"
                                                data-oid="yh:l9h."
                                            >
                                                At REUK, she works on research projects that study
                                                the experiences of refugee and asylum-seeking young
                                                people in accessing education in the UK and
                                                internationally.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="umlnfgn">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="74iy2dg"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="_g96rt1"
                                        />
                                    </div>
                                    <div data-oid="wi7puth">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="j804y93"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="wcbzpj5">
                                            University of California, Los Angeles (UCLA), USA
                                        </p>
                                        <div className="mt-1" data-oid="_b6b:5h">
                                            <p className="text-gray-700 text-sm" data-oid="cn.0j6m">
                                                Cultural critic, writer, blogger, and Professor of
                                                History at UCLA. He earned his BA and MA from Johns
                                                Hopkins in literature, philosophy, and history in
                                                1982, and a PhD with Distinction from the University
                                                of Chicago (1992) in South Asian studies.
                                            </p>
                                            <p
                                                className="text-gray-700 text-sm mt-1"
                                                data-oid="8hx9i16"
                                            >
                                                Author or editor of 22 books including nine volumes
                                                from Oxford UP. He blogs at vinaylal.wordpress.com,
                                                and has an academic YouTube channel. He is a Fellow
                                                for 2024 at the Stellenbosch Institute of Advanced
                                                Study, South Africa and recipient of the Senior
                                                Fulbright-Nehru Award (2025-26).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="xuaz.xb">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="b3aqknn"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="_a5_orz"
                                        />
                                    </div>
                                    <div data-oid="g-k:yh:">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="cpkmby0"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="p15xtoz">
                                            Former Professor, UoH
                                        </p>
                                        <div className="mt-1" data-oid="kvk.m1u">
                                            <p className="text-gray-700 text-sm" data-oid=".w3-ah1">
                                                A teacher of English for about 50 years, lives in
                                                Hyderabad. His publications exceed 200, among which
                                                are monographs, edited collections, articles and
                                                short notes, anthologies for teaching poetry,
                                                review-essays, prefaces, and translations.
                                            </p>
                                            <p
                                                className="text-gray-700 text-sm mt-1"
                                                data-oid="3t_knnz"
                                            >
                                                An occasional writer of criticism in Malayalam, his
                                                first language, he has also translated Romeo &
                                                Juliet and Harold Pinter`&apos;`s Mountain Language.
                                                His post-superannuation term as the Institution of
                                                Eminence Research Chair Professor in Literary and
                                                Cultural Theory at the University of Hyderabad ended
                                                in June 2024.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="o1-j:bo">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="4b:4rxs"
                            >
                                Poets
                            </h2>
                            <div className="space-y-6" data-oid="5jq8rqk">
                                <div className="flex items-start space-x-4" data-oid="m9su4yc">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="poet-img-1"
                                    >
                                        <Image
                                            src="/images/poet-yousuf.jpeg"
                                            alt="Yousif M. Qasmiyeh"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="poet-img-1-src"
                                        />
                                    </div>
                                    <div data-oid="poet-1-info">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="2xdw1qt"
                                            key="olk-53M7"
                                        >
                                            Yousif M. Qasmiyeh
                                        </h3>
                                        <div className="mt-1" data-oid="2wzp4z8">
                                            <p className="text-gray-600 text-sm" data-oid="j-3ivtj">
                                                Born and educated in Baddawi refugee camp in
                                                Lebanon, Yousif M. Qasmiyeh is a poet and scholar
                                                who completed his doctorate in English Literature at
                                                the University of Oxford.
                                            </p>
                                            <p
                                                className="text-gray-600 text-sm mt-1"
                                                data-oid="vrl0zt6"
                                            >
                                                Time, the body and ruination inform his poetry and
                                                prose, which have appeared in{' '}
                                                <span className="italic" data-oid="k5q2hpc">
                                                    Modern Poetry in Translation
                                                </span>
                                                ,{' '}
                                                <span className="italic" data-oid="v5a7teg">
                                                    Critical Quarterly
                                                </span>
                                                ,{' '}
                                                <span className="italic" data-oid="896jac2">
                                                    Cambridge Literary Review
                                                </span>
                                                ,{' '}
                                                <span className="italic" data-oid="f:_pg33">
                                                    PN Review
                                                </span>
                                                ,{' '}
                                                <span className="italic" data-oid="mit8gx-">
                                                    Stand
                                                </span>
                                                ,{' '}
                                                <span className="italic" data-oid="97euqwd">
                                                    New England Review
                                                </span>
                                                ,{' '}
                                                <span className="italic" data-oid="1_c-p2m">
                                                    Poetry London
                                                </span>{' '}
                                                and{' '}
                                                <span className="italic" data-oid="67li.2c">
                                                    Wasafiri
                                                </span>
                                                .
                                            </p>
                                            <p
                                                className="text-gray-600 text-sm mt-1"
                                                data-oid="18t6bc:"
                                            >
                                                Yousif is the Creative Encounters Editor of the{' '}
                                                <span className="italic" data-oid="4:0hs8r">
                                                    Migration and Society
                                                </span>{' '}
                                                journal and Writer-in-Residence for the Refugee
                                                Hosts project. His debut collection,{' '}
                                                <span className="italic" data-oid="3kfi_x6">
                                                    Writing the Camp
                                                </span>{' '}
                                                (Broken Sleep Books, 2021), was a 2021 PBS
                                                Recommendation; was selected as one of the Best
                                                Poetry Books of 2021 by the Telegraph and the Irish
                                                Times; was highly commended by the 2021 Forward
                                                Prizes for Poetry; and was shortlisted for the 2022
                                                Royal Society of Literature Ondaatje Prize.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="ksbpnt5">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="poet-img-2"
                                    >
                                        <Image
                                            src="/images/poet-shash.jpeg"
                                            alt="Shash Trevett"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="poet-img-2-src"
                                        />
                                    </div>
                                    <div data-oid="poet-2-info">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="fbpv9y9"
                                            key="olk-4RSC"
                                        >
                                            Shash Trevett
                                        </h3>
                                        <div className="mt-1" data-oid="j_.r9vf">
                                            <p className="text-gray-600 text-sm" data-oid="ed3ybto">
                                                A poet, critic and a translator of Tamil poetry into
                                                English. Born in Sri Lanka, she now lives in the
                                                U.K. Her poetry has been widely published in
                                                journals and anthologies, she has read variously
                                                across the U.K and internationally and is a winner
                                                of a Northern Writers`&apos;` Award.
                                            </p>
                                            <p
                                                className="text-gray-600 text-sm mt-1"
                                                data-oid="c9rlkcg"
                                            >
                                                <span className="italic" data-oid="glb5.n5">
                                                    Out of Sri Lanka: Tamil, Sinhala and English
                                                    Poetry from Sri Lanka and its Diasporas
                                                </span>{' '}
                                                (Bloodaxe 2023, Penguin India 2023) which she
                                                co-edited with Vidyan Ravinthiran and Seni
                                                Seneviratne, was a Times Literary
                                                Supplement`&apos;`s Books of the Year for 2023.{' '}
                                                <span className="italic" data-oid="gu0jh8h">
                                                    The Naming of Names
                                                </span>
                                                , her first full collection, was published by
                                                Smith|Doorstop in September 2024 and her work has
                                                recently been conserved by the Poetry Archive.
                                            </p>
                                            <p
                                                className="text-gray-600 text-sm mt-1"
                                                data-oid="0sizhl7"
                                            >
                                                Shash has presented at academic conferences both in
                                                the U.K and abroad, and has been involved with the
                                                Singapore Translation Symposium, the PEN Translates
                                                awards and the Commonwealth Short Story Prize. She
                                                is a member of the Kinara Poetry Collective, is a
                                                Ledbury Critic and a Board Member of Modern Poetry
                                                in Translation.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="um5lclq">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="poet-img-3"
                                    >
                                        <div
                                            className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400"
                                            data-oid="1is15ch"
                                        >
                                            <span className="text-xs" data-oid="lt6tq3v">
                                                No image
                                            </span>
                                        </div>
                                    </div>
                                    <div data-oid="poet-3-info">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="t1rypei"
                                            key="olk-TEac"
                                        >
                                            Anthony Vahni Capildeo
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="pa71b6n">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="i6enjca">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="-xlnth0"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="pka15sw">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="3hl72--"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="wqhuott">
                                        Aneil Rallin
                                    </h3>
                                    <div className="mt-1" data-oid="-vy_0a-">
                                        <p className="text-gray-600 text-sm" data-oid="1iw:x8r">
                                            Aneil Rallin (they/them/their) is a recovering academic
                                            who has survived working at nine universities in the US
                                            and Canada (including Soka University of America, York
                                            University, California State University, San Marcos, and
                                            University of Southern California).
                                        </p>
                                        <p
                                            className="text-gray-600 text-sm mt-1"
                                            data-oid="7flkhid"
                                        >
                                            Author of{' '}
                                            <span className="italic" data-oid="yncsq:1">
                                                Dreads and Open Mouths: Living/Teaching/Writing
                                                Queerly
                                            </span>{' '}
                                            (Litwin Books), co-editor of the special issue
                                            `&quot;`Queer and Now`&quot;` of{' '}
                                            <span className="italic" data-oid="0liyooo">
                                                The Writing Instructor
                                            </span>
                                            , convener of the special issue `&quot;`Rhet/Comp for
                                            Palestine: A Gathering of Spirit`&quot;` of{' '}
                                            <span className="italic" data-oid="aij8zhr">
                                                The Journal of Multimodal Rhetorics
                                            </span>
                                            , and co-editor of the forthcoming collection{' '}
                                            <span className="italic" data-oid="g:iqugp">
                                                Trigger Warnings: Teaching Through Trauma
                                            </span>{' '}
                                            (Lever Press).
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid=".r60pqr"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="m-6k_xp">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="m2aycz1">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid=".uewxou"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="c216-b2">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="9ulic3z">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                    <div className="mt-1" data-oid="ue_ijlg">
                                        <p className="text-gray-600 text-sm" data-oid="me-h:e5">
                                            A third year Research scholar from the Department of
                                            Humanities and Social Sciences at National Institute of
                                            Technology, Warangal, Telangana. She is currently
                                            working as a research scholar under the supervision of
                                            Dr R Vennela, who is an Assistant Professor of the same
                                            department.
                                        </p>
                                        <p
                                            className="text-gray-600 text-sm mt-1"
                                            data-oid="m:ime0."
                                        >
                                            She did her Bachelors in English Language and Literature
                                            from Mercy College and her Masters in English and
                                            Comparative Literature from Pondicherry University. Her
                                            current field of interest is in Asian Literatures with a
                                            specific focus on East Asian and South-East Asian
                                            Studies. Her research interests lie in cultural studies,
                                            memory studies and gender studies.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="958rfwf"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="s096ego">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="eh:rm1d">
                                        Research Scholar, Ashoka University
                                    </p>
                                    <div className="mt-1" data-oid="i2:3ika">
                                        <p className="text-gray-600 text-sm" data-oid="kdacw7s">
                                            A doctoral candidate in the Department of English at
                                            Ashoka University, India. Her research focuses on Sindhi
                                            narratives of return, particularly in the context of the
                                            Partition of the Indian Subcontinent.
                                        </p>
                                        <p
                                            className="text-gray-600 text-sm mt-1"
                                            data-oid="mk3u0o-"
                                        >
                                            She has presented her work at various avenues, including
                                            the Yale Modern South Asia Workshop (2022), the American
                                            Comparative Literature Association Conference (2024),
                                            and the Annual Conference on South Asia at the
                                            University of Wisconsin-Madison (2024). An aspiring
                                            translator, she plans to translate Sindhi literature
                                            written in the Perso-Arabic script into English.
                                        </p>
                                        <p
                                            className="text-gray-600 text-sm mt-1"
                                            data-oid="sk.sg4x"
                                        >
                                            In addition to Partition literature, her research
                                            interests include Cultural Studies, Literatures of
                                            Exile, and Popular Cinema in India.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="k:8pv:l"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="zoyrctq">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="o_h4e55">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="dr15z1.">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="ar_qgqc"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="677cjtr"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xf7dwzv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="y7uv7.s"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a_1ga0l"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="omij-jq"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jwbzxca"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="h2-qgzl"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2br:31c"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wq0d2ej"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="p1a_jtj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mhq-1v2"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":p:j-b0"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ga:lgdg"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bkjgxxd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="o_a0i8r"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="eyh.4e_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="on-tw1u"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="m25xkm7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="qk8nokl"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="t04ouj-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2cx6ikm"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6y.m4p3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="04rz8v4"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="z_5l..3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="t1lv0vb"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8xk_9ud"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="w:5gufu"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="idzd9jv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-bjlpxl"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="5wy:wrw"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ywmpy20"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jhi_ko-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1_v1s4j"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7vnmp9g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="35x4tal"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="3a5n7i8"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5gyzmp5"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s6sscf9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6cv88b4"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="fk_1xc-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="cmqqrip"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0f-ijlm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="lwpbrbj"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":8l9s9o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v4:pbg-"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wdzbpgj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="r8tj:l_"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="1ajnq6i"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="z:g2-z6"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="88dq0c."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m12rn4z"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vc9v:__"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="fkz2762"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="83xwics"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="b.tih2r"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="mm0b518"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":_he:ay"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l1em47n"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wnm:z0n"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="umlthv5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="17it3f2"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l9ky9l6"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="35c16.8"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="71oo4k-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-sxrogw"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-tx2jrj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bz-ts84"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="gv4h9n:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-v2wob."
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":fdi1ph"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tsklab9"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a.xc38b"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c_e4.22"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="ea4w_5t">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="syy9k6n">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="av:x4_p"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="q8wth4y">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="v.ozb:r"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c3__-69"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jmf-syi">
                                        Department of English, UoH
                                    </p>
                                    <p className="text-gray-600 text-xs mt-1" data-oid="ytlt4re">
                                        Teaches at the Department of English, where he also holds
                                        the UNESCO Chair in Vulnerability Studies.
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a3d437t"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mynpms9"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="pt:gz20">
                                        Regional Studies, UoH
                                    </p>
                                    <div className="mt-1" data-oid="ezyyz4a">
                                        <p className="text-gray-600 text-xs" data-oid=":1t0nj9">
                                            A Sociologist, teaches at the Centre for Regional
                                            Studies, University of Hyderabad. His research interests
                                            include ethnic violence, migration and borderlands,
                                            citizenship, Muslims in South Asia and the intersection
                                            of archives and ethnography.
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="l:d3d.n"
                                        >
                                            His book{' '}
                                            <span className="italic" data-oid="vyziul8">
                                                Interrogating Communalism: Violence, Citizenship and
                                                Minorities in South India
                                            </span>{' '}
                                            is published by Routledge in 2019. He has published
                                            articles in journals such as{' '}
                                            <span className="italic" data-oid="ra8h:0l">
                                                Citizenship Studies
                                            </span>
                                            ,{' '}
                                            <span className="italic" data-oid="hnkzpzr">
                                                History and Anthropology
                                            </span>
                                            ,{' '}
                                            <span className="italic" data-oid="ln9p0pk">
                                                South Asia Research
                                            </span>{' '}
                                            and{' '}
                                            <span className="italic" data-oid="z:_q::h">
                                                Contributions to Indian Sociology
                                            </span>
                                            .
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="r_cmc_i"
                                        >
                                            Salah has done his Post-Doctoral Fellowship (2018-2020)
                                            at the Max Planck Institute for the Study of Religious
                                            and Ethnic Diversity, Gottingen, Germany. He was a DAAD
                                            Guest Professor at CeMIS, University of Gottingen in
                                            2022. Salah is the recipient of M.N Srinivas Award for
                                            Young Indian Sociologist, 2015 and Chancellor`&apos;`s
                                            Award for Best Faculty at the University of Hyderabad in
                                            2022.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="drtjv7e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3hvtv36"
                                    >
                                        Dr. Nandini Ramesh Sankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x3wx9fd">
                                        Department of English, UoH
                                    </p>
                                    <p className="text-gray-600 text-xs mt-1" data-oid="_wakpsf">
                                        Works on British and American poetry after 1900, literature
                                        and visual arts, and related areas. After completing her PhD
                                        from Cornell University in 2012, she worked at the Indian
                                        Institute of Technology Hyderabad before joining the
                                        University of Hyderabad earlier this year.
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rw.gtmc"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ctg27o:"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="3d452ov">
                                        Department of English, UoH
                                    </p>
                                    <div className="mt-1" data-oid="cu4lehh">
                                        <p className="text-gray-600 text-xs" data-oid="llpne98">
                                            An Assistant Professor in the Department of English,
                                            School of Humanities, University of Hyderabad, India. He
                                            is also an honorary research associate at the Faculty of
                                            Arts and Design, Durban University of Technology, South
                                            Africa.
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="rpmfzys"
                                        >
                                            Along with several visiting researcher fellowships, he
                                            has been awarded the Alexander von Humboldt Fellowship
                                            at MESH (Multidisciplinary Environmental Studies in the
                                            Humanities), University of Cologne, Germany, and the
                                            MIASA Individual Fellowship at the University of Ghana.
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="3kbg4uj"
                                        >
                                            Karmakar`&apos;`s research interests include the Global
                                            South literary studies, postcolonial and decolonial
                                            studies, women and gender studies, and environmental
                                            studies. He is also a series editor for the Routledge
                                            book series South Asian Literature in Focus.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=".9d:xs4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="oh-dh75"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="j11sxe7">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="06manlr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="y5nqdbj"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="t8uk9ou">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s6w8aqm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="du9nhm3"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="2bvdl55">
                                        Department of English, UoH
                                    </p>
                                    <div className="mt-1" data-oid="zyu9a-z">
                                        <p className="text-gray-600 text-xs" data-oid="cl71s02">
                                            An assistant professor of English at the University of
                                            Hyderabad Telangana. He previously taught for ten years
                                            at Kakatiya University, Warangal. He has contributed to
                                            academia through research and publications in the field
                                            of English literature with 18 articles published in UGC
                                            care and peer reviewed journals.
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="92f8_n7"
                                        >
                                            He also published a book titled{' '}
                                            <span className="italic" data-oid="be_jlxt">
                                                The Booker and The Postcolonial Indian Award Winning
                                                Novels
                                            </span>{' '}
                                            by gen next publications in 2017. Dr. Kathy has also
                                            published scholarly articles in several reputed national
                                            and international journals, including `&quot;`Entrenched
                                            Patriarchal Victorian Society in Oscar Wilde`&apos;`s A
                                            Woman of No Importance`&quot;`, published in the{' '}
                                            <span className="italic" data-oid="1o4gb1r">
                                                Sydney Journal of English
                                            </span>{' '}
                                            (Vol. 31, No. 1, 2021).
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jiuf2yp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0b-oud:"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="akfw64x">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="y1k1kqn"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c10-9:m"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="zi3i4qz">
                                        Department of English, UoH
                                    </p>
                                    <div className="mt-1" data-oid="q7qg6pj">
                                        <p className="text-gray-600 text-xs" data-oid="u_b6:0c">
                                            Assistant Professor at the Department of English,
                                            University of Hyderabad. His areas of interest are
                                            narratives of trauma, English poetry, the pedagogy of
                                            English in India, popular culture and media.
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="b8zzq3b"
                                        >
                                            He has published in journals like{' '}
                                            <span className="italic" data-oid="0r00.5n">
                                                Radical Teacher
                                            </span>
                                            ,{' '}
                                            <span className="italic" data-oid="m.2y4.x">
                                                The Explicator
                                            </span>
                                            ,{' '}
                                            <span className="italic" data-oid="j6zfvm8">
                                                Pedagogy
                                            </span>
                                            , and{' '}
                                            <span className="italic" data-oid="5d-cwty">
                                                English
                                            </span>
                                            . He has also been involved in the development of online
                                            educational resources (OERs) on platforms like Indian
                                            Writing in English Online, UGC`&apos;`s e-PG pathshala
                                            and NPTEL.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="74sx61h"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="67hz:k."
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="j_8t34a">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rkqgnyi"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="br6w4aq"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x7n33r-">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="lxz0o0d"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kwr_qs1"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jbo90nf">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="tyu:_8f"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="e60cqt8"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ha1ntpa">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7pvh8c5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="h3wjzk6"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="78i.opo">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jkrzozh"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-mpdeqj"
                                    >
                                        Dr. Purnachandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="a16v75h">
                                        Centre for Comparative Literature, UoH
                                    </p>
                                    <div className="mt-1" data-oid="rzdt78j">
                                        <p className="text-gray-600 text-xs" data-oid="ucx5ok6">
                                            Teaches in the Centre for Comparative Literature at
                                            University of Hyderabad. He is the author of the
                                            forthcoming book, `&quot;`Reading the Rejected: Dirt in
                                            Dalit Literature`&quot;` (Routledge).
                                        </p>
                                        <p
                                            className="text-gray-600 text-xs mt-1"
                                            data-oid="xo1xbd8"
                                        >
                                            He completed his PhD in Nottingham Trent University, UK.
                                            He has an MA in English Literature and also holds an MA
                                            in Spanish Literature. His research has been published
                                            in the{' '}
                                            <span className="italic" data-oid="kkex47s">
                                                Economic and Political Weekly
                                            </span>
                                            ,{' '}
                                            <span className="italic" data-oid="mo9-hn.">
                                                Outlook
                                            </span>
                                            , and edited compilations by Routledge and Cambridge
                                            University Press.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="x3z6rjq"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2eralxx"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x:52l8p">
                                        Department of English, UoH
                                    </p>
                                    <p className="text-gray-600 text-xs mt-1" data-oid="tfyc0lt">
                                        Teaches in the Department of English at the University of
                                        Hyderabad. Her interests lie in Shakespearean as well as
                                        other Early Modern Drama and its pedagogy, and she is the
                                        editor of Indian Writing in English Online, the first
                                        academic online educational resource dedicated to the
                                        subject.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="nvyg11:" />
        </div>
    );
}
