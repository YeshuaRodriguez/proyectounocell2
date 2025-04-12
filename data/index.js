import { indexPage } from "./pages/indexPage";


const commonData = {
    navigation: [
        { url: '/index.html', label: 'Inicio' },
        { url: '/about.html', label: 'Acerca de Nosotros' },
        { url: '/contact.html', label: 'Contáctanos' },
        { url: '/donations.html', label: 'Donaciones' },
        { url: '/events.html', label: 'Beneficios'},
        { url: '/faq.html', label: 'FAQ' },
        { url: '/gallery.html', label: 'Localizaciones' },
        { url: '/help.html', label: 'Cómo Donar' },
        { url: '/programs.html', label: 'Programas' },
        { url: '/blog.html', label: 'Blog' },
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath){
        case '/index.html':
            pageData = indexPage
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}