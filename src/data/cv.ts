// Static page content. Values marked as mock are placeholders for data that will come from outside.

export const person = {
    name: 'Filip Stępień',
    tagline: 'Oficjalna witryna internetowa',
    email: 'filip.stepien30@gmail.com',
    githubUrl: 'https://github.com/filip-stepien',
    cvPdf: { size: '(PDF, 128 KB)' }
};

export const marquee =
    '~*~ Witaj na mojej stronie domowej! ~*~ *** Zagłosuj w sondzie! *** Zapraszam do kontaktu przez formularz na dole strony *** Dodaj stronę do ulubionych, żeby nie zgubić adresu! *** Najnowsze zmiany znajdziesz w dziale „Aktualności” *** Kod tej strony znajdziesz na moim GitHubie ***';

export const navigation = [
    { href: '#o-mnie', label: 'O mnie' },
    { href: '#umiejetnosci', label: 'Umiejętności' },
    { href: '#doswiadczenie', label: 'Doświadczenie' },
    { href: '#wyksztalcenie', label: 'Wykształcenie' },
    { href: '#projekty', label: 'Projekty', isNew: true },
    { href: '#blog', label: 'Blog' },
    { href: '#github', label: 'Kalendarz', sidebarOnly: true },
    { href: '#linki', label: 'Linki', sidebarOnly: true },
    { href: '#kontakt', label: 'Kontakt' }
];

export const news = [
    {
        date: '28.10.2026',
        text: 'Nowa odsłona strony: kalendarz z aktywnością na GitHubie, blog, wersja angielska i CV do pobrania w PDF.'
    },
    { date: '12.10.2026', text: 'Nowy wpis na blogu: Avtrix – z motywu WordPress na Next.js.' },
    { date: '21.09.2026', text: 'Nowy wpis na blogu: Core Web Vitals w praktyce.' }
];

export const links = [
    { href: person.githubUrl, label: 'Profil na GitHubie', external: true },
    { href: 'https://trainer-mu-lime.vercel.app', label: 'Trainer (demo)', external: true },
    { href: `mailto:${person.email}`, label: 'Napisz e-mail' }
];

export const poll = {
    question: 'Jak Ci się podoba strona w stylu lat 2000?',
    options: [
        { id: 'klimat', label: 'Super klimat' },
        { id: 'nowoczesne', label: 'Fajna, ale wolę nowoczesne' },
        { id: 'nie', label: 'Nie w moim stylu' }
    ]
};

export const skills = [
    { label: 'Języki', value: 'TypeScript, JavaScript (ES6+), C, C++, C#, Python, Java, SQL' },
    { label: 'Frontend', value: 'React, Next.js, Three.js, HTML, CSS / Tailwind CSS' },
    { label: 'Mobile', value: 'React Native (Expo)' },
    { label: 'Backend', value: 'Node.js (Express, Hono), Spring Boot' },
    { label: 'Bazy danych', value: 'PostgreSQL (Neon, Supabase), ORM: Prisma, Drizzle' },
    { label: 'DevOps', value: 'Docker / Docker Compose, Vercel, Railway' },
    { label: 'Narzędzia', value: 'Git, Figma, Claude Code, Codex' }
];

export const experience = [
    {
        when: '2025 – teraz',
        company: 'Freelance',
        place: 'zdalnie',
        description:
            'Strony firmowe w Next.js, migracje z WordPressa, optymalizacja Core Web Vitals.'
    },
    {
        when: '2023 – 2025',
        company: 'Agencja interaktywna',
        place: 'Warszawa',
        description:
            "Frontend developer. Sklepy i landing page'e w React, współpraca z grafikami w Figmie."
    },
    {
        when: '2022',
        company: 'Staż',
        place: 'software house',
        description: 'Pierwsze komponenty w React, code review, praca z Gitem w zespole.'
    }
];

export const education = [
    {
        when: '2022 – 2026',
        school: ['Politechnika Świętokrzyska'],
        field: 'Informatyka, studia inżynierskie',
        honors: true
    },
    {
        when: '2018 – 2022',
        school: ['Zespół Szkół nr 3', 'w Ostrowcu Świętokrzyskim'],
        field: 'Technik informatyk'
    }
];

export const projects = [
    {
        title: 'Avtrix na Next.js',
        description:
            'Motyw WordPress przepisany na Next.js: te same widoki, statyczne generowanie i dużo lepszy wynik w Lighthouse.',
        tech: 'Next.js, React, CSS'
    },
    {
        title: 'Ta strona',
        description:
            'CV w stylu wczesnych lat 2000. Jeden plik HTML bez frameworków, responsywny, z aktywnością pobieraną na żywo z GitHuba.',
        tech: 'HTML, CSS, JavaScript'
    },
    {
        title: 'Sklep internetowy',
        description: 'Przykładowy projekt: koszyk, płatności i panel admina. Podmień na swój.',
        tech: 'Next.js, Postgres, Stripe'
    },
    {
        title: 'Pogodynka',
        description: 'Przykładowy projekt: prognoza pogody z mapą i wykresem temperatur.',
        tech: 'TypeScript, REST API'
    }
];

export const posts = [
    {
        date: '12.10.2026',
        title: 'Avtrix: z motywu WordPress na Next.js',
        excerpt:
            'Jak przeniosłem gotowy motyw na Next.js ze statycznym generowaniem: plan migracji, co poszło gładko, a co trzeba było przepisać od zera.'
    },
    {
        date: '21.09.2026',
        title: 'Core Web Vitals w praktyce',
        excerpt:
            'Najczęstsze przyczyny słabego LCP i CLS na stronach firmowych i jak je naprawić bez przepisywania całej aplikacji.'
    },
    {
        date: '03.08.2026',
        title: 'Strona w stylu 2003 roku w nowoczesnym CSS',
        excerpt:
            'Jak zbudowałem to CV: układ trzech kolumn na CSS Grid, responsywność i dane z API GitHuba w jednym pliku HTML.'
    }
];

const siteUrl = encodeURIComponent('https://filip-stepien.github.io/');

export const badges = [
    {
        variant: 'source',
        icon: '</>',
        label: 'kod strony',
        href: 'https://github.com/filip-stepien/filip-stepien.github.io'
    },
    {
        variant: 'w3c',
        icon: '✓',
        label: 'W3C valid HTML',
        href: `https://validator.w3.org/nu/?doc=${siteUrl}`
    },
    {
        variant: 'w3c',
        icon: '✓',
        label: 'W3C valid CSS',
        href: `https://jigsaw.w3.org/css-validator/validator?uri=${siteUrl}&profile=css3svg`
    },
    {
        variant: 'speed',
        icon: 'PSI',
        label: 'Page­Speed Insights',
        href: `https://pagespeed.web.dev/analysis?url=${siteUrl}`
    }
] as const;

// mock: values below will be replaced by live data
export const pageStatus = {
    today: 'Dziś jest piątek, 30 października 2026',
    visitorNumber: 2844,
    lastModified: '30.10.2026, 12:00'
};

// mock: month is 0-based, `levels` holds the GitHub activity level (0-4) of each day of the month
export const calendar = {
    year: 2026,
    month: 9,
    monthLabel: 'październik 2026',
    today: 30,
    levels: [
        1, 0, 2, 0, 3, 4, 2, 1, 3, 0, 0, 2, 4, 3, 1, 2, 0, 1, 3, 4, 2, 2, 1, 0, 0, 3, 2, 4, 1, 2, 0
    ],
    monthTotal: 58,
    yearTotal: 1210
};
